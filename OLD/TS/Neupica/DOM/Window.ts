import { Content } from "./Contents.js"

export function initWindow() {
    window.WindowManager = new class WindowManager {
        windowList: {
            Style: Array<any>,
            Script: Array<any>,
            App: Array<any>,
        }
        head: HTMLHeadElement

        constructor() {
            this.windowList = {
                Style: [],
                Script: [],
                App: [],
            }

            this.head = document.head
        }

        createComment() {
            let comment = document.createComment('Injected by WindowManager')
            return comment
        }

        addStyle(content: Content) {
            let style = document.createElement('link')
            style.rel = 'stylesheet'
            style.href = content.data
            this.head.appendChild(style)

            content.element = style
            this.windowList.Style.push(content)
        }

        addScript(content: Content) {
            let script = document.createElement('script')
            script.src = content.data
            Object.keys(content.args).forEach(key => {
                script.setAttribute(key, content.args[key])
            })
            this.head.appendChild(script)

            content.element = script
            this.windowList.Script.push(content)
        }

        addApp(content: Content) {
            console.log(`[WM] addApp: ${content}`)
        }
    }
}



