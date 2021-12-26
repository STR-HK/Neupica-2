import { chars } from "./chars.js";


window.chars = chars

export function Ascii (text) {

    let asciisAllList = [[],[],[],[],[],[],[],[],[],[],[]]
    for (let asciisC = 0; asciisC < text.length; asciisC++) {
        let asciis = chars[text[asciisC].charCodeAt()]
        if ( asciis != undefined ) {
            for (let asciisAllListC = 0; asciisAllListC < asciis.length; asciisAllListC++) {
                asciisAllList[asciisAllListC].push(asciis[asciisAllListC])
            }
        }
    }

    asciisAllList.unshift([])
    asciisAllList.push([])

    let asciisAll = []
    asciisAllList.forEach(asciisAllListE => {
        asciisAll.push(asciisAllListE.join(''))
    })

    let ascii = asciisAll.join('\n').replace('&',' ')

    return ascii
}