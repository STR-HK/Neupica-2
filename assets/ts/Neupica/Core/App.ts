import { runApp } from "../Neupica2.js"
import { NeuEliminate, NeuRender } from "./Render.js"
import { createUnique } from "../Components/Create/Create.js"
import { NeuLayout } from "../../Layout/NeuLayout.js"
import { Layout } from "../../Layout/Layout"
import { NeuScaffold } from "../../Layout/NeuScaffold.js"
// import { Object } from "../../Common/Object.ts"

export class NeuApp {
    layout: undefined | NeuLayout | NeuScaffold
    dom: undefined | HTMLElement
    app: HTMLDivElement
    readonly appCode: string
    readonly renderID: boolean
    queues: any[]
    void: string
    faviconLink: HTMLLinkElement | undefined
    canSolveQueue: any

    constructor() {
        this.layout = undefined
        this.dom = undefined
        this.app = this.createApp()
        this.appCode = createUnique()
        this.renderID = false
        this.queues = []

        this.void = 'ㅤ'

        Array.from(document.getElementsByTagName('link')).forEach(link => {
            if (link.rel === 'icon') {
                this.faviconLink = link
            } else {
                this.faviconLink = undefined
            }
        })

        // Do not change this manually!
        this.canSolveQueue = false
    }

    setTitle(title: string) {
        window.document.title = title
    }

    setVoidTitle() {
        window.document.title = this.void
    }

    setFavicon(url: string) {
        if (this.faviconLink != undefined) {
            this.faviconLink.href = url
        }
    }

    setVoidFavicon() {
        if (this.faviconLink != undefined) {
            this.faviconLink.href = this.void
        }
    }

    setLayout(layout: NeuLayout) {
        this.layout = layout
    }

    setFullScreen(bool: boolean) {
        let that: NeuApp = this
        if (bool) {
            this.addQueue({
                command: "f",
                arguments: [function(that: NeuApp) {
                    if (that.layout != undefined) {
                        if ("style" in that.layout.element) {
                            that.layout.element.style.width = "100%"
                            that.layout.element.style.height = '100%'

                        }
                    }
                }, that]
            })
            this.app.style.width = '100%'
            this.app.style.height = '100%'
        } else {
            this.addQueue({
                command: "f",
                arguments: [function(that: NeuApp) {
                    if (that.layout != undefined) {
                        if ("style" in that.layout.element) {
                            that.layout.element.style.width = ""
                            that.layout.element.style.height = ''

                        }
                    }
                }, that]
            })
            this.app.style.width = ''
            this.app.style.height = ''
        }
    }

    createApp() {
        let app = document.createElement("div")
        app.id = Object.getPrototypeOf(this).constructor.name
        app.className = "NeuApp"
        return app
    }

    draw(where: string) {
        this.addQueue({
            command: 'draw',
            arguments: [where],
        })
    }

    sculpt(parentElement: HTMLElement) {
        this.addQueue({
            command: 'sculpt',
            arguments: [parentElement],
        })
    }

    erase() {
        NeuEliminate(this, this.layout, this.app, false)
    }

    addQueue(queue: object) {
        this.queues.push(queue)
        if (this.canSolveQueue) {
            this.solveQueues()
        }
    }

    solveQueues() {
        if (this.queues.length > 0) {
            this.queues.forEach(queue => {
                if (this.layout === undefined) {
                    console.error("layout is not defined")
                } else {
                    if (queue['command'] === 'draw') {
                        let where = queue['arguments'][0]
                        this.dom = document.querySelector(where)
                        if (this.dom !== undefined) {
                            this.dom.appendChild(this.app)
                        }
                        NeuRender(this, this.layout, this.app, false)
                    }
                    if (queue['command'] === 'sculpt') {
                        let parentElement = queue['arguments'][0]
                        this.dom = parentElement
                        if (this.dom !== undefined) {
                            this.dom.appendChild(this.app)
                        }
                        NeuRender(this, this.layout, this.app, true)
                    }
                }
                if (queue['command'] === 'f' ||
                    queue['command'] === 'func' ||
                    queue['command'] === 'function'
                    ) {
                    queue['arguments'][0](queue['arguments'][1])
                    return true
                }
            })
            this.queues = []
        }
    }
}

