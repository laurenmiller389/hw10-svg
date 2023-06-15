const Shape = require('./shapes.js');

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<svg width="300" height="300">
        <rect width="150" height="200" fill="${this.shapeColor}" />
        <text x="50" y="100" font-size="5em" fill="${this.text.Color}">${this.text}</text>
        </svg>
        `;
    }
}

module.exports = Square;