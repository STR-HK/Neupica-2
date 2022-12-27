import { materialColorsClassesList } from "../Tool/MaterialColor.js"
import { DebugFrame } from "../Neupica/Components/Custom/deprecated/DebugFrame.js"
import { NeuApp } from "../Neupica/Core/App.ts"
import { NeuColumn } from "../Layout/NeuColumn.ts"

function attachDebugFrame(element) {
    let debugFrame = new DebugFrame()
    debugFrame.geometry.Position = 'fixed'

    function setGeometry(element, debugFrame) {
        if (debugFrame !== undefined) {
            let elementData = element.getBoundingClientRect()
            // console.log(
            //     elementData.top + "px " + elementData.left + "px " + elementData.width + "px " + elementData.height + "px"
            // )
            debugFrame.geometry.Top = elementData.top + "px"
            debugFrame.geometry.Left = elementData.left + "px"
            debugFrame.geometry.Width = elementData.width + "px"
            debugFrame.geometry.Height = elementData.height + "px"
        }
    }

    setGeometry(element, debugFrame)

    debugFrame.data.BackgroundColor = "transparent"
    debugFrame.geometry.ZIndex = 9999

    debugFrame.cover.style.pointerEvents = "none"
    debugFrame.element.style.pointerEvents = 'none'

    let material_colors = []
    materialColorsClassesList.forEach(c => {
        material_colors.push(c.NineHundred)
    })

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }

    let bgColor = material_colors[getRandomInt(0, material_colors.length)]
    console.log(element.getAttribute('name'))
    if (element.getAttribute('name') === "NeuContainer") {
        setGeometry(element.lastElementChild)
        debugFrame.data.Border = '1px dashed ' + bgColor
    }
    Array.from(element.classList).forEach(function(e) {
        if (e === "NeuCover") {
            setGeometry(element.lastElementChild)
            debugFrame.data.Border = "1px solid #FF00FF"
        }
    })
    if (element.getAttribute('class') === "NeuLayout") {
        debugFrame.data.Border = "1px dotted transparent"
    }
    // debugFrame.data.Border = "1px dotted black"

    document.body.appendChild(debugFrame.cover)

}

function clearDebugFrame() {
    let debugFrames = document.getElementsByClassName("debugFrame")
    // console.log('allclear')
    Array.from(debugFrames).forEach((element) => {
        // window.thisClass(element).cover.remove()
        // console.log(element)
        element.remove()

    })
}

window.debug = function (query) {
    Debug(document.querySelector(query))
}

export function Debug(what) {
    // console.log('what')
    // console.log(what)
    let mutationObserver = new MutationObserver(function (mutations) {
        // console.log(mutations)
        clearDebugFrame()
        mutations.forEach(function (mutation) {
            // console.log(mutation)
            Object.entries(window.Index.storage).forEach(([key, value]) => {
                // console.log(value)
                attachDebugFrame(value)
            })

        })
    })
    mutationObserver.observe(what, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true,
    })

    function temp() {
        setTimeout(function () {
            let temp = document.createElement("div")
            what.appendChild(temp)
            temp.remove()
        }, 600)
    }

    temp()

    window.addEventListener("resize", temp)
    window.addEventListener("scroll", temp)

    // setInterval(function () {
    //     clearDebugFrame()
    //     Object.entries(window.Index.storage).forEach(([key, value]) => {
    //         attachDebugFrame(value)
    //     })
    // }, 50)

    window.terminate = function () {
        window.removeEventListener("resize", temp)
        window.removeEventListener("scroll", temp)
        mutationObserver.disconnect()
        clearDebugFrame()
        window.terminate = undefined
    }
}
