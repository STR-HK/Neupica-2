import { app } from './Blanker.js'

function hover(callback) {
    let cp = app.MaterialButton.data.Button.BackgroundColor

}

export function work () {
    let btns = [
        app.MaterialButton,
        app.CupertinoButton,
        app.StylesNOtherButton,
    ]

    btns.forEach((e) => {
        e.watchEvent('mouseenter', function() {
            e.data.Button.BackgroundColor = '#373143'
        })
        e.watchEvent('mouseleave', function() {
            e.data.Button.BackgroundColor = '#2F293B'
        })
    })

    app.MaterialButton.watchEvent('click', function(e) {
        let arr = []
        let paren = app.MaterialButton.cover.parentElement
        arr.push(paren)
        while (!(Array.from(arr[arr.length - 1].classList).includes('NeuApp'))) {
            paren = paren.parentElement
            arr.push(paren)
        }
        console.log(arr)
    })
}