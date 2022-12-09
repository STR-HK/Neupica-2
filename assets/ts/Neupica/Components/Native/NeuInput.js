import { NeuContainer } from "./NeuContainer.js";
export class NeuInput extends NeuContainer {
    constructor() {
        super();
        this.name = "NeuInput";
        this.data = {
            ...new NeuContainer().data,
            Value: "",
            Type: "text",
            Placeholder: "",
            Disabled: false,
            ReadOnly: false,
            CaretColor: "",
            Max: "",
            // Placeholder
            // Required: false,
            // Pattern: "",
            // Min: "",
            // Step: "",
        };
        this.build();
        // this.data.
        // this.element.remove()
        this.removeChild(this.element);
        this.element = this.createInput();
        this.element.style.backgroundColor = "transparent";
        this.element.style.border = "none";
        this.element.style.outline = "none";
        this.element.style.padding = "0";
        this.element.style.margin = "0";
        // MacOS surpport
        this.element.style.webkitUserSelect = 'auto';
        this.cover.appendChild(this.element);
        // this.cover = this.element
        this.target = this.element;
        this.element.addEventListener("input", () => {
            this.data.Value = this.element.value;
        });
    }
    Value() {
        this.element.value = this.data.Value;
    }
    Type() {
        this.element.type = this.data.Type;
    }
    Placeholder() {
        this.element.placeholder = this.data.Placeholder;
    }
    Disabled() {
        this.element.disabled = this.data.Disabled;
    }
    ReadOnly() {
        this.element.readOnly = this.data.ReadOnly;
    }
    CaretColor() {
        this.element.style.caretColor = this.data.CaretColor;
    }
    Max() {
        this.element.max = this.data.Max;
    }
}
//# sourceMappingURL=NeuInput.js.map