import { Widgets } from './Widgets.js';

export class NeuDefault extends Widgets {
    constructor () {
        super()
        this.name = 'NeuDefault'

        this.create()
        this.init()
        
        this.apply({}) // 스타일 적용
    }

    create () {
        this.cover = this.createCover(this.name)
            this.element = this.createElement()
            this.cover.appendChild(this.element)
    }

    init () {
    }
}