import { NeuContainer } from "../../../../Native/NeuContainer.js"

export class Navigation extends NeuContainer {
    constructor() {
        super()

        this.data.FlexDirection = 'row'
        this.data.AlignItems = 'center'
        this.geometry.Width = '100%'
    }
}