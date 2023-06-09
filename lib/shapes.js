// shape.js
// export the Shape class
class Shape {
    constructor(Color, text) {
        this.Color = Color;
        this.text = text;
    }
}

// export the Triangle class
class Triangle extends Shape {
    constructor(Color, text) {
        super(Color, text);
    }
    render() {
        return `
        <svg width="100" height="100">
        <polygon points="50,0 100,100 0,100" style="fill:${this.Color};stroke:black;stroke-width:1" />
        <text x="25" y="60" fill="black">${this.text}</text>
        </svg>
        `;
    }
}

// export the Square class
class Square extends Shape {
    constructor(Color, text) {
        super(Color, text);
    }
    render() {
        return `
        <svg width="100" height="100">
        <rect width="100" height="100" style="fill:${this.Color};stroke:black;stroke-width:1" />
        <text x="25" y="60" fill="black">${this.text}</text>
        </svg>
        `;
    }
}

// export the Circle class
class Circle extends Shape {
    constructor(Color, text) {
        super(Color, text);
    }
    render() {
        return `
        <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" style="fill:${this.Color};stroke:black;stroke-width:1" />
        <text x="25" y="60" fill="black">${this.text}</text>
        </svg>
        `;
    }
}

// export the Shape class
module.exports = { Shape, Triangle, Square, Circle };