const Shape = require('./shapes.js');

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="300">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="50" y="100" font-size="5em" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

module.exports = Circle;