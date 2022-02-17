function makeId(length) : string {
    var result           = ''

    var characters       = ''
    // characters           += 'NeuPica2'

    characters           += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    characters           += 'abcdefghijklmnopqrstuvwxyz'
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
    createElement: (hidden?: boolean, fir?: boolean) => HTMLDivElement
    createImg: (hidden: boolean) => HTMLImageElement

    apply: (object: { [key : string]: any }) => void
    editSvg: (url: string, editFunction: ElementEditCallback) => Promise<string>

    // To inherited class

    name: string
    [x: string]: any

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

            window.DebugStorage.setItem(element.id, element)

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

            window.DebugStorage.setItem(element.id, element)

            return element
        }

        this.createImg = function (hidden: boolean = false) : HTMLImageElement {
            var element = document.createElement('img')
            element.id = `Neu-Img-${makeId(6)}` // Neu-Img-xxxxxx
            if ( hidden ) { element.style.display = 'none' }

            window.DebugStorage.setItem(element.id, element)

            return element
        }

        this.apply = function (obj) {
            Object.entries(obj).forEach(entry => {
                if (entry[1] != null) {
                    
                    try {
                        // console.log(entry[0], entry[1])
                        this['update'+entry[0]](entry[1])
                        // this[entry[0]](entry[1])
                        // console.log(`%c${this.name}.set${entry[0]}(${entry[1]})`, 'color: #C34;')
                    } catch (error) {
                        console.warn(`${this.name} -> ${entry[0]}(${entry[1]})\n\n${error}`)
                        // console.warn(error)
                    }
                }
            })
        }

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

        window.Debug = function () {

            console.log('Debug')

            window.addEventListener('resize', function () {
                Array.from(document.getElementsByClassName('debug')).forEach(element => {
                    element.remove()
                });
                
                Object.keys(window.DebugStorage.storage).forEach(key => {
                    let elem = window.DebugStorage.storage[key]
    
                    elem.getBoundingClientRect()
    
                    let debug = document.createElement('div')
                    debug.style.position = 'absolute'
                    debug.classList.add('debug')
                    debug.style.top = `${elem.getBoundingClientRect().top}px`
                    debug.style.left = `${elem.getBoundingClientRect().left}px`
                    debug.style.width = `${elem.getBoundingClientRect().width}px`
                    debug.style.height = `${elem.getBoundingClientRect().height}px`
    
                    debug.style.pointerEvents = 'none'
                    // debug.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'
                    debug.style.border = 'rgba(0, 0, 0, 0.5) solid 2px'
                    debug.style.zIndex = '9999'
                    // debug.innerHTML = `${key}`
                    document.body.appendChild(debug)
    
                })
            })

            window.dispatchEvent(new Event('resize'))

        }
        
        // window.addEventListener('resize', function () {
        //     window.Debug()
        // })

    }
    
}


