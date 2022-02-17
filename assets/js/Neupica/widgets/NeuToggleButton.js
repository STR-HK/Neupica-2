import { NeuButton } from "./NeuButton.js";
export class NeuToggleButton extends NeuButton {
    constructor() {
        super();
        this.name = 'NeuToggleButton';
        this.create();
        this.init();
        this.apply(this.object); // 스타일 적용
        this.edit();
        this.BackgroundColor = 'transparent';
        this.StrokeRadius = '0px';
    }
    edit() {
        this.element.style.borderLeft = '1px solid lightgray';
        this.element.style.borderTop = '1px solid lightgray';
        this.element.style.marginTop = '-1px';
        this.element.style.marginLeft = '-1px';
        // this.element.style.borderCollapse = 'collapse'
    }
}
//# sourceMappingURL=NeuToggleButton.js.map