/**
 * This is a simple TypeScript program that demonstrates basic type annotations and variable declarations.
 */

// Check if TypeScript is working
console.log("TypeScript is running!");

// Define some variables with type annotations
let userName: string = "John Doe";
let userAge: number = 30;
let isActive: boolean = true;

// Log the variables to the console
console.log(
  `User Name: ${userName}\nUser Age: ${userAge}\nIs Active: ${isActive}`,
);

// Declaring variables without initial values
let userCount: number;

// Using union types to allow a variable to hold multiple types
let selectedUser: string | null = null;

// Using an empty array with a specific type
let userRoles: string[] = [];

// Assigning a value to the previously declared variable "userCount"
userCount = 5;

// Assigning a value to the "selectedUser" variable
selectedUser = "Jane Smith";

// Adding roles to the "userRoles" array
userRoles.push("admin");
userRoles.push("editor");

// Log the updated variables to the console
console.log(
  `User Count: ${userCount}\nSelected User: ${selectedUser}\nUser Roles: ${userRoles.join(", ")}`,
);
