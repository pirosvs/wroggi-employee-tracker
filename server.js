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
const addDeptQuestions = [];
// add role questions 
const addRoleQuestions = [];
// add employee questions
const addEmployeeQuestions = [];

// route to get depts
app.get()
// route to get roles
app.get()
// route to get employees
app.get()
// route to post dept
app.post()
// route to post role
app.post()
// route to post employee
app.post()
// route to put/ update employee
app.put()