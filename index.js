const inquirer = require('inquirer');
const path = require('path');
const {writeFile} = require('fs/promises');

inquirer.prompt ([{
    type: 'list',
    name: 'job',
    message: "What would you like to do",
    choices: ['View All Roles', 
    'View All Departments', 
    'View All Employees', 
    'Add a Department',
    'Add a Role',
    'Add an Employee',
    'Update an Employee Role',
    'Exit']
}])
.then(answers => {
if(answers.job === 'View All Roles') {
    inquirer.prompt ([{

    }])
}
else if(answers.job === 'View All Departments') {

}
else if(answers.job === 'View All Employees') {

}

else if(answers.job === 'Add a Department') {
    inquirer.prompt ([{
        type: 'input',
    name: 'department',
    message: "Enter a new department",
    }])
}

else if(answers.job === 'Add a Role') {
    inquirer.prompt ([{
        type: 'input',
    name: 'role',
    message: "Enter a new role",
    },
    {
        type: 'input',
        name:'salary',
        message: "Enter the salary for this role",
    },
    {
        type: 'input',
        name: 'department',
        message: "Enter the department for this role",
    }
])
}

else if(answers.job === 'Add an Employee') {
    inquirer.prompt ([{
        type: 'input',
    name: 'firstname',
    message: "Enter the employee's first name",
     
    },
    {
        type: 'input',
        name: 'lastname',
        message: "Enter the employee's last name",
    },
    {
        type: 'input',
        name: 'role',
        message: "Enter the employee's role",
    },
    {
        type: 'input',
        name:'manager',
        message: "Enter the employee's manager",
    },])

}

else if(answers.job === 'Update an Employee Role') {
inquirer.prompt ([{
    type: 'list',
    name: 'job',
    message: "What would you like to do",
    choices: []

}])
}

else if(answers.job === 'Exit') {
db.end();
}

})