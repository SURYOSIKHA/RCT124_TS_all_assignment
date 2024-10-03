// Enum to represent vehicle categories
enum VehicleCategory {
    HANDICAPPED = "Handicapped",
    SMALL_CAR = "Small Car",
    MID_SIZED_CAR = "Mid-Sized Car",
    LARGE_VEHICLE = "Large Vehicle"
}

// Class to represent a parking slot
class ParkingSlot {
    private static slotCount = 0; // Static variable to keep track of total slots
    public id: number;
    public category: VehicleCategory;
    public chargeRatePerHour: number;
    public isOccupied: boolean;

    constructor(category: VehicleCategory, chargeRatePerHour: number) {
        this.id = ++ParkingSlot.slotCount;
        this.category = category;
        this.chargeRatePerHour = chargeRatePerHour;
        this.isOccupied = false;
    }
}

// Class to represent a vehicle
class Vehicle {
    public licensePlate: string;
    public category: VehicleCategory;
    public entryTime: Date;

    constructor(licensePlate: string, category: VehicleCategory) {
        this.licensePlate = licensePlate;
        this.category = category;
        this.entryTime = new Date(); // Set the entry time to now
    }
}

// Class to manage the parking lot
class ParkingLot {
    private slots: ParkingSlot[];
    private parkedVehicles: Map<string, Vehicle>; // Maps license plate to Vehicle

    constructor() {
        this.slots = [];
        this.parkedVehicles = new Map<string, Vehicle>();
    }

    // Method to add a parking slot
    public addSlot(slot: ParkingSlot) {
        this.slots.push(slot);
    }

    // Method to park a vehicle
    public parkVehicle(vehicle: Vehicle): string | null {
        const availableSlot = this.slots.find(slot => !slot.isOccupied && slot.category === vehicle.category);
        if (availableSlot) {
            availableSlot.isOccupied = true;
            this.parkedVehicles.set(vehicle.licensePlate, vehicle);
            return `Vehicle ${vehicle.licensePlate} parked in slot ${availableSlot.id}`;
        }
        return null; // No available slots
    }

    // Method to calculate charges and remove the vehicle
    public exitVehicle(licensePlate: string): string {
        const vehicle = this.parkedVehicles.get(licensePlate);
        if (!vehicle) return `Vehicle not found!`;

        const slot = this.slots.find(slot => slot.category === vehicle.category && slot.isOccupied);
        if (slot) {
            const duration = (new Date().getTime() - vehicle.entryTime.getTime()) / (1000 * 60 * 60); // Convert ms to hours
            const charge = Math.ceil(duration) * slot.chargeRatePerHour; // Round up to nearest hour
            slot.isOccupied = false; // Free the slot
            this.parkedVehicles.delete(licensePlate); // Remove the vehicle
            return `Vehicle ${licensePlate} exited. Total charge: $${charge.toFixed(2)}`;
        }
        return `No record found for vehicle ${licensePlate}.`;
    }

    // Method to get available parking spaces by category
    public getAvailableSpaces(): { [key: string]: number } {
        const availableSpaces: { [key: string]: number } = {};
        this.slots.forEach(slot => {
            if (!slot.isOccupied) {
                availableSpaces[slot.category] = (availableSpaces[slot.category] || 0) + 1;
            }
        });
        return availableSpaces;
    }
}

// Example Usage
const parkingLot = new ParkingLot();

// Adding parking slots
parkingLot.addSlot(new ParkingSlot(VehicleCategory.HANDICAPPED, 2.00));
parkingLot.addSlot(new ParkingSlot(VehicleCategory.SMALL_CAR, 1.50));
parkingLot.addSlot(new ParkingSlot(VehicleCategory.MID_SIZED_CAR, 1.75));
parkingLot.addSlot(new ParkingSlot(VehicleCategory.LARGE_VEHICLE, 3.00));

// Parking vehicles
const vehicle1 = new Vehicle("ABC123", VehicleCategory.SMALL_CAR);
console.log(parkingLot.parkVehicle(vehicle1));

const vehicle2 = new Vehicle("XYZ789", VehicleCategory.LARGE_VEHICLE);
console.log(parkingLot.parkVehicle(vehicle2));

// Getting available spaces
console.log(parkingLot.getAvailableSpaces());

// Exiting vehicles
console.log(parkingLot.exitVehicle("ABC123"));
console.log(parkingLot.getAvailableSpaces());
