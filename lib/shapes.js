// define the shapes module

function Triangle(x1, y1, x2, y2, x3, y3, color) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.color = color;
    }
    
Triangle.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.lineTo(this.x3, this.y3);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    }

function Square(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    }


function Circle(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    }

Circle.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    }

// export {Triangle, Square, Circle};
module.exports = {Triangle, Square, Circle};