const Shape = require('./shapes.js');

class Triangle extends Shape {
    render() {
        return `hello triangle`;
    }
}

module.exports = Triangle;