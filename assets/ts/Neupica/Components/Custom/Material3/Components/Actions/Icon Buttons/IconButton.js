import { NeuContainer } from "../../../../../Native/NeuContainer.js";
import { Box } from "../../../../../../../Tool/Box.js";
export class IconButton extends NeuContainer {
    Icon;
    constructor(icon) {
        super();
        this.name = 'IconButton';
        class Icon extends NeuContainer {
            constructor() {
                super();
            }
        }
        this.Icon = new Icon();
        this.Icon.data.BorderRadius = '50%';
        this.Icon.geometry.Width = '40rem';
        this.Icon.geometry.Height = '40rem';
        this.Icon.data.AlignItems = 'center';
        this.Icon.data.JustifyContent = 'center';
        // console.log(this.Icon.geometry.Height)
        // this.element?.attachShadow({mode: 'open'})
        // this.shadow.appendChild(this.Icon.cover)
        this.addChild(this.Icon);
        this.Icon.addChild(icon);
        this.geometry.Padding = new Box().horizontal('4rem');
        this.data.BorderRadius = '50%';
        this.data.JustifyContent = 'center';
        this.data.AlignItems = 'center';
        this.data.AspectRatio = '1 / 1';
        // @ts-ignore
        this.cover.style.webkitTapHighlightColor = "transparent";
        // this.cover.style.cursor = "pointer"
        this.geometry.Cursor = 'pointer';
        this.ActivateRipple({ centered: 'true' });
    }
}
//# sourceMappingURL=IconButton.js.map