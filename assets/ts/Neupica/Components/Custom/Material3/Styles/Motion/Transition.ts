import { Native } from "../../../../Native/Native"
import anime from "./anime.es.js"
import { hexToRgba } from "../Color.js"

let regex = /[0-9A-Fa-f]{6}/g;

export function transit(element: Native, attributes: Object) {
    Object.keys(attributes).forEach(key => {
        let value = attributes[key]
        if (typeof value == 'string' || typeof value == 'number') {
            if (value.match(regex)) {
                let ra = hexToRgba(value)
                attributes[key] = [
                    element.element.style[key],
                    `rgba(${ra[0]}, ${ra[1]}, ${ra[2]}, ${ra[3]})`,
                ]
            } else {
                attributes[key] = [
                    element.element.style[key],
                    value,
                ]
            }
        }
    })
    anime({
        targets: element.element,
        ...attributes,
        easing: 'linear',
        duration: 500,
    })
}

export function dtransit(element: Native, attributes: Object, duration: number) {
    Object.keys(attributes).forEach(key => {
        let value = attributes[key]
        if (typeof value == 'string' || typeof value == 'number') {
            if (value.match(regex)) {
                let ra = hexToRgba(value)
                attributes[key] = [
                    element.element.style[key],
                    `rgba(${ra[0]}, ${ra[1]}, ${ra[2]}, ${ra[3]})`,
                ]
            } else {
                attributes[key] = [
                    element.element.style[key],
                    value,
                ]
            }
        }
    })
    anime({
        targets: element.element,
        ...attributes,
        easing: 'linear',
        duration: duration,
    })
}