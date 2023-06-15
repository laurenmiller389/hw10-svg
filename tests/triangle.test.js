const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {
    describe('render', () => {
        it('should create triangle shape', () => {
            const shapeColor = "black";
            const text = "abcde";
            const textColor = "white";   

            const shape = new Triangle(shapeColor, text, textColor);
            expect(shape.render()).toContain(`<polygon points="200, 20 50, 150 140, 75" fill="black" />`);
        })

    })
})