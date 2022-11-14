import { IconButton } from "./IconButton.js";
import { colorScheme } from "../../../Components/Color.js";
export class FilledIconButton extends IconButton {
    constructor(icon) {
        super(icon);
        this.name = 'FilledIconButton';
        this.Icon.data.BackgroundColor = colorScheme.onPrimary;
    }
}
//# sourceMappingURL=FilledIconButton.js.map