/**
 * Type annotations and variable declarations
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

/**
 * Functions
 */

// Function to calculate annual salary based on monthly salary and optional monthly bonus
function calculateAnnualSalary(
  monthlySalary: number,
  monthlyBonus: number = 0,
): number {
  return monthlySalary * 12 + monthlyBonus * 12;
}

// Calculate the annual salary for an employee with a monthly salary of $1200 and a monthly bonus of $200
const annualSalary = calculateAnnualSalary(1200, 200);

// Log the annual salary to the console
console.log(`Annual Salary: $${annualSalary}`);

// Function to check if an employee is eligible for promotion based on age and years of experience
const isEligibleForPromotion = (
  age: number,
  yearsOfExperience: number,
): boolean => {
  return age > 25 && yearsOfExperience >= 5;
};

// Check if the employee is eligible for promotion
const eligibleForPromotion = isEligibleForPromotion(employeeAge, 6);

// Log the eligibility for promotion to the console
console.log(
  `Is the employee eligible for promotion? ${eligibleForPromotion ? "Yes" : "No"}`,
);
