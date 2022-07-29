const inquirer = require('inquirer');

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