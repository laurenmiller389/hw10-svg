const Shape = require('./shapes.js');

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="green" />
        <text x=50" y="110" font-size="5em" fill="white">abcde</text>
        </svg>
        `
    }
}

module.exports = Circle;