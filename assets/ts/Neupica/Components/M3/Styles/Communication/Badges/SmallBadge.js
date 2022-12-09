import { Badges } from "./Badges.js";
import { colorScheme } from "../../../Components/Color.js";
export class SmallBadge extends Badges {
    constructor() {
        super();
        this.data.BackgroundColor = colorScheme.error;
        this.geometry.Height = '3dp';
        this.geometry.Width = '3dp';
        this.data.BorderRadius = '';
    }
}
//# sourceMappingURL=SmallBadge.js.map