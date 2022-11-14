import { Children } from "../../../Common/Children.ts"
import { createCover } from "../Create/Create.ts"
import { Native } from "../Native/Native.ts"


export class Widget extends Native {
    constructor() {
        super()
    }
}

import { NeuButton } from "./NeuButton.js"
import { NeuLabel } from "./NeuLabel.js"
import { NeuTable } from "./NeuTable.js"

export { NeuButton, NeuLabel, NeuTable }