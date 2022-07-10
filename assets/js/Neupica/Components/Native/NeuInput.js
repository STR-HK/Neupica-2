import { Native } from "./Native.js"
import { NeuText } from "./NeuText.js"

export class NeuInput extends NeuText {
    constructor() {
        super()

        this.name = "NeuInput"

        this.data = {
            Value: [
                "",
                function () {
                    this.element.value = this.data.Value
                },
            ],
            Type: [
                "text",
                function () {
                    this.element.type = this.data.Type
                },
            ],
            Placeholder: [
                "",
                function () {
                    this.element.placeholder = this.data.Placeholder
                },
            ],
            Disabled: [
                false,
                function () {
                    this.element.disabled = this.data.Disabled
                },
            ],
            ReadOnly: [
                false,
                function () {
                    this.element.readOnly = this.data.ReadOnly
                },
            ],
            // Required: false,
            // Pattern: "",
            // Min: "",
            // Max: "",
            // Step: "",
            ...new NeuText().data,
            FontSize: new NeuText().data.FontSize,
        }
        this.build()

        this.element.remove()

        this.element = this.createInput()
        this.element.style.backgroundColor = "transparent"
        this.element.style.border = "none"
        this.element.style.outline = "none"
        this.element.style.padding = "0"
        this.element.style.margin = "0"
        // this.cover.appendChild(this.element)
        this.cover = this.element

        this.target = this.element

        this.element.addEventListener("input", () => {
            this.data.Value = this.element.value
        })
    }
}
