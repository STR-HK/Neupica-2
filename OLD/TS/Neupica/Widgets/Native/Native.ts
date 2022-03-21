function makeId(length): string {
    let result = ''

    let characters = ''
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    characters += 'abcdefghijklmnopqrstuvwxyz'
    characters += '0123456789'

    let charactersLength = characters.length

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
}

export class Native {
    name: string

    [x: string]: any
    constructor() {
        this.updatePrefix = 'u'
        this.apply = function (obj: object) {
            Object.entries(obj).forEach(entry => {
                if (entry[1] != null) {
                    try {
                        this[this.updatePrefix + entry[0]](entry[1])
                    } catch (error) {
                        console.warn(
                            `${this.name} -> ${entry[0]}(${entry[1]})` +
                            `\n` +
                            ` ${error}`
                        )
                    }
                }
            })
        }
        this.update = function (key: string) {
            try {
                this[this.updatePrefix + key]()
            } catch (error) {
                console.error(
                    `${this.name}.${this.updatePrefix}${key}(${this.obj[key]})` +
                    ` -> Error ignored` +
                    `\n` +
                    ` ${error}`
                )
            }
        }
    }

    createCover() {
        let element = document.createElement('div')
        element.id = this.name + '-' + makeId(6)
        element.classList.add('NeuCover')
        window.Index.setItem(element.id, element)

        return element
    }

    createDiv() {
        let element = document.createElement('div')
        element.id = 'Neu-Div-' + makeId(6)
        window.Index.setItem(element.id, element)

        return element
    }

    createElement(tagName: string) {
        let element = document.createElement(tagName)
        element.id = 'Neu-Elem-' + tagName + '-' + makeId(6)
        window.Index.setItem(element.id, element)

        return element
    }
}