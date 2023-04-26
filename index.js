const inquirer = require("inquirer");
const path = require("path");
const { writeFile } = require("fs/promises");
const db = require("./db/connection");

function promptuser() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "job",
        message: "What would you like to do",
        choices: [
          "View All Roles",
          "View All Departments",
          "View All Employees",
          "Add a Department",
          "Add a Role",
          "Add an Employee",
          "Update an Employee Role",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.job) {
        case "View All Roles":
          viewAllRoles();
          break;
        case "View All Departments":
          viewAllDepartments();
          break;
        case "View All Employees":
          viewAllEmployees();
          break;
        case "Add a Department":
          addDepartment();
          break;
        case "Add a Role":
          addRole();
          break;
        case "Add an Employee":
          addEmployee();
          break;
        case "Update an Employee Role":
          updateEmployee();
          break;
        case "Exit":
          exit();
          break;
      }
    });
}
function viewAllRoles() {
  db.promise()
    .query("SELECT * FROM roles")
    .then(([rows]) => {
      console.table(rows);
      promptuser();
    });
}
function viewAllDepartments() {
  db.promise()
    .query("SELECT * FROM department")
    .then(([rows]) => {
      console.table(rows);
      promptuser();
    });
}
function viewAllEmployees() {
  db.promise()
    .query("SELECT * FROM employee")
    .then(([rows]) => {
      console.table(rows);
      promptuser();
    });
}
function addDepartment(){
    inquirer.prompt({
        type: 'input',
        name: 'department_name',
        message: 'Enter department name',

    }).then(({
        department_name
    })=>{
        db.promise().query('INSERT INTO department SET ?',{department_name}).then(([rows])=>{
            if(rows.affectedRows>0){
                viewAllDepartments();
            }else{
                console.info('failed to add department')
                promptuser();
            };
        })
    })
}
async function addRole(){
    const [departments] = await db.promise().query('SELECT * FROM department')
    const departmentarray = departments.map(({id,department_name})=>({name:department_name,value:id}))
    console.log(departmentarray);
    inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'Enter job title',

    },{
      type: 'input',
        name: 'salary',
        message: 'Enter salary',
    },
    {
      type: 'input',
        name: 'department_id',
        message: 'Enter department id',
    }]).then(({title, salary, department_id})=>{
        db.promise().query('INSERT INTO roles SET ?',{
          title: title,
          salary: salary,
          department_id: department_id
        }).then(([rows])=>{
          console.table(rows)
          promptuser();
        })
    })
}

async function addEmployee(){
  const [roles] = await db.promise().query('SELECT * FROM roles')
  const rolearray = roles.map(({id,title})=>({name:title,value:id}))
  console.log(rolearray)
  inquirer.prompt([{
    type: 'input',
    name: 'first_name',
    message: 'Enter first name',

},{
  type: 'input',
    name: 'last_name',
    message: 'Enter last name',
},
{
  type: 'input',
    name: 'role_id',
    message: 'Enter role id',
},
{
  type: 'input',
  name: 'manager_id',
  message: 'Enter manager id',
}]).then(({first_name,last_name,role_id,manager_id})=>{
    db.promise().query('INSERT INTO employee SET ?',{
      first_name: first_name,
      last_name: last_name,
      role_id: role_id,
      manager_id: manager_id
    }).then(([rows])=>{
      console.table(rows)
      promptuser();
    })
   
})
}


async function updateEmployee (){
  inquirer.prompt([{
  type: 'input',
  name: 'employee_id',
  message: 'Enter employee id',

},{
type: 'input',
  name: 'role_id',
  message: 'Enter role id',
},
]).then(({employee_id,role_id})=>{
  db.promise().query(`UPDATE employee SET role_id = ${role_id} WHERE employee.id = ${employee_id}`,{
    employee_id: employee_id,
    role_id: role_id
  }).then(([rows])=>{
    console.table(rows)
    promptuser();
  })
})
}

function exit(){
  process.exit(0)
}

promptuser();