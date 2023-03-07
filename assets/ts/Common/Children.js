import { NObject } from "./NObject.js";
export class Children extends NObject {
    parent;
    children;
    appendTo = (where) => {
        // console.log(this.cvt(this.children))
        this.cvt(this.children).forEach((element) => {
            // console.log(element)
            where.appendChild(element);
        });
    };
    constructor() {
        super();
        this.children = [];
    }
    suicide() {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    }
    addChild(child) {
        child.parent = this;
        this.children.push(child);
        this.childrenUpdate({
            type: 'add',
            target: child
        });
        this.childrenUpdated({
            type: 'add',
            target: child
        });
        return this;
    }
    removeChild(child) {
        child.parent = undefined;
        let index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
        this.childrenUpdate({
            type: 'remove',
            target: child
        });
        this.childrenUpdated({
            type: 'remove',
            target: child
        });
    }
    removeChildren() {
        this.children.forEach(function (child) {
            this.removeChild(child);
        }.bind(this));
        this.children = [];
    }
    addChildren(children) {
        children.forEach(e => {
            this.addChild(e);
        });
        return this;
    }
    clearChildren() {
        // this.children = []
        this.children.forEach(e => {
            this.children.splice(this.children.indexOf(e), 1);
        });
        this.childrenUpdate({
            type: 'clear'
        });
        this.childrenUpdated({
            type: 'clear'
        });
    }
    setChild(index, child) {
        if (this.children[index]) {
            if (this.children[index]['parent']) {
                this.children[index].parent = undefined;
            }
        }
        this.children[index] = child;
        child.parent = this;
        this.childrenUpdate({
            type: 'set',
            target: child
        });
        this.childrenUpdated({
            type: 'set',
            target: child
        });
    }
    cvt(children) {
        let element = [];
        // console.log(children)
        children.forEach((child) => {
            if (child.hasOwnProperty("cover")) {
                element.push(child.cover);
            }
            else {
                element.push(child.element);
            }
        });
        // console.log(element)
        return element;
    }
    childrenUpdated(...args) {
    }
    childrenUpdate(...args) {
    }
}
//# sourceMappingURL=Children.js.map