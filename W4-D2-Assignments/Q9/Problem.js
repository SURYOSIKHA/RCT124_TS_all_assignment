// Enum to represent vehicle categories
var VehicleCategory;
(function (VehicleCategory) {
    VehicleCategory["HANDICAPPED"] = "Handicapped";
    VehicleCategory["SMALL_CAR"] = "Small Car";
    VehicleCategory["MID_SIZED_CAR"] = "Mid-Sized Car";
    VehicleCategory["LARGE_VEHICLE"] = "Large Vehicle";
})(VehicleCategory || (VehicleCategory = {}));
// Class to represent a parking slot
var ParkingSlot = /** @class */ (function () {
    function ParkingSlot(category, chargeRatePerHour) {
        this.id = ++ParkingSlot.slotCount;
        this.category = category;
        this.chargeRatePerHour = chargeRatePerHour;
        this.isOccupied = false;
    }
    ParkingSlot.slotCount = 0; // Static variable to keep track of total slots
    return ParkingSlot;
}());
// Class to represent a vehicle
var Vehicle = /** @class */ (function () {
    function Vehicle(licensePlate, category) {
        this.licensePlate = licensePlate;
        this.category = category;
        this.entryTime = new Date(); // Set the entry time to now
    }
    return Vehicle;
}());
// Class to manage the parking lot
var ParkingLot = /** @class */ (function () {
    function ParkingLot() {
        this.slots = [];
        this.parkedVehicles = new Map();
    }
    // Method to add a parking slot
    ParkingLot.prototype.addSlot = function (slot) {
        this.slots.push(slot);
    };
    // Method to park a vehicle
    ParkingLot.prototype.parkVehicle = function (vehicle) {
        var availableSlot = this.slots.find(function (slot) { return !slot.isOccupied && slot.category === vehicle.category; });
        if (availableSlot) {
            availableSlot.isOccupied = true;
            this.parkedVehicles.set(vehicle.licensePlate, vehicle);
            return "Vehicle ".concat(vehicle.licensePlate, " parked in slot ").concat(availableSlot.id);
        }
        return null; // No available slots
    };
    // Method to calculate charges and remove the vehicle
    ParkingLot.prototype.exitVehicle = function (licensePlate) {
        var vehicle = this.parkedVehicles.get(licensePlate);
        if (!vehicle)
            return "Vehicle not found!";
        var slot = this.slots.find(function (slot) { return slot.category === vehicle.category && slot.isOccupied; });
        if (slot) {
            var duration = (new Date().getTime() - vehicle.entryTime.getTime()) / (1000 * 60 * 60); // Convert ms to hours
            var charge = Math.ceil(duration) * slot.chargeRatePerHour; // Round up to nearest hour
            slot.isOccupied = false; // Free the slot
            this.parkedVehicles.delete(licensePlate); // Remove the vehicle
            return "Vehicle ".concat(licensePlate, " exited. Total charge: $").concat(charge.toFixed(2));
        }
        return "No record found for vehicle ".concat(licensePlate, ".");
    };
    // Method to get available parking spaces by category
    ParkingLot.prototype.getAvailableSpaces = function () {
        var availableSpaces = {};
        this.slots.forEach(function (slot) {
            if (!slot.isOccupied) {
                availableSpaces[slot.category] = (availableSpaces[slot.category] || 0) + 1;
            }
        });
        return availableSpaces;
    };
    return ParkingLot;
}());
// Example Usage
var parkingLot = new ParkingLot();
// Adding parking slots
parkingLot.addSlot(new ParkingSlot(VehicleCategory.HANDICAPPED, 2.00));
parkingLot.addSlot(new ParkingSlot(VehicleCategory.SMALL_CAR, 1.50));
parkingLot.addSlot(new ParkingSlot(VehicleCategory.MID_SIZED_CAR, 1.75));
parkingLot.addSlot(new ParkingSlot(VehicleCategory.LARGE_VEHICLE, 3.00));
// Parking vehicles
var vehicle1 = new Vehicle("ABC123", VehicleCategory.SMALL_CAR);
console.log(parkingLot.parkVehicle(vehicle1));
var vehicle2 = new Vehicle("XYZ789", VehicleCategory.LARGE_VEHICLE);
console.log(parkingLot.parkVehicle(vehicle2));
// Getting available spaces
console.log(parkingLot.getAvailableSpaces());
// Exiting vehicles
console.log(parkingLot.exitVehicle("ABC123"));
console.log(parkingLot.getAvailableSpaces());
