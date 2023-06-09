const inquirer = require('inquirer');
const {Triangle, Square, Circle} = require('./lib/Shapes.js');
const fs = require('fs');



prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to draw?',
        choices: ['Triangle', 'Square', 'Circle']
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like to draw with?',
        colors: ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'black', 'white']
    }
])
.then(answers => {
    console.log(answers);
    if (answers.shape === 'Triangle') {
        let triangle = new Triangle(answers.color);
        triangle.render();
    } else if (answers.shape === 'Square') {
        let square = new Square(answers.color);
        square.render();
    } else if (answers.shape === 'Circle') {
        let circle = new Circle(answers.color);
        circle.render();
    }
})
.catch(error => {   
    if(error.isTtyError) {
        console.log("Error");
    } else {
        console.log("Error");
    }
});

//write answers to logo.svg file
fs.writeFile('logo.svg', answers, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});





module.exports = logo.svg;









