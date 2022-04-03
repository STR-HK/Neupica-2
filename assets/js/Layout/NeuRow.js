import { Layout } from "./Layout.js"

export class NeuRow extends Layout {
    constructor() {
        super()
        this.name = "NeuRow"

        this.create()
        this.init()
    }

    create() {
        this.element = this.createLayout()
    }

    init() {
        this.element.className = "NeuLayout"
        this.element.style.display = "flex"
        this.element.style.flexDirection = "row"
    }

    // 오버라이드 된 함수입니다
    // 반드시 이 이름으로 작명하셔야 합니다
    childrenUpdate() {
        this.appendTo(this.element)
    }
}
