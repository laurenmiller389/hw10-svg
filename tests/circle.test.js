const Circle = require('../lib/circle.js');

describe('Circle', () => {
    describe('render', () => {
        it('should create circle shape', () => {
            const shapeColor = "black";
            const text = "abcde";
            const textColor = "white";

            const shape = new Circle(shapeColor, text, textColor);
            expect(shape.render()).toContain(`<circle cx="150" cy="100" r="80" fill="black" />`);
        })

    })
})