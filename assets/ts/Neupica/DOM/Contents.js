export class Content {
    constructor() {
        this.type = "";
        this.data = "";
        this.element = "";
        this.args = {};
    }
}
export function getStyle(link) {
    let WM = window.WindowManager;
    let content = new Content();
    content.type = "Style";
    content.data = link;
    // console.log(WM)
    WM.addStyle(content);
}
export function getScript(src, type = "") {
    let WM = window.WindowManager;
    let content = new Content();
    content.type = "Script";
    content.data = src;
    if (type != "") {
        content.args = {
            type: type,
        };
    }
    WM.addScript(content);
}
//# sourceMappingURL=Contents.js.map