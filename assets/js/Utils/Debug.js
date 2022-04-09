function attachDebugFrame(element) {
    let debugFrame = document.createElement("div")
    debugFrame.classList.add("debugFrame")
    debugFrame.style.position = "fixed"

    let elementData = element.getBoundingClientRect()
    debugFrame.style.top = elementData.top + "px"
    debugFrame.style.left = elementData.left + "px"
    debugFrame.style.width = elementData.width + "px"
    debugFrame.style.height = elementData.height + "px"
    debugFrame.style.backgroundColor = "rgba(255, 255, 255, 0)"
    debugFrame.style.zIndex = "9999"
    debugFrame.style.border = "2px dotted #F190B7"
    debugFrame.style.pointerEvents = "none"

    document.body.appendChild(debugFrame)
}

function clearDebugFrame() {
    let debugFrame = document.getElementsByClassName("debugFrame")
    Array.from(debugFrame).forEach((element) => {
        element.remove()
    })
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

    // setInterval(function () {
    //     clearDebugFrame()
    //     Object.entries(window.Index.storage).forEach(([key, value]) => {
    //         attachDebugFrame(value)
    //     })
    // }, 50)
}
