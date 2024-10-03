// TypeScript University Records Management Application

// Base Class for Person
class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Method to display basic information
    displayInfo(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
  // Subclass for Student
  class Student extends Person {
    studentId: number;
    course: string;
    semester: number;
  
    constructor(name: string, age: number, studentId: number, course: string, semester: number) {
      super(name, age); // Call the constructor of the Person class
      this.studentId = studentId;
      this.course = course;
      this.semester = semester;
    }
  
    // Method to display student details
    displayInfo(): void {
      super.displayInfo(); // Call the base class method
      console.log(`Student ID: ${this.studentId}, Course: ${this.course}, Semester: ${this.semester}`);
    }
  }
  
  // Subclass for Staff
  class Staff extends Person {
    staffId: number;
    department: string;
    position: string;
  
    constructor(name: string, age: number, staffId: number, department: string, position: string) {
      super(name, age); // Call the constructor of the Person class
      this.staffId = staffId;
      this.department = department;
      this.position = position;
    }
  
    // Method to display staff details
    displayInfo(): void {
      super.displayInfo(); // Call the base class method
      console.log(`Staff ID: ${this.staffId}, Department: ${this.department}, Position: ${this.position}`);
    }
  }
  
  // Create instances of Student and Staff classes
  const student1 = new Student("Alice Johnson", 20, 101, "Computer Science", 2);
  const staff1 = new Staff("Bob Smith", 45, 201, "Human Resources", "Manager");
  
  // Testing: Display details of student and staff members
  console.log("Student Details:");
  student1.displayInfo();
  console.log("\nStaff Details:");
  staff1.displayInfo();
  