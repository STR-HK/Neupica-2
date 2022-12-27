import { CommonButton } from "./CommonButton.js";
import { colorScheme } from "../../../Styles/Color.js";
export class FilledButton extends CommonButton {
    constructor() {
        super();
        this.data.BackgroundColor = colorScheme.primary;
        // this.data.BorderColor = colorScheme.outline
        // this.data.BorderWidth = '1rem'
        // this.data.BorderStyle = 'solid'
        this.data.TextColor = colorScheme.onPrimary;
        this.data.Shadow = '';
    }
}
//# sourceMappingURL=FilledButton.js.map