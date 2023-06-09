// shape.js
// export the Shape class
class Shape {
    constructor(Color) {
        this.Color = "";
    }
    setColor(color) {
        this.Color = colorVar;
    }
}
// export the Triangle with color and font properties

class Triangle extends Shape {
    render() {
        console.log("Triangle");
    }
    constructor(color) {
        super(color);
    }
}

// export the Square with color input
class Square extends Shape {
    render() {
        console.log("Square");
    }
    constructor(color) {
        super(color);
    }
}

// export the Circle with color input
class Circle extends Shape {
    render() {
        console.log("Circle");
    }
    constructor(color) {
        super(color);
    }
}
// export {Triangle, Square, Circle};
module.exports = {Triangle, Square, Circle};