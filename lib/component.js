//component is making the base shape, shape classes will follow as children that need to be rendered

class Component {
    constructor(children = []) {
        this.children = children;
    }
    render() {
        throw new Error('Child child class must use the render method')
    }
    //possible render of children here to, similar to renderInnerHTML
}

module.exports = Component;