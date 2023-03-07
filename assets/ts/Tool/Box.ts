export class Box {
    private name: string
    data: { Left: string; Top: string; Right: string; Bottom: string }
    constructor() {
        this.name = "Padding"
        this.data = {
            Top: "0",
            Right: "0",
            Bottom: "0",
            Left: "0",
        }
    }

    value() {
        return (
            this.data.Top +
            " " +
            this.data.Right +
            " " +
            this.data.Bottom +
            " " +
            this.data.Left
        ).toString()
    }

    all(value: string) {
        this.data.Top = value
        this.data.Right = value
        this.data.Bottom = value
        this.data.Left = value
        return this.value()
    }

    LTRB(left: string, top: string, right: string, bottom: string) {
        this.data.Left = left
        this.data.Top = top
        this.data.Right = right
        this.data.Bottom = bottom
        return this.value()
    }

    LRTB(left: string, right: string, top: string, bottom: string) {
        this.data.Left = left
        this.data.Right = right
        this.data.Top = top
        this.data.Bottom = bottom
        return this.value()
    }

    TBLR(top: string, bottom: string, left: string, right: string) {
        this.data.Top = top
        this.data.Bottom = bottom
        this.data.Left = left
        this.data.Right = right
        return this.value()
    }

    RBLT(right: string, bottom: string, left: string, top: string) {
        this.data.Top = top
        this.data.Bottom = bottom
        this.data.Left = left
        this.data.Right = right
        return this.value()
    }

    top(value: string) {
        this.data.Top = value
        return this.value()
    }

    right(value: string) {
        this.data.Right = value
        return this.value()
    }

    bottom(value: string) {
        this.data.Bottom = value
        return this.value()
    }

    left(value: string) {
        this.data.Left = value
        return this.value()
    }

    vertical(value: string) {
        this.data.Top = value
        this.data.Bottom = value
        return this.value()
    }

    horizontal(value: string) {
        this.data.Left = value
        this.data.Right = value
        return this.value()
    }

    VH(vertical: string, horizontal: string) {
        this.data.Top = vertical
        this.data.Bottom = vertical
        this.data.Left = horizontal
        this.data.Right = horizontal
        return this.value()
    }
}
