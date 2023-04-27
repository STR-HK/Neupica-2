import { CommonButton } from "./CommonButton.js";
import { colorScheme } from "../../../Styles/Color.js";
import { transit } from "../../../Styles/Motion/Transition.js";
import { Level0 } from "../../../Styles/Elevation.js";
export class TextButton extends CommonButton {
    constructor() {
        super();
        this.Enable();
    }
    Enable() {
        super.Enable();
        transit(this, {
            'background': 'rgba(0,0,0,0)',
            'shadow': Level0,
            'color': colorScheme.primary,
            'borderColor': 'rgba(0,0,0,0)',
            'borderWidth': '0rem',
            'borderStyle': 'none',
        });
        // this.data.BackgroundColor = 'transparent'
        // this.data.BorderColor = 'transparent'
        // this.data.BorderWidth = '0rem'
        // this.data.BorderStyle = 'none'
        // this.data.Shadow = ''
        // this.data.TextColor = colorScheme.primary
        this.Interactive();
    }
    Disable() {
        super.Disable();
        transit(this, {
            'background': 'rgba(0,0,0,0)',
            'shadow': Level0,
            'color': colorScheme.onSurface + '61',
            'borderColor': 'rgba(0,0,0,0)',
            'borderWidth': '0rem',
            'borderStyle': 'none',
        });
        // this.data.TextColor = colorScheme.onSurface + '61'
        this.DeInteractive();
    }
}
//# sourceMappingURL=TextButton.js.map