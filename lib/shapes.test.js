const {Triangle, Square, Circle} = require('./shapes.js');

//testing the shapes.js file
describe('shapes', () => {
    describe('Triangle', () => {
        it('should return a triangle', () => {
            const triangle = new Triangle('red', 'triangle');
            expect(triangle.Color).toEqual('red');
            expect(triangle.text).toEqual('triangle');
        });
    });
    describe('Square', () => {
        it('should return a square', () => {
            const square = new Square('blue', 'square');
            expect(square.Color).toEqual('blue');
            expect(square.text).toEqual('square');
        });
    });
    describe('Circle', () => {
        it('should return a circle', () => {
            const circle = new Circle('green', 'circle');
            expect(circle.Color).toEqual('green');
            expect(circle.text).toEqual('circle');
        });
    });
}
);

