import { NeuContainer } from "./NeuContainer.js";
import { Typography } from "../Custom/Material3/Styles/Typography.js";
import { colorScheme } from "../Custom/Material3/Styles/Color.js";
import { transit } from "../Custom/Material3/Styles/Motion/Transition.js";
export class NeuText extends NeuContainer {
    constructor() {
        super('NeuText');
        this.name = "NeuText";
        this.data.FontSize = Typography.Size.BodyMedium;
        this.data.TextColor = colorScheme.onBackground;
    }
    reRender() {
        super.reRender();
        transit(this, {
            'color': colorScheme.onBackground
        });
        // this.data.TextColor = colorScheme.onBackground
    }
}
//# sourceMappingURL=NeuText.js.map