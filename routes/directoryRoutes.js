const router = require('express').Router();
const Dept = require('../models/Dept');
const Role = require('../models/Role');
const Employee = require('../models/Employee');

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