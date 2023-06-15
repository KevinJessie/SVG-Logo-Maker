const { Shape, Triangle, Square, Circle } = require('./shapes');

describe('Shape', () => {
    describe('setColor', () => {
        it('should set the color property on the instance', () => {
            const shape = new Shape();
            shape.setColor('red');
            expect(shape.color).toEqual('red');
        });
    });
}
);

describe('Triangle', () => {
        it('should return a red triangle', () => {
            const shape = new Triangle();
            shape.setColor('red');
            const expected = '<polygon points="100,50 50,150 250,100" style="fill:red"/>';
            expect(shape.render()).toEqual(expected);
        }
    );
}
);


describe('Square', () => {
        it('should return a green square', () => {
            const shape = new Square();
            shape.setColor('green');
            const expected = '<square x="50" y="50" width="200" height="200" style="fill:green"/>';
            expect(shape.render()).toEqual(expected);

        }
    );
}
);

describe('Circle', () => {
        it('should return a blue circle', () => {
            const shape = new Circle();
            shape.setColor('blue');
            const expected = '<circle cx="150" cy="100" r="75" style="fill:blue"/>';
            expect(shape.render()).toEqual(expected);
        }
    );
}
);
