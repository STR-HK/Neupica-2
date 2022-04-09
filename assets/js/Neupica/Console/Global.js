import { Storage } from "./Storage.js"

export function initGlobal() {
    class Global extends Storage {
        constructor() {
            super()
        }
    }

    window.Global = new Global()
}
