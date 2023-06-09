import { Triangle, circle, Square } from './lib/shapes';

//testing the shapes.js file
describe('shapes', () => {
    describe('Triangle', () => {
        it('should be a class', () => {
            expect(Triangle).toBeInstanceOf(Function);
        });
        it('should have a render method', () => {
            expect(Triangle.prototype.render).toBeInstanceOf(Function);
        });
        it('should have a constructor that takes a color', () => {
            expect(new Triangle('red')).toBeInstanceOf(Triangle);
        });
    });

    describe('Square', () => {
        it('should be a class', () => {
            expect(Square).toBeInstanceOf(Function);
        });
        it('should have a render method', () => {
            expect(Square.prototype.render).toBeInstanceOf(Function);
        });
        it('should have a constructor that takes a color', () => {
            expect(new Square('red')).toBeInstanceOf(Square);
        });
    });

    describe('Circle', () => {
        it('should be a class', () => {
            expect(Circle).toBeInstanceOf(Function);
        });
        it('should have a render method', () => {
            expect(Circle.prototype.render).toBeInstanceOf(Function);
        });
        it('should have a constructor that takes a color', () => {
            expect(new Circle('red')).toBeInstanceOf(Circle);
        });
    });
});







// export {Triangle, Square, Circle};
module.exports = { Triangle, Square, Circle };




