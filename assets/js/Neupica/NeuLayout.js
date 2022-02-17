class Layout {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('Layout');
        this.convertLayoutToElement = function (layout) {
            // console.log('convertLayoutToElement :', layout)
            let convertion = [];
            layout.forEach(function (child) {
                if (child.cover) {
                    // console.log(child.cover)
                    convertion.push(child.cover);
                }
            });
            return convertion;
        };
        this.children = [];
        this.addChild = function (child) {
            this.children.push(child);
            this.convertLayoutToElement(this.children).forEach(element => {
                this.element.appendChild(element);
            });
            // console.log(this.element.innerHTML)
        };
    }
}
export class NeuLayout extends Layout {
    constructor() {
        super();
        // this.element.style.display = 'flex'
        // this.element.style.flexDirection = 'column'
        this.element.style.padding = '16px';
        // this.element.style.gap = '16px'
        // this.element.style.alignItems = 'center'
    }
}
//# sourceMappingURL=NeuLayout.js.map