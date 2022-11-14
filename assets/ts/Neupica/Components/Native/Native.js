import { Found } from "../Found/Found.js";
export class Native extends Found {
    constructor() {
        super();
        this.cover = this.createCover();
        // @ts-ignore
        this.cover.style.webkitTapHighlightColor = "transparent";
    }
}
//# sourceMappingURL=Native.js.map