export class Storage {
    storage: object
    constructor() {
        this.storage = {

        }
    }

    get length() {
        return Object.keys(this.storage).length
    }

    key(index: number) {
        return Object.keys(this.storage)[index]
    }

    getItem(key: string) {
        return this.storage[key]
    }

    setItem(key: string, value: string) {
        return this.storage[key] = value
    }

    removeItem(key: string) {
        return delete this.storage[key]
    }

    clear() {
        return this.storage = {}
    }
}