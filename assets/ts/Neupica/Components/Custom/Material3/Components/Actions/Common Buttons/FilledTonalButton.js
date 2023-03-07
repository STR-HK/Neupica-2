import { CommonButton } from "./CommonButton.js";
import { colorScheme } from "../../../Styles/Color.js";
import { Level0 } from "../../../Styles/Elevation.js";
export class FilledTonalButton extends CommonButton {
    constructor() {
        super();
        this.Enable();
    }
    Enable() {
        this.data.BackgroundColor = colorScheme.secondaryContainer;
        this.data.TextColor = colorScheme.onSecondaryContainer;
        this.data.Shadow = Level0;
        this.Interactive();
    }
    Disable() {
        this.data.BackgroundColor = colorScheme.onSurface + '1F';
        this.data.TextColor = colorScheme.onSurface + '61';
        this.data.Shadow = Level0;
        this.DeInteractive();
    }
}
//# sourceMappingURL=FilledTonalButton.js.map