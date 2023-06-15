const Shape = require('../lib/shapes.js');
const Circle = require('../lib/circle.js');
const Square = require('../lib/square.js');
const Triangle = require('../lib/triangle.js');

function makeLogo(data) {
    if (data.shape === "Circle" || "circle") {
        const circleLogo = new Circle(data.shapeColor, data.text, data.textColor)
        return circleLogo.render();
    }
    else if (data.shape === "Square" || "square") {
        const squareLogo = new Square(data.shapeColor, data.text, data.textColor)
        return squareLogo.render();
    }
    else if (data.shape === "Triangle" || "triangle") {
        const triangleLogo = new Square(data.shapeColor, data.text, data.textColor)
        return triangleLogo.render();
    }
}

module.exports = makeLogo;