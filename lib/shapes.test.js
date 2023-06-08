// test shapes.js

const shapes = require('./shapes');

test('Triangle', () => {
    const t = new shapes.Triangle(0, 0, 10, 0, 10, 10, 'red');
    expect(t.x1).toBe(0);
    expect(t.y1).toBe(0);
    expect(t.x2).toBe(10);
    expect(t.y2).toBe(0);
    expect(t.x3).toBe(10);
    expect(t.y3).toBe(10);
    expect(t.color).toBe('red');
    }
);

test('Square', () => {
    const s = new shapes.Square(0, 0, 10, 10, 'blue');
    expect(s.x).toBe(0);
    expect(s.y).toBe(0);
    expect(s.w).toBe(10);
    expect(s.h).toBe(10);
    expect(s.color).toBe('blue');
    }
);

test('Circle', () => {
    const c = new shapes.Circle(0, 0, 10, 'green');
    expect(c.x).toBe(0);
    expect(c.y).toBe(0);
    expect(c.r).toBe(10);
    expect(c.color).toBe('green');
    }
);


