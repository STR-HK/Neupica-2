function makeId(length) : string {
    var result           = ''

    var characters       = ''
    characters           += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    characters           += 'abcdefghijklmnopqrstuvwxyz'
    // characters           += '스토라'
    characters           += '0123456789'

    var charactersLength = characters.length

    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
}

type ElementEditCallback = (element: HTMLElement) => HTMLElement

export class Widgets {
    object: { [key : string]: any }

    loadStyle: (name: string) => void
    store: (elementID: string, realClass: string) => void

    createCover: (name: string) => HTMLDivElement
    createElement: (hidden: boolean, fir: boolean) => HTMLDivElement
    createImg: (hidden: boolean) => HTMLImageElement

    apply: (object: { [key : string]: any }) => void
    editSvg: (url: string, editFunction: ElementEditCallback) => Promise<string>

    constructor () {
        this.loadStyle = function (name) {
            return window.WidgetStyler[name]
        }

        this.store = function (elementID : string, realClass : string) {
            window.IndexStorage.setItem(elementID, realClass)
        }

        this.createCover = function (name: string) : HTMLDivElement {
            var element = document.createElement('div')
            element.id = `${name}-${makeId(6)}` // Name-xxxxxx
            element.style.width = 'fit-content'
            this.store(element.id, this)
            return element
        }

        this.createElement = function (hidden: boolean = false, fit : boolean = true) : HTMLDivElement {
            var element = document.createElement('div')
            element.id = `Neu-Div-${makeId(6)}` // Neu-Div-xxxxxx
            if ( fit ) {
                element.style.width = 'fit-content'
                element.style.height = 'fit-content'

                element.style.boxSizing = 'border-box'
            }
            if ( hidden ) { element.style.display = 'none' }
            return element
        }

        this.createImg = function (hidden: boolean = false) : HTMLImageElement {
            var element = document.createElement('img')
            element.id = `Neu-Img-${makeId(6)}` // Neu-Img-xxxxxx
            if ( hidden ) { element.style.display = 'none' }
            return element
        }

        this.apply = function (obj) {
            Object.entries(obj).forEach(entry => {
                if (entry[1] != null) {
                    
                    try {
                        this['object'][entry[0]] = entry[1]
                        this['set' + entry[0]](entry[1])
                        // console.log(`%c${this.name}.set${entry[0]}(${entry[1]})`, 'color: #C34;')
                    } catch (error) {
                        console.warn(`${this.name} -> set${entry[0]}(${entry[1]})\n\n${error}`)
                        // console.warn(error)
                    }
                }
            })
        }

        // this.styles = function (target, obj) {
        //     Object.entries(obj).forEach(entry => {
        //         this[target]['style'].setProperty(entry[0], entry[1])
        //         console.log(this[target]['style'][entry[0]])
        //         console.log(`%c${this.name}.${target}.setProperty(${entry[0]}, ${entry[1]})`,
        //         'background: black')
        //     })
        // }

        // this.editSvg = function (url, editFunction) {
        //     let xhr = new XMLHttpRequest()
        //     xhr.open('GET', url, false)
        //     xhr.overrideMimeType('image/svg+xml')
        //     xhr.send()

        //     if (xhr.status == 200) {
        //         let element = xhr.responseXML.documentElement

        //         if ( typeof editFunction == 'function' ) {
        //             element = editFunction(element)
        //         }

        //         let blob = new Blob([element.outerHTML], { type: 'image/svg+xml' })
        //         url = URL.createObjectURL(blob)

        //         return url
        //     }
        // }
        

        this.editSvg = function (url: string, editFunction: ElementEditCallback) {
            return new Promise(
                function (resolve) {
                    let xhr = new XMLHttpRequest()
                    xhr.open('GET', url, true)
                    xhr.overrideMimeType('image/svg+xml')
                    xhr.onload = () => {
                        if (xhr.status == 200) {
                            let element = xhr.responseXML.documentElement
                        
                            if ( typeof editFunction == 'function' ) {
                                element = editFunction(element)
                            }
                        
                            let blob = new Blob([element.outerHTML], { type: 'image/svg+xml' })
                            url = URL.createObjectURL(blob)
                        
                            resolve(url)
                        }
                    }
                    xhr.send()
                }
            )

            
        }

        // console.log(this.editSvg('./assets/img/MDI/accessibility.svg'))

    }
}