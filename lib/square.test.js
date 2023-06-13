const Square = require('../lib/square.js');

describe('Square', () => {
    describe('init', () => {
        it('should create a square obj', () => {
            const text = "";
            const textColor = "";
            const shapeColor = "";

            const square = new Square(text, textColor, shapeColor);
            expect(square instanceof Square).toBe(true)
            expect(square).toEqual({text: text, textColor: textColor, shapeColor: shapeColor})
        })
        const shape = new Square(text, textColor, shapeColor);
        expect(shape.render()).toContain('')
    })
    describe('render', () => {
        it('should create square shape', () => {
            const text = "";
            const textColor = "";
            const shapeColor = "";
        })
        const shape = new Square(text, textColor, shapeColor);
        expect(shape.render()).toContain('')
    })
})