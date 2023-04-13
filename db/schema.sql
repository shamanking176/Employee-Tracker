CREATE DATABASE job_db;

USE job_db;

CREATE TABLE roles{
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(25) NOT NULL,
    role_id INT NOT NULL,
    department VARCHAR(25) NOT NULL,
    salary INT NOT NULL
}

CREATE TABLE department{
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_names VARCHAR(25) NOT NULL,
    department_id INT NOT NULL
}

CREATE TABLE employee{
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   employee_id INT NOT NULL,
   first_name VARCHAR(25) NOT NULL,
   last_name VARCHAR(25) NOT NULL,
   job_title VARCHAR(25) NOT NULL,
   department_names VARCHAR (25) NOT NULL,
   salary INT NOT NULL,
   manager VARCHAR(25) NOT NULL
}