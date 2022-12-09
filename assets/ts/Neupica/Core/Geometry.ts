
export interface geometry {
    Width: string,
    Height: string,
    MinWidth: string,
    MinHeight: string,
    MaxWidth: string,
    MaxHeight: string,
    Left: string,
    Top: string,
    Right: string,
    Bottom: string,
    Margin: string,
    Padding: string,
    // Border: : string,
    ZIndex: string,
    Display: string,
    Position: string,
    Float: string,
    Overflow: string,
    OverflowX: string,
    OverflowY: string,
    AspectRatio: string,
    Cursor: string,
    Transform: string,
}

export class Geometry {
    geometry: geometry

    constructor() {
        this.geometry = {
            Width: "",
            Height: "",
            MinWidth: "",
            MinHeight: "",
            MaxWidth: "",
            MaxHeight: "",
            Left: "",
            Top: "",
            Right: "",
            Bottom: "",
            Margin: "",
            Padding: "",
            // Border: "",
            ZIndex: '',
            Display: '',
            Position: '',
            Float: "",
            Overflow: "",
            OverflowX: "",
            OverflowY: "",
            AspectRatio: "",
            Cursor: "",
            Transform: "",

        }

    }

}