const Shape = require('./shapes.js');

class Square extends Shape {
    render() {
        return `hello square`;
    }
}

module.exports = Square;