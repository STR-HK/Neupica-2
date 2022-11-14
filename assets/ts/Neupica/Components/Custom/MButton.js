import { NeuButton } from "../Widgets/NeuButton.js"
import { Padding } from "../../../Tool/Padding.js"

export class MBaseButton extends NeuButton {
    constructor() {
        super()
        this.data.Button.Padding = new Padding().VH("8px", "16px")
        this.data.Button.BorderRadius = "4px"
        this.data.ButtonText.FontWeight = 500

        this.getBound().setAttribute('onpointerdown', `ripplet(arguments[0], ${JSON.stringify(
            {
                // "color":"black",
                "opacity":"0.15",
                "spreadingDuration":".225s",
                "spreadingDelay":"0s",
                // "spreadingTimingFunction":"cubic-bezier(0.03,-0.01, 0, 0.89)",
                "clearing":false,
                "clearingDuration":".225s",
                "clearingDelay":".150s",
                // "clearingTimingFunction":"ease-in-out",
                "centered":false,
                "appendTo":"target"
            }
        )})`)
        this.getBound().setAttribute('onpointerup', "ripplet.clear(this)")
        this.getBound().setAttribute('onpointerleave', "ripplet.clear(this)")
    }

    setText(text) {
        this.data.ButtonText.Text = text
    }

    setTextColor(color) {
        this.data.ButtonText.TextColor = color
    }

    setBackgroundColor(color) {
        this.data.Button.BackgroundColor = color
    }
}

export class MBasicButton extends MBaseButton {
    constructor() {
        super()
        // this.data.ButtonText.Text = "Basic"
    }
}

export class MRaisedButton extends MBaseButton {
    constructor() {
        super()
        // this.data.ButtonText.Text = "Raised"
        this.Button.data.Shadow = "0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f"
        // this.data.Button.Shadow =

    }
}

export class MStrokedButton extends MBaseButton {
    constructor() {
        super()
        // this.data.ButtonText.Text = "Stroked"
        this.data.Button.BorderStyle = "solid"
        this.data.Button.BorderColor = "lightgray"
        this.data.Button.BorderWidth = "1px"
    }
}

export class MFlatButton extends MBaseButton {
    constructor() {
        super()
        this.data.ButtonText.Text = "Flat"
        // this.
    }
}