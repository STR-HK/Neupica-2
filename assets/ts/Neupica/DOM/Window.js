import { Content } from "./Contents.js"

export function initWindow() {
    // console.log('initWindow')
    window.WindowManager = new (class WindowManager {
        constructor() {
            this.windowList = {
                Style: [],
                Script: [],
                App: [],
            }

            this.head = document.head
        }

        createComment() {
            let comment = document.createComment("Injected by WindowManager")
            return comment
        }

        addStyle(content) {
            let style = document.createElement("link")
            style.rel = "stylesheet"
            style.href = content.data
            this.head.appendChild(style)

            content.element = style
            this.windowList.Style.push(content)
        }

        addScript(content) {
            let script = document.createElement("script")
            script.src = content.data
            Object.keys(content.args).forEach((key) => {
                script.setAttribute(key, content.args[key])
            })
            this.head.appendChild(script)

            content.element = script
            this.windowList.Script.push(content)
        }

        addApp(content) {
            console.log(`[WM] addApp: ${content}`)
        }
    })()
    // console.log(window.WindowManager)

}
