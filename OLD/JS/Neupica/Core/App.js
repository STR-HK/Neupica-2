import { NeuRender } from "./Render.js";
export class NeuApp {
    layout;
    dom;
    constructor() {
        this.layout = false;
        this.dom = false;
    }
    draw(where) {
        if (this.layout == false) {
            console.error('layout is not defined');
            return;
        }
        else {
            this.dom = document.querySelector(where);
            NeuRender(this.layout, this.dom);
        }
    }
}
//# sourceMappingURL=App.js.map