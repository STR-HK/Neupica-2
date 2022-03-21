import { Storage } from "./Storage.js";
export function initIndex() {
    window.Index = new class Index extends Storage {
        constructor() {
            super();
        }
    };
}
//# sourceMappingURL=Index.js.map