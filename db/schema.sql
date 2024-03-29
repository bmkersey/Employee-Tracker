DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE employees (
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR (30) NOT NULL,
    lastName VARCHAR (30) NOT NULL,
    role VARCHAR (30) NOT NULL,
    managerID INT NOT NULL 
);

CREATE TABLE department (
    id INT(10) NOT NULL PRIMARY KEY,
    name VARCHAR (30) NOT NULL
);


CREATE TABLE role (
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL(9,2) NOT NULL,
    departmentID INT NOT NULL
);