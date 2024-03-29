import { IconButton } from "./IconButton.js";
import { colorScheme } from "../../../Styles/Color.js";
export class FilledIconButton extends IconButton {
    constructor(icon) {
        super(icon);
        this.name = 'FilledIconButton';
        this.Icon.data.BackgroundColor = colorScheme.onPrimary;
    }
    reRender() {
        super.reRender();
        this.Icon.data.BackgroundColor = colorScheme.onPrimary;
    }
}
//# sourceMappingURL=FilledIconButton.js.map