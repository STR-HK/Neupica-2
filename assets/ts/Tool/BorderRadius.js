export class BorderRadius {
    constructor() {
        this.name = "BorderRadius"
        this.data = {
            TopLeft: 0,
            TopRight: 0,
            BottomLeft: 0,
            BottomRight: 0,
        }
    }

    value() {
        return (
            this.data.TopLeft +
            " " +
            this.data.TopRight +
            " " +
            this.data.BottomLeft +
            " " +
            this.data.BottomRight
        ).toString()
    }

    all(value) {
        this.data.TopLeft = value
        this.data.TopRight = value
        this.data.BottomLeft = value
        this.data.BottomRight = value
        return this.value()
    }

    LTRB(left, top, right, bottom) {
        this.data.Left = left
        this.data.Top = top
        this.data.Right = right
        this.data.Bottom = bottom
        return this.value()
    }

    LRTB(left, right, top, bottom) {
        this.data.Left = left
        this.data.Right = right
        this.data.Top = top
        this.data.Bottom = bottom
        return this.value()
    }

    TBLR(top, bottom, left, right) {
        this.data.Top = top
        this.data.Bottom = bottom
        this.data.Left = left
        this.data.Right = right
        return this.value()
    }

    TopLeft(value) {
        this.data.TopLeft = value
        return this.value()
    }

    TopRight(value) {
        this.data.TopRight = value
        return this.value()
    }

    BottomLeft(value) {
        this.data.BottomLeft = value
        return this.value()
    }

    BottomRight(value) {
        this.data.BottomRight = value
        return this.value()
    }

    Top(value) {
        this.data.TopLeft = value
        this.data.TopRight = value
        return this.value()
    }

    Right(value) {
        this.data.Right = value
        this.data.BottomRight = value
        return this.value()
    }

    Bottom(value) {
        this.data.BottomLeft = value
        this.data.BottomRight = value
        return this.value()
    }

    Left(value) {
        this.data.Left = value
        this.data.TopLeft = value
        return this.value()
    }
}
