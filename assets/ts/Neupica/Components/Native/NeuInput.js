import { Native } from "./Native.js";
import { NeuText } from "./NeuText.js";
export class NeuInput extends Native {
    data;
    constructor() {
        super();
        this.name = "NeuInput";
        this.data = {
            Value: "",
            Type: "text",
            Placeholder: "",
            Disabled: false,
            ReadOnly: false,
            // Placeholder
            // Required: false,
            // Pattern: "",
            // Min: "",
            // Max: "",
            // Step: "",
            ...new NeuText().data,
            // FontSize: new NeuText().data.FontSize,
        };
        this.build();
        this.element.remove();
        this.element = this.createInput();
        this.element.style.backgroundColor = "transparent";
        this.element.style.border = "none";
        this.element.style.outline = "none";
        this.element.style.padding = "0";
        this.element.style.margin = "0";
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
}
//# sourceMappingURL=NeuInput.js.map