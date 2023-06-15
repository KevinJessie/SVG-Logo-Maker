const inquirer = require('inquirer');
const { Shape, Triangle, Square, Circle } = require('./lib/shapes');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'shape',
        message: 'Choose shape would you like to create?',
        answers: ['Triangle', 'Square', 'Circle']
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like your shape to be?'

    },
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like your shape to display?'
        
    }
];

inquirer.prompt(questions).then(
    ({ shape, color, text }) => {
        let svgElement;
        switch (shape) {
            case 'Triangle':
                const triangle = new Triangle();
                triangle.setColor(color);
                svgElement = triangle.render();
                break;
            case 'Square':
                const square = new Square();
                square.setColor(color);
                svgElement = square.render();
                break;
            case 'Circle':
                const circle = new Circle();
                circle.setColor(color);
                svgElement = circle.render();
                break;
            default:
                break;
        }
        const x = 150 - (text.length * 5);
        const y = 100;


        const svg = `<svg xmls= "http://www.w3.org/2000/svg" width="300" height="200">
        ${svgElement}
        <text x="${x}" y="${y}" fill="black">${text}</text>
        </svg>`;
        fs.writeFile('logo.svg', svg, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        }
        );
    } 
);