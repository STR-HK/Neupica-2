export class Content {
    type: string
    data: string
    element: HTMLElement | string
    args: any

    constructor() {

        this.type = ""
        this.data = ""
        this.element = ''
        this.args = {}

    }
}

export function getStyle(link: string) {
    let WM = window.WindowManager

    let content = new Content()
    content.type = 'Style'
    content.data = link

    WM.addStyle(content)
}

export function getScript(src: string, type = '') {
    let WM = window.WindowManager

    let content = new Content()
    content.type = 'Script'
    content.data = src

    if (type != '') {
        content.args = {
            type: type
        }
    }

    WM.addScript(content)
}