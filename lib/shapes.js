//shapes is making the base shape, shape classes will follow as children that need to be rendered

class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    /*
    render() {
        throw new Error('child child class must use the render method')
    }
    //possible render of children here to, similar to renderInnerHTML
    */
}

module.exports = Shape;