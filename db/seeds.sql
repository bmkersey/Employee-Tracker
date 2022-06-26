INSERT INTO departments (department_name)
    VALUES 
        ('Admin'), 
        ('HR'),
        ('Non-Exempt'),
        ('Billing');

INSERT INTO roles (title, salary, department_id)
    VALUES 
        ('CEO', 150000.00, 1), 
        ('HR Manager', 100000.00, 2), 
        ('Billing Manager', 100000.00, 4), 
        ('Technician', 75000.00, 2), 
        ('Operator', 75000.00, 3);

INSERT INTO employees (first_name, last_name, role_id)
    VALUES 
        ('John', 'Doe', 1),
        ('Jane', 'Doe', 2),
        ('Jimothy', 'Doe', 3),
        ('Jim', 'Doe', 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES        
        ('Ted', 'Doe', 4, 2),
        ('Tim', 'Doe', 5, 3);