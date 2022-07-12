function attachDebugFrame(element) {
    let debugFrame = document.createElement("div")
    debugFrame.classList.add("debugFrame")
    debugFrame.style.position = "fixed"

    function setGeometry(element) {
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

    if (element.getAttribute('name') === "NeuContainer") {
        setGeometry(element.lastElementChild)
        debugFrame.style.border = "1px dashed #C0FF00"
    } else if (element.getAttribute('class') === "NeuCover") {
        setGeometry(element.lastElementChild)
        debugFrame.style.border = "1px double #F190B7"
    }
    if (element.getAttribute('class') === "NeuLayout") {
        debugFrame.style.border = "2px dotted #A31F34"
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
    let mutationObserver = new MutationObserver(function (mutations) {
        clearDebugFrame()
        mutations.forEach(function (mutation) {
            Object.entries(window.Index.storage).forEach(([key, value]) => {
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
    }
}
