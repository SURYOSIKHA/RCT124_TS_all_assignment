// TypeScript University Records Management Application
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base Class for Person
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method to display basic information
    Person.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age));
    };
    return Person;
}());
// Subclass for Student
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentId, course, semester) {
        var _this = _super.call(this, name, age) || this; // Call the constructor of the Person class
        _this.studentId = studentId;
        _this.course = course;
        _this.semester = semester;
        return _this;
    }
    // Method to display student details
    Student.prototype.displayInfo = function () {
        _super.prototype.displayInfo.call(this); // Call the base class method
        console.log("Student ID: ".concat(this.studentId, ", Course: ").concat(this.course, ", Semester: ").concat(this.semester));
    };
    return Student;
}(Person));
// Subclass for Staff
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(name, age, staffId, department, position) {
        var _this = _super.call(this, name, age) || this; // Call the constructor of the Person class
        _this.staffId = staffId;
        _this.department = department;
        _this.position = position;
        return _this;
    }
    // Method to display staff details
    Staff.prototype.displayInfo = function () {
        _super.prototype.displayInfo.call(this); // Call the base class method
        console.log("Staff ID: ".concat(this.staffId, ", Department: ").concat(this.department, ", Position: ").concat(this.position));
    };
    return Staff;
}(Person));
// Create instances of Student and Staff classes
var student1 = new Student("Alice Johnson", 20, 101, "Computer Science", 2);
var staff1 = new Staff("Bob Smith", 45, 201, "Human Resources", "Manager");
// Testing: Display details of student and staff members
console.log("Student Details:");
student1.displayInfo();
console.log("\nStaff Details:");
staff1.displayInfo();
