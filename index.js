const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const writeFile = require("./utils/generatesite")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern ");

const newManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your team manager'?",
      validate: (name) => {
        if (name) {
          return true;
        } else {
            console.log("Please enter managers name!")
            return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the id of the manager'?",
      validate: (name) => {
        if (name) {
          return true;
        } else {
            console.log("Please enter managers id!")
            return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is email of your manager'?",
      validate: (name) => {
        if (name) {
          return true;
        } else {
            console.log("Please enter managers email!")
            return false;
        }
      },
    },
    {
      type: "input",
      name: "office",
      message: "What is office number of your manager'?",
      validate: (name) => {
        if (name) {
          return true;
        } else {
            console.log("Please enter managers office number!")
            return false;
        }
      },
    },
  ]);
};

const newEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your engineer'?",
      validate: (name) => {
        if (name) {
          return true;
        } else {
            console.log("Please enter engineers name!")
            return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the id of the engineer'?",
      validate: (name) => {
        if (name) {
          return true;
        } else {
            console.log("Please enter engineers id!")
            return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is email of your engineer'?",
      validate: (name) => {
        if (name) {
          return true;
        } else {
            console.log("Please enter engineers email!")
            return false;
        }
      },
    },
    {
      type: "input",
      name: "git",
      message: "What is the engineers Github username'?",
      validate: (name) => {
        if (name) {
          return true;
        } else {
            console.log("Please enter engineers Github!")
            return false;
        }
      },
    },
  ]);
};

const newIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your intern'?",
      validate: (name) => {
        if (name) {
          return true;
        } else {
            console.log("Please enter interns name!")
            return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the id of the intern'?",
      validate: (name) => {
        if (name) {
          return true;
        } else {
            console.log("Please enter interns id!")
            return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is email of your intern'?",
      validate: (name) => {
        if (name) {
          return true;
        } else {
            console.log("Please enter interns email!")
            return false;
        }
      },
    },
    {
      type: "input",
      name: "git",
      message: "What university does the intern go to'?",
      validate: (name) => {
        if (name) {
          return true;
        } else {
            console.log("Please enter the interns university!")
            return false;
        }
      },
    },
  ]);
};

const newEmployee = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "git",
      message: "Would you like to add a new engineer, intern, or conclude'?",
      choices: ["Engineer, Intern, finish"],
      validate: (name) => {
        if (name) {
          return true;
        }
      },
    },
  ]);
};
