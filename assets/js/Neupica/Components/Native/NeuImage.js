import { Native } from "./Native.js"

export class NeuImage extends Native {
    constructor() {
        super()
        this.name = "NeuImage"

        this.data = {
            Src: [
                "",
                function () {
                    this.element.src = this.data.Src
                    // let xhr = new XMLHttpRequest()
                    // let elem = this.element
                    // xhr.open("GET", this.data.Src, true)
                    // xhr.responseType = "arraybuffer"
                    // xhr.onload = () => {
                    //     let url = URL.createObjectURL(xhr.response)
                    //     console.log(url)
                    //     elem.src = url
                    // }
                    // xhr.send(null)
                },
            ],
        }
        this.build()

        this.element = this.createImg()
        this.cover.addChild(this.element)
        // this.cover = this.element
        this.init()
    }

    init() {
        // this.element.style.width = "fit-content"
        // if (this.def == true) {
        //     this.img.src = "assets/img/def.png"
        // }
    }

    uSrc() {
        // let xhr = new XMLHttpRequest()
        // let elem = this.element
        // // xmlhttp.responseType = "arraybuffer"
        // xhr.onprogress = function (e) {
        //     console.log(xhr.status)
        //     console.log(e)
        //     if (e.lengthComputable) {
        //         let percentComplete = (e.loaded / e.total) * 100
        //         console.log(percentComplete)
        //     } else {
        //         console.log(
        //             "Unable to compute progress information since the total size is unknown"
        //         )
        //     }
        // }
        // xhr.onloadstart = function () {
        //     console.log("start")
        //     console.log(xhr.status)
        // }
        // xhr.onloadend = function () {
        //     console.log("end")
        //     console.log(xhr.status)
        // }
        // xhr.onabort = function () {
        //     console.log("abort")
        // }
        // xhr.ontimeout = function () {
        //     console.log("timeout")
        // }
        // xhr.onerror = function () {
        //     console.log("error")
        // }
        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState == 0) {
        //         console.log('0 UNSENT')
        //         console.log(xhr.status)
        //     } else if (xhr.readyState == 1) {
        //         console.log('1 OPENED')
        //         console.log(xhr.status)
        //     } else if (xhr.readyState == 2) {
        //         console.log('2 HEADERS_RECEIVED')
        //         console.log(xhr.status)
        //     } else if (xhr.readyState == 3) {
        //         console.log('3 LOADING')
        //         console.log(xhr.status)
        //     } else if (xhr.readyState == 4) {
        //         console.log('4 DONE')
        //         console.log(xhr.status)
        //     }
        // }
        // xhr.onload = function () {
        //     let blob = new Blob([this.response])
        //     elem.src = URL.createObjectURL(blob)
        // }
        // xhr.open("GET", this.data.Src, true)
        // xhr.send()
    }
}
