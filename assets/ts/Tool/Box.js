export class Box {
    name;
    data;
    constructor() {
        this.name = "Padding";
        this.data = {
            Top: "0",
            Right: "0",
            Bottom: "0",
            Left: "0",
        };
    }
    value() {
        return (this.data.Top +
            " " +
            this.data.Right +
            " " +
            this.data.Bottom +
            " " +
            this.data.Left).toString();
    }
    all(value) {
        this.data.Top = value;
        this.data.Right = value;
        this.data.Bottom = value;
        this.data.Left = value;
        return this.value();
    }
    LTRB(left, top, right, bottom) {
        this.data.Left = left;
        this.data.Top = top;
        this.data.Right = right;
        this.data.Bottom = bottom;
        return this.value();
    }
    LRTB(left, right, top, bottom) {
        this.data.Left = left;
        this.data.Right = right;
        this.data.Top = top;
        this.data.Bottom = bottom;
        return this.value();
    }
    TBLR(top, bottom, left, right) {
        this.data.Top = top;
        this.data.Bottom = bottom;
        this.data.Left = left;
        this.data.Right = right;
        return this.value();
    }
    RBLT(right, bottom, left, top) {
        this.data.Top = top;
        this.data.Bottom = bottom;
        this.data.Left = left;
        this.data.Right = right;
        return this.value();
    }
    top(value) {
        this.data.Top = value;
        return this.value();
    }
    right(value) {
        this.data.Right = value;
        return this.value();
    }
    bottom(value) {
        this.data.Bottom = value;
        return this.value();
    }
    left(value) {
        this.data.Left = value;
        return this.value();
    }
    vertical(value) {
        this.data.Top = value;
        this.data.Bottom = value;
        return this.value();
    }
    horizontal(value) {
        this.data.Left = value;
        this.data.Right = value;
        return this.value();
    }
    VH(vertical, horizontal) {
        this.data.Top = vertical;
        this.data.Bottom = vertical;
        this.data.Left = horizontal;
        this.data.Right = horizontal;
        return this.value();
    }
}
//# sourceMappingURL=Box.js.map