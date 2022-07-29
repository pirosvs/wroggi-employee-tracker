DROP DATABASE IF EXISTS employee_list_db;
CREATE DATABASE employee_list_db;

USE employee_list_db;

DROP TABLE IF EXISTS department;
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS employee_role;
CREATE TABLE employee_role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    dept_id INT,
    FOREIGN KEY (dept_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    manager_id INT,
    role_id INT NOT NULL, 
    FOREIGN KEY (role_id)
    REFERENCES employee_role(id)
);