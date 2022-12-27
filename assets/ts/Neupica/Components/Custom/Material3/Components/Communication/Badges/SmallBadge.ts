import { Badges } from "./Badges.js"
import { colorScheme } from "../../../Styles/Color.js"

export class SmallBadge extends Badges {
    constructor() {
        super()

        this.data.BackgroundColor = colorScheme.error

        this.geometry.Height = '6rem'
        this.geometry.Width = '6rem'
        this.data.BorderRadius = '50%'
    }
}