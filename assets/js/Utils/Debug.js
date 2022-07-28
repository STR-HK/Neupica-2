function attachDebugFrame(element) {
    let debugFrame = document.createElement("div")
    debugFrame.classList.add("debugFrame")
    debugFrame.style.position = "fixed"

    function setGeometry(element) {
        // console.log(element)
        let elementData = element.getBoundingClientRect()
        debugFrame.style.top = elementData.top + "px"
        debugFrame.style.left = elementData.left + "px"
        debugFrame.style.width = elementData.width + "px"
        debugFrame.style.height = elementData.height + "px"
    }

    setGeometry(element)
    // debugFrame.style.border = '1.5px dotted black'
    debugFrame.style.backgroundColor = "rgba(255, 255, 255, 0)"
    debugFrame.style.zIndex = "9999"
    debugFrame.style.pointerEvents = "none"

    let alpha = '1'
    let colors = [
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

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }

    let bgColor = colors[getRandomInt(0, 10)]
    // console.log(bgColor)

    if (element.getAttribute('name') === "NeuContainer") {
        setGeometry(element.lastElementChild)
        debugFrame.classList.add('container')
        debugFrame.style.border = '2px dashed ' + bgColor
    } else if (element.getAttribute('class') === "NeuCover") {
        setGeometry(element.lastElementChild)
        debugFrame.style.border = "1px solid #FF00FF"
    }
    if (element.getAttribute('class') === "NeuLayout") {
        debugFrame.style.border = "2px dotted transparent"
    }

    document.body.appendChild(debugFrame)
}

function clearDebugFrame() {
    let debugFrame = document.getElementsByClassName("debugFrame")
    Array.from(debugFrame).forEach((element) => {
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
        clearDebugFrame()
        mutations.forEach(function (mutation) {
            // console.log(mutation.target)
            Object.entries(window.Index.storage).forEach(([key, value]) => {
                try {
                    attachDebugFrame(value)
                } catch (e) {
                    
                }
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
        }, 60)
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
