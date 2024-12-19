// Definition of the function EmployeeInfo
function EmployeeInfo(name, Salary) {
    console.log("Welcome " + name + ". Your monthly Salary is " + Salary);
}

console.log("This is my first program");
let EmpName = "John";
let EmpSalary = 50000;

// Calling the function EmployeeInfo
EmployeeInfo(EmpName, EmpSalary);
// Arrow function for Employee Skills
const EmpSkills = (skills) => {
    console.log("Expert in " + skills);
};

// Call the arrow function
EmpSkills("Java");

const Student = require('./StudentInfo');
const Person = require('./Person');

// Using the StudentInfo module
console.log("Student Name: " + Student.getName());
console.log("Campus Location: " + Student.Location());
console.log("Date of Birth: " + Student.dob);
console.log("Grade: " + Student.Studentgrade(55));

// Using the Person module
const person1 = new Person("Jim", 30, "jim@example.com");
console.log("Using Person Module: " + person1.getPersonInfo());

const os = require("os");
const util = require('util');

console.log("Temporary Directory: " + os.tmpdir());
console.log("Hostname: " + os.hostname());
console.log("OS: " + os.platform() + " Release: " + os.release());
console.log("Uptime: " + (os.uptime() / 3600) + " hours");
console.log("User Info: " + util.inspect(os.userInfo()));
console.log("Total Memory: " + os.totalmem() / 1e9 + " GB");
console.log("Free Memory: " + os.freemem() / 1e9 + " GB");
console.log("CPU Info: " + util.inspect(os.cpus()));
console.log("Network Interfaces: " + util.inspect(os.networkInterfaces()));
