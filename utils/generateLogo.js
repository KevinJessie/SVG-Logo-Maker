const shapes = require('./shapes.js');

function renderShape(answers) {
    const shape = answers.Shape;
    const color = answers.Color;
    const font = answers.Font;
    const render = new shapes[shape](color, font);
    return render.render();
}

module.exports = generateLogo;