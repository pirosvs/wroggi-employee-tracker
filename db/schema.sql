DROP DATABASE IF EXISTS employee_list_db;
CREATE DATABASE employee_list_db;

USE employee_list_db;

DROP TABLE IF EXISTS department;
CREATE TABLE department (
    id INT AUTO INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30)
);

DROP TABLE IF EXISTS employee_role;
CREATE TABLE employee_role (
    id INT AUTO INCREMENT PRIMARY KEY,
    title VARCHAR(30)
    salary DECIMAL,
    dept_id INT --take on that in dept table
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id INT AUTO INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id , -- hold reference to employee role
    manager_id -- hold reference to another employee that is the manager of the current employee (null if the employee has no manager)
);