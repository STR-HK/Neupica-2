import { NeuContainer } from "../../../../Native/NeuContainer.js"
import { MaterialSymbols } from "../../Styles/Icons.js"

export class SegmentedButton extends NeuContainer {
    private Container: NeuContainer
    private Icon: MaterialSymbols
    constructor() {
        super()

        this.Container = new NeuContainer()
        this.Icon = new MaterialSymbols()

    }
}