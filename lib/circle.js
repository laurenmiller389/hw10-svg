const Shape = require('./shapes.js');

class Circle extends Shape {
    render() {
        return `hello circle`;
    }
}

module.exports = Circle;