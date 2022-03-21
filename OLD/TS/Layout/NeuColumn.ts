import { Layout } from "./Layout.js";

export class NeuColumn extends Layout {
    constructor() {
        super()

        this.name = 'NeuColumn'
    }

    // 오버라이드 된 함수입니다
    childrenUpdate(): void {
        this.element = document.createElement('div')
        this.element.className = 'Neu-Column'
        this.element.style.display = 'flex'
        this.element.style.flexDirection = 'column'

        this.cvt(this.children).forEach(element => {
            this.element.appendChild(element)
        })
    }
}