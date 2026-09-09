/**
 * This is a simple TypeScript program that demonstrates basic type annotations and variable declarations.
 */

// Check if TypeScript is working
console.log("TypeScript is running!");

// Define some variables with type annotations
let employeeName: string = "John Doe";
let employeeAge: number = 30;
let isWorking: boolean = true;

// Log the variables to the console
console.log(
  `Employee Name: ${employeeName}\nEmployee Age: ${employeeAge}\nIs Working: ${isWorking}`,
);

// Declaring variables without initial values
let employeeId: string;

// Using union types to allow a variable to hold multiple types
let department: string | null = null;

// Using an empty array with a specific type
let employeeRoles: string[] = [];

// Assigning a value to the previously declared variable "employeeId"
employeeId = "EMP001";

// Assigning a value to the "department" variable
department = "Engineering";

// Adding roles to the "employeeRoles" array
employeeRoles.push("Developer");
employeeRoles.push("Team Lead");

// Log the updated variables to the console
console.log(
  `Employee ID: ${employeeId}\nDepartment: ${department}\nEmployee Roles: ${employeeRoles.join(", ")}`,
);
