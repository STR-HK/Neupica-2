import { Storage } from "./Storage.js"

declare global {
    interface Window {
        Global: Storage
    }
}

export function initGlobal() {
    class Global extends Storage {
        constructor() {
            super()
        }
    }

    window.Global = new Global()
}
