const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const {Triangle, Square, Circle} = require('./lib/shapes.js');
const {render} = require('./lib/render.js');
const {renderShape} = require('./lib/renderShape.js');
const { default: Choice } = require('inquirer/lib/objects/choice.js');

promptUser(); {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Shape',
            message: 'What shape would you like to render?',
            _Choices: ['Triangle', 'Square', 'Circle'],
            get Choices() {
                return this._Choices;
            },
            set Choices(value) {
                this._Choices = value;
            },
        },
        {
            type: 'input',
            name: 'Color',
            message: 'What color would you like to render?'

        },
        {
            type: 'input',
            name: 'Font',
            message: 'What font would you like to render?'

        },

    ]);

}


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    promptUser()
    .then((answers) => writeToFile('logo.svg', render(answers)))
    .then(() => console.log('Successfully wrote to logo.svg'))
    .catch((err) => console.error(err));
}

init();
















