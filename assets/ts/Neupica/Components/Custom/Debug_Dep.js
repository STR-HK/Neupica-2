import { materialColorsClassesList } from "../../Core/MaterialColor"

function attachDebugFrame(element) {
    // console.log(element)
    let debugFrame = document.createElement("div")
    // let debugFrame2 = new DebugFrame()
    // console.log(debugFrame2)
    //
    debugFrame.classList.add("debugFrame")
    // debugFrame2.cover.classList.add('debugFrame')
    //
    debugFrame.style.position = "fixed"
    // debugFrame2.geometry.Position = 'fixed'
    //
    function setGeometry(element, debugFrame) {
        // console.log(element)
        let elementData = element.getBoundingClientRect()
        console.log(debugFrame)
        debugFrame.style.top = elementData.top + "px"
        debugFrame.style.left = elementData.left + "px"
        debugFrame.style.width = elementData.width + "px"
        debugFrame.style.height = elementData.height + "px"
    }

    setGeometry(element, debugFrame)
    // debugFrame2.setGeometry(element)
    //
    // debugFrame.style.border = '1.5px dotted black'
    // debugFrame2.data.Border = '1.5px dotted black'

    debugFrame.style.backgroundColor = "rgba(255, 255, 255, 0)"
    // debugFrame2.data.BackgroundColor = "transparent"
    //
    debugFrame.style.zIndex = "9999"
    // debugFrame2.geometry.ZIndex = 9999
    //
    debugFrame.style.pointerEvents = "none"
    // debugFrame2.cover.style.pointerEvents = "none"
    // debugFrame2.element.style.pointerEvents = 'none'
    //
    let alpha = '1'
    let pastel_colors = [
        `rgba(228, 161, 211, ${alpha})`,
        `rgba(255, 192, 191, ${alpha})`,
        `rgba(255, 227, 191, ${alpha})`,
        `rgba(255, 247, 191, ${alpha})`,
        `rgba(199, 255, 191, ${alpha})`,
        `rgba(191, 255, 222, ${alpha})`,
        `rgba(191, 255, 254, ${alpha})`,
        `rgba(191, 201, 255, ${alpha})`,
        `rgba(207, 191, 255, ${alpha})`,
    ]

    let material_colors = []
    materialColorsClassesList.forEach(c => {
        material_colors.push(c.NineHundred)
    })
    function getRandomInt(min, max) {
        // max += 1
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }
    let bgColor = material_colors[getRandomInt(0, material_colors.length)]

    if (element.getAttribute('name') === "NeuContainer") {
        // console.log('NeuContainer')
        setGeometry(element.lastElementChild)
        // debugFrame2.setGeometry(element.lastElementChild)

        debugFrame.classList.add('container')
        // debugFrame2.cover.classList.add('container')

        debugFrame.style.border = '1px dashed ' + bgColor
        // debugFrame2.data.Border = '1px dashed ' + bgColor
    } else if (element.getAttribute('class') === "NeuCover") {
        // console.log("NeuCover")
        setGeometry(element.lastElementChild)
        // debugFrame2.setGeometry(element.lastElementChild)
        //
        debugFrame.style.border = "1px solid #FF00FF"
        // debugFrame2.data.Border = "1px solid #FF00FF"
    }
    if (element.getAttribute('class') === "NeuLayout") {
        // console.log("NeuLayout")
        debugFrame.style.border = "1px dotted transparent"
        // debugFrame2.data.Border = "1px dotted transparent"
    }
    // let debugApp = new NeuApp()
    // let debugLayout = new NeuColumn()
    // debugApp.layout = new NeuColumn()
    // debugApp.layout.addChild(debugFrame2)
    // console.log(debugApp)
    // window.setFloat(debugApp)
    // debugFrame2

    document.body.appendChild(debugFrame)
    // document.body.appendChild(debugFrame2.cover)

    // console.log(debugFrame2.cover)
}