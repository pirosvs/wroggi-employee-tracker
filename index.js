const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

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
    choices: ["View All Employees"]
}
]

function simpleQueryExample()
{
    inquirer.prompt()
    db.query("SELECT first_name, last_name FROM employee;", function(err, results) {
        console.table(results);
    });
}

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

function runCommmands(data)
{
    if(data.command == 'View All Employees')
    {
        return viewAllEmployees();
    }
    else if(data.command == "")
    {}
}

const commandLoop = async() =>
{
    var repeat = true;
    while(repeat)
    {
        repeat = await inquirer.prompt(commandEntryQuestions)
        .then(runCommmands)
    }
}

function init()
{

}

function cleanup()
{
    db.end();
}

init();
commandLoop().then(cleanup);
