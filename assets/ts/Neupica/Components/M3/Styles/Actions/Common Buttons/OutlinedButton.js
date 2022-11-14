import { CommonButton } from "./CommonButtons.js";
import { colorScheme } from "../../../Components/Color.js";
export class OutlinedButton extends CommonButton {
    constructor() {
        super();
        this.data.BackgroundColor = colorScheme.surface;
        this.data.BorderColor = colorScheme.outline;
        this.data.BorderWidth = '1rem';
        this.data.BorderStyle = 'solid';
        this.data.Shadow = '';
    }
}
//# sourceMappingURL=OutlinedButton.js.map