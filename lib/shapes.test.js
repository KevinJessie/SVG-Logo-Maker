//import shapes 

const { Triangle, Circle, Square } = require('../lib/shapes.js');

// Create a list of choices for inquirer
const choices = ['Triangle', 'Circle', 'Square'];

descibe('shapes', () => {
    describe('Triangle', () => {
        it('should return the correct area', () => {
            const triangle = new Triangle(4, 5);
            expect(triangle.area()).toEqual(10);
        });
    });
    describe('Circle', () => {
        it('should return the correct area', () => {
            const circle = new Circle(5);
            expect(circle.area()).toEqual(Math.PI * 25);
        });
    });
    describe('Square', () => {
        it('should return the correct area', () => {
            const square = new Square(5);
            expect(square.area()).toEqual(25);
        });
    });
}
);