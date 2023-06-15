const Shape = require('./shapes.js');

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    }
    render() {
        return `<svg width="300" height="300">
        <rect width="150" height="200" fill="${this.shapeColor}" />
        <text x="90" y="110" font-size="3em" fill="${this.text.Color}">${this.text}</text>
        </svg>
        `;
    }
}

module.exports = Square;