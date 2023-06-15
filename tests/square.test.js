const Square = require('../lib/square.js');

describe('Square', () => {
    describe('init', () => {
        it('should create a square obj', () => {
            const shapeColor = "black";
            const text = "abcde";
            const textColor = "white";
            
            const square = new Square(text, textColor, shapeColor);
            expect(square instanceof Square).toBe(true)
            expect(square).toEqual({text: text, textColor: textColor, shapeColor: shapeColor})
        })
 
    })
    describe('render', () => {
        it('should create square shape', () => {
            const shapeColor = "black";
            const text = "abcde";
            const textColor = "white";
            
            const shape = new Square(text, textColor, shapeColor);
            expect(shape.render()).toContain(`<rect width="150" height="200" fill="yellow" />`)
        })

    })
})