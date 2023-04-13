INSERT INTO roles (job_title, role_id, department, salary) 
VALUES ('Engineer', 1, 'Technical', 75000),
       ('Cashier', 2, 'Customer Service', 40000),
       ('Stocker', 3, 'Packaging', 50000),
       ('Developer', 4, 'Technical', 80000)

INSERT INTO department (department_names, department_id) 
VALUES ('Technical', 1),
       ('Customer Service', 2),
       ('Packaging', 3)

INSERT INTO employee (employee_id ,first_name ,last_name ,job_title ,department_names ,salary ,manager ) 
VALUES (1, 'Nate', 'Johnson', 'Cashier', 'Customer Service', 40000, 'James')
       (1, 'Lucy', 'Ramsey', 'Engineer', 'Technical', 75000, 'David')