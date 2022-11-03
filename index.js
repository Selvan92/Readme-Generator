// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const { title } = require('process');

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
init();



function init() {
  
  inquirer
  .prompt([
    {
      type: 'input',
      message: "What is your Project Title",
      name: "title",
    },
    // ask user for
    //  title of my project , Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    {
      type: 'input',
      message: "What is your Project Description?",
      name: "description",
    },
    {
      type: 'input',
      message: "What is your Installation Instruction?",
      name: "instructions",
    }, {
      type: 'input',
      message: "What is your Project Usage?",
      name: "usage",
    }, 
    // ask for license (list)
    {
      type: 'list',
      message: "What is your license?",
      name: "license",
      choices: [
        'MIT',
        'ISC',
        'GNU',
        'Apache',
        'Academic',
        'Mozilla',
        'Open',
      ]
    },
    {
    type: 'input',
    message: "What are all the Project Contributions?",
    name: "contributions",
    }, {
      type: 'input',
      message: "What are all the Tests?",
      name: "tests",
    },
    {
      type: 'input',
      message: "What if there is an issue?",
      name: "questions",
    },
    {
      type: 'input',
      message: "What is your Github Username?",
      name: "github",
    },
    {
      type: 'input',
      message: "What is your email id?",
      name: "emailid",
    },
  
  ]).then(function(answers){
    // generate readme file based on the ans collected
    console.log(answers);

    const readme = generateMarkdown(answers);
    
    // put this readme into a file in the output folder

    const outputPath = path.resolve('readme.md');

    fs.writeFileSync(outputPath, readme, 'utf-8'); 

  });
}

