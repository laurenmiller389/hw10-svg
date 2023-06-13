const Shape = require('./shapes.js');

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `hello triangle`;
    }
}

module.exports = Triangle;