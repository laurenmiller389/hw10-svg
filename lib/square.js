const Shape = require('./shapes.js');

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `hello square`;
    }
}

module.exports = Square;