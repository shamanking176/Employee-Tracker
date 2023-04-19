INSERT INTO department (department_name) 
VALUES ('Technical'),
       ('Customer Service'),
       ('Packaging');

INSERT INTO roles (title, salary, department_id) 
VALUES ('Engineer', 75000, 1),
       ('Cashier', 40000, 2),
       ('Stocker',50000, 3),
       ('Developer', 80000, 1);



INSERT INTO employee (first_name,last_name,role_id,manager_id) 
VALUES ('Nate', 'Johnson', 1, null),
       ('Lucy', 'Ramsey', 2, null);