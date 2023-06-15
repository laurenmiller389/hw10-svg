const Shape = require('./shapes.js');

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    }
    render() {
        return `<svg width="300" height="300">
        <polygon points="200, 20 50, 150 140, 75" fill="${this.shapeColor}" />
        <text x="90" y="110" font-size="3em" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
    }
}

module.exports = Triangle;