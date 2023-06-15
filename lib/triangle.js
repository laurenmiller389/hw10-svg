const Shape = require('./shapes.js');

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<svg width="300" height="300">
        <polygon points="200, 20 50, 150 140, 75" fill="${this.shapeColor}" />
        <text x="50" y="100" font-size="5em" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
    }
}

module.exports = Triangle;