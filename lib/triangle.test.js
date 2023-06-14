const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {
    describe('render', () => {
        it('should create triangle shape', () => {
            const text = "abcde";
            const textColor = "white";
            const shapeColor = "black";

            const shape = new Triangle(text, textColor, shapeColor);
            expect(shape.render()).toContain(`<polygon points="200, 20 50, 150 140, 75" fill="blue" />`);
        })

    })
})