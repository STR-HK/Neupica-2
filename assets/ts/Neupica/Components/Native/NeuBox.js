import { NeuContainer } from "./NeuContainer.js";
export class NeuBox extends NeuContainer {
    constructor(width, height) {
        super('NeuBox');
        if (typeof width == 'number') {
            this.geometry.Width = width + 'px';
        }
        else {
            this.geometry.Width = width;
        }
        if (typeof height == 'number') {
            this.geometry.Height = height + 'px';
        }
        else {
            this.geometry.Height = height;
        }
    }
}
//# sourceMappingURL=NeuBox.js.map