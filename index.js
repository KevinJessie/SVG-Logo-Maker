// Desc: Main entry point for the application

// Import dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./utils/generateLogo.js');
const shape = require('shape.js');

// Prompt user for input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'Shape',
            message: 'What shape would you like to use?',
            choices: ['Triangle', 'Square', 'Circle']
        },
        {
            type: 'input',
            name: 'Color',
            message: 'What color would you like to use?'

        },
        {
            type: 'input',
            name: 'text',
            message: 'What text would you like to use(3letters)?'

        },
    ]);

// fuction to write  
function writeToFile(fileName, data) {
    var fileName = "logo.svg";
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Generating logo.svg");
    }
    )
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile("logo.svg", generateLogo(answers));
    });
}

// function call to initialize program
init();



















