export class NeuMainWindow {
    constructor() {
        this.window = document.createElement('div');
        this.window.classList.add('Window');
        document.getElementById('App').appendChild(this.window);
        this.cvt = function (elem) {
            return elem.cover;
        };
        this.draw = function (layout) {
            this.window.appendChild(layout.element);
            // console.log(this.window.innerHTML)
        };
    }
}
//# sourceMappingURL=neucore.js.map