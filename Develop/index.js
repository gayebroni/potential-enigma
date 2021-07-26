// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  { 
    //if need to validate, need to add if else statement
    message: 
    "What is the title of your project? (Required)", 
  name: "title" 
  

},
  {
    message:
      "Please add a description of your project which includes what is it about, why did you create it, who is it for.",
    name: "description",
  },

  {
    message:
      "Please list any required installations and provide the appropriate code to install.",
    name: "installation",
  },

  {
    message: "Please provide the user instructions for your app.",
    name: "instructions",
  },

  {
    message: "Choose a license from the following choices:",
    name: "license",
    type: "list",
    choices: ["MIT", "APACHE", "BOOST"],
  },

  {  message: "Please add the GitHub Link to your project.",
  name: "githublink",

  },

{ 
  message: "Please enter your preferred email to contact you.",
  name: "email",
},
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, () => {});
}

// TODO: Create a function to initialize app
function init() {
  //first step: Ask User for provide information about repository.

  inquirer.prompt(questions).then((answers) => {
    //  console.log(answers);
    var data = generateMarkdown(answers);
    console.log(data);
    writeToFile("README.md", data);
  });

  // second step: we will take that information and generate our function.

  //third step: take the output off the generateMarkdown to enter.

  //console.log("Hello Gaye!")
}

// Function call to initialize app
init();
