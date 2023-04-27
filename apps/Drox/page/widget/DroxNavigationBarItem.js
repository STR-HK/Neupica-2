import {
    NavigationBarItem
} from "../../../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import { colorScheme } from "../../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"

export class DroxNavigationBarItem extends NavigationBarItem {
    constructor() {
        super()
        this.DeActivateRipple()
        this.ActivateRipple()
        this.data.BackgroundColor = colorScheme.background
        this.InActive()

        this.geometry.Height = '100%'
        this.cascade.Icon.data.FontSize = '20rem'
        this.cascade.Label.data.FontSize = '10rem'
        this.data.Gap = '2rem'
    }
    Active() {
        this.State = true

        this.cascade.Icon.data.TextColor = colorScheme.primary
        this.cascade.Label.data.TextColor = colorScheme.primary
    }
    InActive() {
        super.InActive()

        this.cascade.Icon.data.TextColor = colorScheme.outline
        this.cascade.Label.data.TextColor = colorScheme.outline
        this.cascade.ActiveIndicator.data.BackgroundColor = 'transparent'

    }
}