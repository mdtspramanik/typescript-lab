/**
 * --------------------------------------- Type Annotations & Variable Declarations ---------------------------------------
 */

// Check if TypeScript is working
console.log("TypeScript is running!\n");

// Log a message to the console
console.log("--- Employee Information ---");

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
 * --------------------------------------- Functions ---------------------------------------
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

/**
 * --------------------------------------- Arrays, Tuples, and Objects ---------------------------------------
 */

// Log a message to the console
console.log("\n--- Employee Leave Information ---");

// Using an array to store names of employees on leave
let employeeOnLeave: string[] = ["Alice", "Bob", "Charlie"];

// Log the names of employees on leave to the console
console.log(`Employees on leave: ${employeeOnLeave.join(", ")}`);

// Using a tuple to store employee leave information (name and number of leave days)
let employeeLeaveInfo: [string, number] = ["Alice", 1];

// Log the employee leave information to the console
console.log(
  `Employee Leave Info: Name - ${employeeLeaveInfo[0]}, Leave Days - ${employeeLeaveInfo[1]}`,
);

// Using an object to store detailed information about an employee's leave
let employeeLeaveDetails: {
  name: string;
  employeeId: string;
  manager: string;
  department: string;
  leaveDays: number;
  startDate: Date;
  endDate: Date;
  reason: string;
  status: "approved" | "pending" | "rejected";
  comments: string;
} = {
  name: "Alice",
  employeeId: "EMP002",
  manager: "Smith",
  department: "Engineering",
  leaveDays: 1,
  startDate: new Date(),
  endDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // Adding 1 day in milliseconds
  reason: "Personal reasons",
  status: "pending",
  comments: "Please review and approve.",
};

// Log the employee leave details to the console
console.log(
  `Employee Leave Details: ${JSON.stringify(employeeLeaveDetails, null, 2)}`,
);

/**
 * --------------------------------------- Interfaces ---------------------------------------
 */

// Log a message to the console
console.log("\n--- Department Information ---");

// Define an interface for a department
interface Department {
  name: string;
  manager: string;
  employees: string[];
  isHiring?: boolean; // Optional property to indicate if the department is hiring
}

// Create objects for different departments using the department interface
let engineeringDepartment: Department = {
  name: "Engineering",
  manager: "Smith",
  employees: ["John Doe", "Alice", "Bob"],
  isHiring: true,
};

let hrDepartment: Department = {
  name: "Human Resources",
  manager: "Johnson",
  employees: ["Charlie", "David"],
  isHiring: false,
};

let financeDepartment: Department = {
  name: "Finance",
  manager: "Williams",
  employees: ["Eve", "Frank"],
};

// Log the department information to the console
console.log(
  `Engineering Department: ${JSON.stringify(engineeringDepartment, null, 2)}`,
);
console.log(
  `Human Resources Department: ${JSON.stringify(hrDepartment, null, 2)}`,
);
console.log(
  `Finance Department: ${JSON.stringify(financeDepartment, null, 2)}`,
);

/**
 * --------------------------------------- Enums ---------------------------------------
 */

// Log a message to the console
console.log("\n--- Budget Information ---");

// Define an enum for budget categories
enum BudgetCategory {
  Marketing = "Marketing",
  ResearchAndDevelopment = "Research and Development",
  Operations = "Operations",
  HumanResources = "Human Resources",
  Finance = "Finance",
}

// Create an object to store budget information for different categories
let budgetInfo: {
  category: BudgetCategory;
  allocatedAmount: number;
  spentAmount: number;
} = {
  category: BudgetCategory.Marketing,
  allocatedAmount: 10000,
  spentAmount: 5000,
};

// Log the budget information to the console
console.log(`Budget Information: ${JSON.stringify(budgetInfo, null, 2)}`);
