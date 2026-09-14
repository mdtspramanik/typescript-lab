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

/**
 * --------------------------------------- Type Aliases ---------------------------------------
 */

// Log a message to the console
console.log("\n--- Meeting Information ---");

// Define a type alias for meeting status
type MeetingStatus = "scheduled" | "in progress" | "completed" | "canceled";

// Define a type alias for meeting information
type MeetingInfo = {
  title: string;
  date: Date;
  attendees: string[];
  status: MeetingStatus;
};

// Create an object to store meeting information
let teamMeeting: MeetingInfo = {
  title: "Budget Planning Meeting",
  date: new Date(),
  attendees: ["John Doe", "Alice", "Bob", "Charlie"],
  status: "scheduled",
};

// Log the meeting information to the console
console.log(`Meeting Information: ${JSON.stringify(teamMeeting, null, 2)}`);

/**
 * --------------------------------------- Union & Intersection Types ---------------------------------------
 */

// Log a message to the console
console.log("\n--- Project Information ---");

// const

interface Project {
  projectName: string;
  projectId: string;
  projectType: "internal" | "external";
  startDate: Date;
  endDate: Date;
  budget: number;
  comments?: string;
}

interface Client {
  clientName: string;
  clientId: string;
}

// Create an object that combines both Project and Client interfaces using intersection types
let projectWithClient: Project & Client = {
  projectName: "ABC E-commerce Website",
  projectId: "project-001",
  projectType: "external",
  startDate: new Date(),
  endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Adding 30 days in milliseconds
  budget: 10000,
  comments: "Should be completed within deadline.",
  clientName: "Robert",
  clientId: "client-001",
};

// Log the project with client information to the console
console.log(
  `Project with Client Information: ${JSON.stringify(projectWithClient, null, 2)}`,
);
