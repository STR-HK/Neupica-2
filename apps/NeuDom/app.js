import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
import { NeuScaffold } from "../../assets/ts/Layout/NeuScaffold.js"
import { TopAppBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/TopAppBars.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import { MaterialSymbolsOutlined } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { IconButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { colorScheme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
// import { NObject } from "../../assets/ts/Common/NObject.ts"
// import * as inspector from "inspector"

export class NeuDom extends NeuApp {
    constructor() {
        super()
        this.setFullScreen(true)
        this.layout = new NeuScaffold()
        this.layout.data.BackgroundColor = colorScheme.background


        this.appBarIcon = new MaterialSymbolsOutlined('space_dashboard')
        this.appBarIconButton = new IconButton(this.appBarIcon)

        this.appBar = new TopAppBar()
        this.appBar.setLeading(this.appBarIconButton)
        this.appBar.setHeadline('NeuDom')
        this.layout.head.addChild(this.appBar)

        this.draw('#App')

        let that = this

        let depth = 0

        var shiftCharCode = Δ => c => String.fromCharCode(c.charCodeAt(0) + Δ);
        var toFullWidth = str => str.replace(/[!-~]/g, shiftCharCode(0xFEE0));

        function createBar(lergth) {
            let ret = new String()
            for (let i = 0; i < lergth; i++) {
                ret += toFullWidth(i.toString())
            }
            return ret
        }

        class VirtualDomManager {
            constructor(grandparent) {
                // let gu = grandparent.unique
                this.vdom = {}
                this.vsearch = {}
                // console.log(grandparent)
                this.vdom[grandparent.unique] = {}
                this.rootID = grandparent.unique
                console.log(this.vdom)
                // this.vdomlist = []
            }


            locateMyParent(parent) {
                //return an array of objects according to key, value, or key and value matching
                function getObjects(obj, key, val) {
                    var objects = [];
                    for (var i in obj) {
                        if (!obj.hasOwnProperty(i)) continue;
                        if (typeof obj[i] == 'object') {
                            objects = objects.concat(getObjects(obj[i], key, val));
                            // console.warn(objects)
                        } else
                            //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
                        if (i == key && obj[i] == val || i == key && val == '') { //
                            objects.push(obj);
                        } else if (obj[i] == val && key == ''){
                            //only add if the object is not already in the array
                            if (objects.lastIndexOf(obj) == -1){
                                objects.push(obj);
                            }
                        }
                    }
                    return objects;
                }

                //return an array of objects according to key, value, or key and value matching
                function getValues(obj, key) {
                    var objects = [];
                    for (var i in obj) {
                        if (!obj.hasOwnProperty(i)) continue;
                        if (typeof obj[i] == 'object') {
                            objects = objects.concat(getValues(obj[i], key));
                        } else if (i == key) {
                            objects.push(obj[i]);
                        }
                    }
                    return objects;
                }

                let result = getObjects(this.vdom, parent.unique, null)
                console.log(result)
                return result
            }

            attachToParent(parent, child) {
                // let location = this.locateMyParent(parent)
                // console.warn(location)
                // if (location.length == 0) {
                //     this.vdom[this.rootID][child.unique] = {}
                // }
                this.vdom[child.unique] = child

                // this.vdom[parent.unique] = {}
                if (!this.vsearch[parent.unique]) {
                    this.vsearch[parent.unique] = [child.unique]
                } else {
                    this.vsearch[parent.unique].push(child.unique)
                }
                console.error(this.vsearch)
            }

            getVirtualElement (parent, child) {

            }
        }


        class VirtualElement {
            constructor(parent, child) {

            }
        }

        function ordor(grandparent, parent) {
            parent.children.forEach(child => {
                console.log('parent: ', parent.unique)
                console.log('child: ', child.unique)

                VDM.attachToParent(parent, child)


                let grandchild = child
                if (grandchild.children.length != 0) {

                    ordor(grandparent, grandchild)

                }
            })
        }
        let grandparent = this.layout
        let VDM = new VirtualDomManager(grandparent)
        ordor(grandparent, grandparent)

        // function preOrder(callback) {
        //     let children = callback.children
        //     if (children.length !== 0) {
        //         depth += 1
        //
        //         children.forEach((child) => {
        //
        //             if (child.ghost != true) {
        //
        //                 console.log(child)
        //                 let text = new NeuContainer()
        //                 text.ghost = true
        //                 text.Text.data.Content = `${createBar(depth)} ${child.constructor.name} (${child.data.Text})`
        //                 text.data.FontSize = '14rem'
        //                 text.data.TextColor = colorScheme.onBackground
        //
        //                 that.layout.body.addChild(text)
        //                 preOrder(child)
        //
        //             }
        //         })
        //     } else {
        //         depth -= 1
        //     }
        // }
        // preOrder(this.layout)
    }
}

let app = new NeuDom()
runApp(app)