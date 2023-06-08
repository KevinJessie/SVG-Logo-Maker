// inquirer imports
const inquirer = require('inquirer');
// import shapes
const { Triangle, Circle, Square } = require('../lib/shapes.js');
// Create a list of choices for inquirer
const choices = ['Triangle', 'Circle', 'Square'];
// Prompt the user for a shape
inquirer.prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to calculate the area of?',
        choices: choices
    }
]).then((answers) => {
    // Prompt the user for the shape's dimensions
    inquirer.prompt([
        {
            type: 'input',
            name: 'height',
            message: 'What is the height of the shape?',
            when: () => answers.shape === 'Triangle'
        },
        {
            type: 'input',
            name: 'base',
            message: 'What is the base of the shape?',
            when: () => answers.shape === 'Triangle'
        },
        {
            type: 'input',
            name: 'radius',
            message: 'What is the radius of the shape?',
            when: () => answers.shape === 'Circle'
        },
        {
            type: 'input',
            name: 'side',
            message: 'What is the side length of the shape?',
            when: () => answers.shape === 'Square'
        }
    ]).then((answers) => {
        // Create the correct shape object
        let shape;
        switch (answers.shape) {
            case 'Triangle':
                shape = new Triangle(answers.height, answers.base);
                break;
            case 'Circle':
                shape = new Circle(answers.radius);
                break;
            case 'Square':
                shape = new Square(answers.side);
                break;
        }
        // Print the area
        console.log(`The area is ${shape.area()}`);
    });
}
);


