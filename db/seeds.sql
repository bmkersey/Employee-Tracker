INSERT INTO department (id, name) 
VALUES
(7, 'Engineering'),
(8, 'Sales'),
(9, 'Finance');

INSERT INTO role (title, salary, departmentID) 
VALUES 
("Lead Engineer", 100000, 7),
("Engineer", 100000, 7),
("Manager", 200000, 8);

INSERT INTO employees (firstName, lastName, role, managerID)
VALUES
("John", "Doe", "Intern", 1),
("Jane", "Doe", "Apprenctice", 2);