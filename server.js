const inquirer = require("inquirer");
const cTable = require("console.table");
// creates a promise with this imported file
const connection = require("./db/connection");


//main starting function of program
function runDatabase() {
inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do today?",
        name: "action",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee",
          "Exit",
        ],
      },
    ])
    .then(function (answers) {
      switch (answers.action) {
        case "View All Departments":
          viewAllDepts();
          break;

        case "View All Roles":
          viewAllRoles();
          break;

        case "View All Employees":
          viewAllEmployees();
          break;

        case "Add Department":
          addDepartment();
          break;

        case "Add Role":
          addRole();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Update Employee":
          updateEmployee();
          break;

        case "Exit":
          console.log("-------");
          console.log("Goodbye");
          console.log("-------");
          connection.end();
          break;
      }
    });
}

// View All Departments
function viewAllDepts() {
  connection.query(
    "SELECT department.id AS ID, department.name AS Department FROM department",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      runDatabase();
    }
  );
}

//Add department function
function addDepartment() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What Department would you like to add? ",
        validate: userInput => {
          if (userInput) {
            return true;
          } else {
            console.log("Please enter a department name");
            return false;
          }
        }
      },
      {
        name: "id",
        type: "input",
        message: "What is the new Department ID number? ",
        validate: userInput => {

          // user input validation
          if (isNaN(userInput)) {
            console.log("Please enter the new Department ID number")
            return false;
          } else {
            return true;
          }
        }
      },
    ])
    .then((answers) => {
      // insert into table
      connection.query(
        "INSERT INTO department SET ? ",
        {
          name: answers.name,
          id: answers.id,
        },
        (err) => {
          if (err) throw err;

          // stores answers in table
          console.table(answers);
          runDatabase();
        }
      );
    });
}


// Roles functions
function viewAllRoles() {
  connection.query("SELECT * FROM role;",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      runDatabase();
    }
  );
}

// Adding Roles functions

function addRole() {
  // insert into table
  connection.query(
    "SELECT role.title AS Title, role.salary AS Salary FROM role LEFT JOIN department.name AS Department FROM department;",
    function (err, res) {
      inquirer
        .prompt([
          {
            name: "title",
            type: "input",
            message: "What is name of the new role?",
            validate: userInput => {
              if (userInput) {
                return true;
              } else {
                console.log("Please enter the name of the new role");
                return false;
              }
            }
          },
          {
            name: "salary",
            type: "input",
            message: "What is the salary of the new role?",
            validate: userInput => {

              // input validation 
              if (isNaN(userInput)) {
                console.log("Please enter the salary of the new role")
                return false;
              } else {
                return true;
              }
            }
          },
          {
            name: "deptID",
            type: "input",
            message: "What is the department id number?",
            validate: userInput => {

              // input validation
              if (isNaN(userInput)) {
                console.log("Please enter the Department ID number")
                return false;
              } else {
                return true;
              }
            }
          },

        ])
        .then((answer) => {
          connection.query(
            `INSERT INTO role (title, salary, departmentID) 
          VALUES (?, ?, ?)`,

            // insert these
            [answer.title, answer.salary, answer.deptID],

            // error catching and return to start
            (err, res) => {
              if (err) throw err;
              console.table(answer);
              runDatabase();
            }
          );
        });
    }
  );
}


// Employees section

function addEmployee() {
  inquirer.prompt([
    {
      name: "firstName",
      type: "input",
      message: "First Name of employee: ",
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log("Please enter a first name");
          return false;
        }
      }
    },

    {
      name: "lastName",
      type: "input",
      message: "Last Name of employee: ",
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log("Please enter a last name");
          return false;
        }
      }
    },
    {
      name: "role",
      type: "input",
      message: "Is the new employee an Intern, Assistant, or Apprentice? ",
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log("Please enter the role of the employee");
          return false;
        }
      }
    },
    {
      name: "manager",
      type: "input",
      message: "Who is managing the new employee? 1. Tom or 2. John: ",
      validate: userInput => {

        // input validation 
        if (isNaN(userInput)) {
          console.log("Please enter the ID number of the manager")
          return false;
        } else {
          return true;
        }
      }
    }

  ]).then((answer) => {
    connection.query("INSERT INTO employees SET ?",
      {
        firstName: answer.firstName,
        lastName: answer.lastName,
        role: answer.role,
        managerID: answer.manager
      },
      (err) => {
        if (err) throw err
        console.table(answer)
        runDatabase()
      })

  })
}

function updateEmployee() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Enter the Last Name of the employee would you like to update?",
        validate: userInput => {
          if (userInput) {
            return true;
          } else {
            console.log("Please enter the last name of the employee you like to update");
            return false;
          }
        }
      },

      {
        name: "title",
        type: "input",
        message: "What is the employee's new title?",
        validate: userInput => {
          if (userInput) {
            return true;
          } else {
            console.log("Please enter the employee's new title");
            return false;
          }
        }
      }
    ])
    .then((answer) => {
      connection.query('UPDATE employees SET role = ? WHERE lastName = ?', [answer.title, answer.name],

        (err) => {
          if (err) throw err;
          console.table(answer);
          runDatabase();
        });
    });
}

function viewAllEmployees() {

  connection.query("SELECT * FROM employees;",
    function (err, res) {
      if (err) throw err
      console.log("*** EMPLOYEES LIST ***");
      console.table(res)
      runDatabase()
    })
}


runDatabase();
