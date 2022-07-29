const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
// const util = require('util');

// create the connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_list_db'
});

// add dept quetions
const addDeptQuestions = [
{
    type: "input",
    message: "What is the name of the department?",
    name: "deptName"
}
];

// add role questions 
const addRoleQuestions = [
{
    type: "input",
    message: "What is the name of the role?",
    name: "roleName"
},
{
    type: "input",
    message: "What is the salary of this role?",
    name: "roleSalary"
},
{
    type: "list",
    message: "Which department does this role belong to?",
    name: "roleDept",
    choices: [] // needs to take the current departments as it can be updated by user
}
];
// add employee questions
const addEmployeeQuestions = [
{
    type: "input",
    message: "What is the employee's first name?",
    name: "firstName"
},
{
    type: "input",
    message: "What is the employee's last name?",
    name: "lastName"
},
{
    type: "list",
    message: "What is the employee's role?",
    name: "employeeRole",
    choices: [] // needs to take the current roles
},
{
    type: "list",
    message: "Who is the employee's manager?",
    name: "managerName",
    choices: [] // can just take all employee names
}
];

// update employee questions
const updateQuestions = [
{
    type: "list",
    message: "Which employee would you like to update?",
    name: "updateEmployee",
    choices: [] // can just take all employee names
},
{
    type: "list",
    message: "What is the employee's role?",
    name: "updateRole",
    choices: [] // needs to take all current roles
}
];

const commandEntryQuestions = [
{
    type: "list",
    message: "What would you like to do?",
    name: "command",
    choices: ["View All Employees", "View All Departments", "View All Roles", "Add a Department", "Add a Role", "Add an Employee", 
    "Update an Employee Role", "Exit"]
}
]

// Our view functions to get a table of the current information in each table
function viewAllEmployees()
{
    db.query("SELECT * FROM employee;", function(err, results) {
        if(err != null)
        {
            console.error(err);
        }
        // console.info(results);
        console.table(results);
    });
}

function viewAllDeparments()
{
    db.query("SELECT * FROM department;", function(err, results) {
        if(err != null)
        {
            console.error(err);
        }
        console.table(results);
    });
}

function viewAllRoles()
{
    db.query("SELECT * FROM employee_role;", function(err, results) {
        if(err != null)
        {
            console.error(err);
        }
        console.table(results);
    });
}

// Our add functions to add information (rows) to our tables
const addDepartment = async (data) => {
    // var sql = "INSERT INTO department (dept_name) VALUES ?";
    // var values = data.deptName;
    await inquirer.prompt(addDeptQuestions)
    await db.promise().query("INSERT INTO department (dept_name) VALUES ?", [data.deptName], function(err, results) {
        if(err != null)
        {
            console.error(err);
        }
        console.table(results);
    });
}

// Other add functions for role and employee are not filled as I could not get the one I was using as an example, addDepartment, 
    // to work with any method
function addRole() {
// Should be similar to addDepartment but for our roles table
    inquirer.prompt(addRoleQuestions)
}

function addEmployee() {
// Should be similar to other add roles but for our employee table, also must be able to properly take in
    // role id based on the word being offered
    inquirer.prompt(addEmployeeQuestions)
}

// Our update employee function to change an existing employee's role
function updateEmployee() {
    // Needs to check it's updating the right employee by employee id and set role to the role id based on which 
    // word option is chosen
    db.query("UPDATE employee SET role_id=[] WHERE id=id;")
}

// Should run the command related to the response to the opening menu
function runCommmands(data)
{
    if(data.command == 'View All Employees')
    {
        return viewAllEmployees();
    }
    else if(data.command == "View All Departments")
    {
        return viewAllDeparments();
    }
    else if(data.command == "View All Roles")
    {
        return viewAllRoles();
    }
    else if(data.command == "Add a Department")
    {
        return addDepartment();
    }
    else if(data.command == "Add a Role")
    {
        // return addRole();
    }
    else if(data.command == "Add a Employee")
    {
        // return addEmployee();
    }
    else if(data.command == "Update an Employee")
    {
        // return updateEmployee();
    }
    else if(data.command == "Exit")
    {
        repeat = false;
    }
}

// Should loop our entry question and commands until user chooses to exit
const commandLoop = async() =>
{
    console.log("We are in the loop!")
    var repeat = true;
    while(repeat)
    {
        console.log("We are repeating!")
        repeat = await inquirer.prompt(commandEntryQuestions)
        .then(runCommmands)
    }
}

// const init = async() =>
// {
//     await commandLoop();
//     await cleanup();
// }

// Closes our connection to MySQL server
function cleanup()
{
    console.log("We are ending!");
    db.end();
}

// init();
commandLoop().then(cleanup);
