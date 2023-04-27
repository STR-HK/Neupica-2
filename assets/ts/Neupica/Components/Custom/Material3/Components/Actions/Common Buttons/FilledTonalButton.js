import { CommonButton } from "./CommonButton.js";
import { colorScheme } from "../../../Styles/Color.js";
import { Level0 } from "../../../Styles/Elevation.js";
import { transit } from "../../../Styles/Motion/Transition.js";
export class FilledTonalButton extends CommonButton {
    constructor() {
        super();
        this.Enable();
    }
    Enable() {
        super.Enable();
        transit(this, {
            'background': colorScheme.secondaryContainer,
            'shadow': Level0,
            'color': colorScheme.onSecondaryContainer,
        });
        // this.data.BackgroundColor = colorScheme.secondaryContainer
        // this.data.TextColor = colorScheme.onSecondaryContainer
        // this.data.Shadow = Level0
        this.Interactive();
    }
    Disable() {
        super.Disable();
        transit(this, {
            'background': colorScheme.onSurface + '1F',
            'shadow': Level0,
            'color': colorScheme.onSurface + '61',
        });
        // this.data.BackgroundColor = colorScheme.onSurface + '1F'
        // this.data.TextColor = colorScheme.onSurface + '61'
        // this.data.Shadow = Level0
        this.DeInteractive();
    }
}
//# sourceMappingURL=FilledTonalButton.js.map