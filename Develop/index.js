// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's title?",
    name: "title",
  },
  {
    type: "input",
    message: "Give a brief description of your project",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license does your project use?",
    name: "license",
    choices: ["MIT", "FOnzi", "STP"],
  },
  {
    type: "input",
    message: "What commands should we run for dependencies?",
    name: "installations",
    default: "npm i",
  },
  {
    type: "input",
    message: "What commands should be run for tests?",
    name: "test",
    default: "npm run test",
  },
  {
    type: "input",
    message: "How does a user contribute to this project",
    name: "contributor",
  },
];

// //inquirer will return us a promise object
// inquirer.prompt(questions).then((data) => {
//   //   console.log(data);
// });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  //present the user with questions
  inquirer.prompt(questions).then((data) => {
    fs.writeFile("README.md", JSON.stringify(data), (err) => {
      err ? console.log(err) : console.log("File Success");
    });
  });
}

// Function call to initialize app
init();
