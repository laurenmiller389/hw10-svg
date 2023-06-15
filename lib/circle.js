const Shape = require('./shapes.js');

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    }
    render() {
        return `<svg width="300" height="300">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="90" y="110" font-size="3em" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

module.exports = Circle;