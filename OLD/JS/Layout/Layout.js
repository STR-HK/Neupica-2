import { Children } from "../Common/Children.js";
export class Layout extends Children {
    name;
    element;
    constructor() {
        super();
    }
    cvt(children) {
        let element = [];
        children.forEach(child => {
            console.log('cvt: ' + child.cover);
            element.push(child.cover);
        });
        return element;
    }
}
//# sourceMappingURL=Layout.js.map