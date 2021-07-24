// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() { 
//first step: Ask User for provide information about repository. 

inquirer.prompt([
        {message:"What is the title of your project?",
        name:"title"
        },
        {message:"Please add a description of your project which includes what is it about, why did you create it, who is it for.",
        name:"description"
    },
    {
        message:"Choose a license:",
        name:"license",
        type:"list",
        choices:["MIT","APACHE","BOOST"]
    }



]).then(answers=>{
  //  console.log(answers);
    
    console.log(generateMarkdown(answers));

    fs.writeFile('README.md', generateMarkdown(answers), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}
).catch( err  => {
    console.log(err);
}

);



// second step: we will take that information and generate our function. 


//third step: take the output off the generateMarkdown to enter.

//console.log("Hello Gaye!")



}


// Function call to initialize app
init();
