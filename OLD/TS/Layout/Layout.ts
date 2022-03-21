import { Children } from "../Common/Children.js";

export class Layout extends Children {
    name: string
    element: any
    constructor() {
        super()


    }

    cvt(children: Array<any>): Array<any> {
        let element = []
        children.forEach(child => {
            console.log('cvt: ' + child.cover)
            element.push(child.cover)
        })
        return element
    }
}