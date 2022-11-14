import { Children } from "../../../Common/Children.js"
import {
    createCover,
    createDiv,
    createImg,
    createInput,
    createLayout,
} from "../Create/Create.js"
import { Geometry } from "../../Core/Geometry"
import { Found } from "../Found/Found.js"


export class Native extends Found {
    constructor() {
        super()

        this.cover = this.createCover()

        // @ts-ignore
        this.cover.style.webkitTapHighlightColor = "transparent"
    }
}
