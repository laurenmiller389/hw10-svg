const Shape = require('../lib/shapes.js');

describe('Shape', () => {
    test('should throw an error if render is called', () => {
        const shape = new Shape();
        const err = new Error('child child class must use the render method')
        expect(shape.render).toThrow(err);
    })
})