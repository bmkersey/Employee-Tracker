INSERT INTO departments (department_name)
    VALUES 
        ('Administraion'), 
        ('Fleet'), 
        ('Billing');

INSERT INTO roles (title, salary, department_id)
    VALUES 
        ('CEO', 150000.00, 1), 
        ('Fleet Manager', 90000.00, 2), 
        ('Billing Manager', 90000.00, 3), 
        ('Technician', 75000.00, 2), 
        ('Operator', 75000.00, 3);

INSERT INTO employees (first_name, last_name, role_id)
    VALUES 
        ('John', 'Doe', 1),
        ('Jane', 'Doe', 2),
        ('Bill', 'Doe', 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES        
        ('Hello', 'World', 4, 2),
        ('Good', 'Evening', 5, 3);