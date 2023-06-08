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

// Circle class
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

// Square class
class Square {
    constructor(side) {
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}

// Export the classes
module.exports = {
    Triangle,
    Circle,
    Square
};

