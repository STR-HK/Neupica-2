import { Layout } from "./Layout.js"

export class NeuColumn extends Layout {
    constructor() {
        super()

        this.name = "NeuColumn"

        this.element = document.createElement("div")
        this.element.className = "Neu-Column"
        this.element.style.display = "flex"
        this.element.style.flexDirection = "column"
    }

    // 오버라이드 된 함수입니다
    // 반드시 이 이름으로 작명하셔야 합니다
    childrenUpdate() {
        this.appendTo(this.element)
    }
}
