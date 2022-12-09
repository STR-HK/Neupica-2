var style = document.createElement('style')
style.type = 'text/css'
style.innerHTML =
`
* {
    box-sizing: border-box;
    position: relative;

    -webkit-user-select: none;
    user-select: none;
}

.NeuCover {
    display: contents;
    -webkit-tap-highlight-color: transparent;
}
`
document.head.appendChild(style)

document.body.style.width = '100%'
document.body.style.height = '100%'

document.body.style.margin = 0
document.body.style.padding = 0

// For Material Module
document.body.style.fontSize = '1px'

