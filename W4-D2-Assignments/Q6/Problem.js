// TypeScript Application Demonstrating Various Data Types
// Numeric Types
var age = 30;
var largeNumber = 9007199254740991n;
// String Type
// Boolean Type
var isActive = true;
// Array Types
var numbers = [1, 2, 3];
var strings = ["hello", "world"];
var booleans = [true, false];
// Tuple Type
var person = ["Alice", 30];
// Enum Type
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Up;
// Any Type
var randomValue = "Could be anything";
randomValue = 42; // Now it's a number
// Void Type
function logMessage(message) {
    console.log(message);
}
// Null and Undefined Types
var nothing = null;
var notAssigned = undefined;
// Function with parameter types and return type
function add(a, b) {
    return a + b;
}
var result = add(5, 3);
console.log("Addition Result: ".concat(result));
var myCar = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
};
var coordinate = { x: 10, y: 20 };
// Testing the created objects and types
logMessage("Name: ".concat(name));
logMessage("Age: ".concat(age));
logMessage("Is Active: ".concat(isActive));
logMessage("Car Make: ".concat(myCar.make, ", Model: ").concat(myCar.model, ", Year: ").concat(myCar.year));
logMessage("Coordinate: (".concat(coordinate.x, ", ").concat(coordinate.y, ")"));
logMessage("Direction: ".concat(move));
logMessage("Nothing: ".concat(nothing));
logMessage("Not Assigned: ".concat(notAssigned));
