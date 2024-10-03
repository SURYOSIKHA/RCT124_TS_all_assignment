// TypeScript Application Demonstrating Various Data Types

// Numeric Types
let age: number = 30;
let largeNumber: bigint = 9007199254740991n;

// String Type

// Boolean Type
let isActive: boolean = true;

// Array Types
let numbers: number[] = [1, 2, 3];
let strings: string[] = ["hello", "world"];
let booleans: boolean[] = [true, false];

// Tuple Type
let person: [string, number] = ["Alice", 30];

// Enum Type
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;

// Any Type
let randomValue: any = "Could be anything";
randomValue = 42; // Now it's a number

// Void Type
function logMessage(message: string): void {
  console.log(message);
}

// Null and Undefined Types
let nothing: null = null;
let notAssigned: undefined = undefined;

// Function with parameter types and return type
function add(a: number, b: number): number {
  return a + b;
}

let result: number = add(5, 3);
console.log(`Addition Result: ${result}`);

// Interface
interface Car {
  make: string;
  model: string;
  year: number;
}

let myCar: Car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};

// Type Alias
type Point = {
  x: number;
  y: number;
};

let coordinate: Point = { x: 10, y: 20 };

// Testing the created objects and types
logMessage(`Name: ${name}`);
logMessage(`Age: ${age}`);
logMessage(`Is Active: ${isActive}`);
logMessage(`Car Make: ${myCar.make}, Model: ${myCar.model}, Year: ${myCar.year}`);
logMessage(`Coordinate: (${coordinate.x}, ${coordinate.y})`);
logMessage(`Direction: ${move}`);
logMessage(`Nothing: ${nothing}`);
logMessage(`Not Assigned: ${notAssigned}`);
