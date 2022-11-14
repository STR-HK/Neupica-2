export class Shadow {
    constructor() {
        this.name = "Shadow"
        this.data = {
            Color: "transparent",
            OffsetX: 0,
            OffsetY: 0,
            Blur: 0,
            Spread: 0,
            Opacity: 1,
            Inset: false,
        }
    }

    value() {
        let inset = this.data.Inset ? " inset" : ""
        return (
            inset +
            this.data.OffsetX +
            " " +
            this.data.OffsetY +
            " " +
            this.data.Blur +
            " " +
            this.data.Spread +
            " " +
            this.data.Color
        ).toString()
    }
}
