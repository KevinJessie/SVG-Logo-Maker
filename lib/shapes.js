
// export the Shape class
class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {  
        this.color = color;
    }
}

// export the Triangle class
class Triangle extends Shape {
    render() {
        return `<polygon points="100,50 50,150 250,100" style="fill:${this.color}"/>`;
    }
}

// export the Square class
class Square extends Shape {
    render() {
        return `<square x="50" y="50" width="200" height="200" style="fill:${this.color}"/>`;
    }
}

// export the Circle class
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="75" style="fill:${this.color}"/>`;   
    }
}

module.exports = {
    Shape,
    Triangle,
    Square,
    Circle
};


