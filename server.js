const express = require('express');
const inquirer = require('inquirer');

// Sets our viewport
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// Set up the listener to host
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

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

// route to get depts
app.get('/api/dept', async (req, res) => {
  try {
    res.status(200).json(userData);
  } catch (err) {
      res.json(err);
  }
})
// route to get roles
app.get('/api/roles', async (req, res) => {
  try {
    res.status(200).json(userData);
  } catch (err) {
      res.json(err);
  }
})
// route to get employees
app.get('/api/employees', async (req, res) => {
  try {
    res.status(200).json(userData);
  } catch (err) {
      res.json(err);
  }
})
// route to post dept
app.post('/api/dept', async (req, res) => {
  try {
    res.status(200).json(userData);
  } catch (err) {
      res.json(err);
  }
})
// route to post role
app.post('/api/roles', async (req, res) => {
  try {
    res.status(200).json(userData);
  } catch (err) {
      res.json(err);
  }
})
// route to post employee
app.post('/api/employees', async (req, res) => {
  try {
    res.status(200).json(userData);
  } catch (err) {
      res.json(err);
  }
})

// route to put/ update employee
app.put('/api/amployee/:id', async (req, res) => {
  // need to specify we're updating 
  try {
    const userData = await employee.update(req.role_id, {
      where: {
        id: req.params.id,
      },
    },
    res.status(200).json(userData)
  );
  } catch (err) {
      res.json(err);
  }
});