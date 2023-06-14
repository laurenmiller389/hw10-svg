const Square = require('../lib/square.js');

describe('Square', () => {
    describe('init', () => {
        it('should create a square obj', () => {
            const text = "abcde";
            const textColor = "white";
            const shapeColor = "black";

            const square = new Square(text, textColor, shapeColor);
            expect(square instanceof Square).toBe(true)
            expect(square).toEqual({text: text, textColor: textColor, shapeColor: shapeColor})
        })
        const shape = new Square(text, textColor, shapeColor);
        expect(shape.render()).toContain('')
    })
    describe('render', () => {
        it('should create square shape', () => {
            const text = "abcde";
            const textColor = "";
            const shapeColor = "";

            const shape = new Square(text, textColor, shapeColor);
            expect(shape.render()).toContain(`<rect width="150" height="200" fill="yellow" />`)
        })

    })
})