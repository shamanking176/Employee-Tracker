DROP DATABASE IF EXISTS job_db;
CREATE DATABASE job_db;

USE job_db;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(25) NOT NULL
);

CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(25) NOT NULL,
    salary INT NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);


CREATE TABLE employee(
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   first_name VARCHAR(25) NOT NULL,
   last_name VARCHAR(25) NOT NULL,
   role_id INT,
   manager_id INT,
   FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
   FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);