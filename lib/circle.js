const Shape = require('./shapes.js');

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `hello circle`;
    }
}

module.exports = Circle;