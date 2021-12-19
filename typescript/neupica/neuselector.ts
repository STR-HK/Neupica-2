

export class NeuSelector {
    [x: string]: any
    constructor () {
        this.Id = function (elementId: string) {
            document.getElementById
        }

        this.ClassName = function (classNames: string) {
            document.getElementsByClassName
        }

        this.TagName = function () {
            document.getElementsByTagName
        }

        this.Query = function () {
            document.querySelector
        }

        this.QueryAll = function () {
            document.querySelectorAll
        }
        
    }
}