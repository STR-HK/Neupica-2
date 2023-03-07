import { CommonButton } from "./CommonButton.js";
import { colorScheme } from "../../../Styles/Color.js";
import { Level0, Level1 } from "../../../Styles/Elevation.js";
export class ElevatedButton extends CommonButton {
    constructor() {
        super();
        this.Enable();
    }
    Enable() {
        this.data.BackgroundColor = colorScheme.primary + '14';
        this.data.Shadow = Level1;
        this.data.TextColor = colorScheme.primary;
        this.Interactive();
    }
    Disable() {
        this.data.BackgroundColor = colorScheme.onSurface + '1F';
        this.data.Shadow = Level0;
        this.data.TextColor = colorScheme.onSurface + '61';
        this.DeInteractive();
    }
}
//# sourceMappingURL=ElevatedButton.js.map