// inquirer imports
const inquirer = require('inquirer');
// Import the classes
const { Triangle, Circle, Square } = require('../lib/shapes');
// Import the classes
const { Triangle, Circle, Square } = require('../lib');
// Create a list of choices for inquirer
const choices = ['Triangle', 'Circle', 'Square'];
// Prompt the user for a shape
inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like to create?',
            choices: choices
        }
    ])
    .then(({ shape }) => {
        // Prompt the user for the shape's dimensions
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'dimensions',
                    message: `Enter the dimensions of the ${shape} (comma separated):`
                }
            ])
            .then(({ dimensions }) => {
                // Create a new instance of the selected shape
                let shapeObj;
                switch (shape) {
                    case 'Triangle':
                        const [height, base] = dimensions.split(',');
                        shapeObj = new Triangle(height, base);
                        break;
                    case 'Circle':
                        const [radius] = dimensions.split(',');
                        shapeObj = new Circle(radius);
                        break;
                    case 'Square':
                        const [side] = dimensions.split(',');
                        shapeObj = new Square(side);
                        break;
                }
                // Print the area of the shape
                console.log(`The area of the ${shape} is ${shapeObj.area()}`);
            });
    }
    );

// Path: lib/shapes.js
//Exports triangle, circle, and square classes

// Triangle class
class Triangle {
    constructor(height, base) {
        this.height = height;
        this.base = base;
    }
    area() {
        return 0.5 * this.base * this.height;
    }
}

