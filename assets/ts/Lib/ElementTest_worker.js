import { app} from "./ElementTest.js"


export function work() {

    let btn = app.button
    let ipt = app.input
    let txt = app.text

    btn.watchEvent('click', function() {
        location.reload()
    })

    ipt.watchEvent('input', function() {
        txt.Text.data.Content = ipt.data.Value
    })

    setInterval(function() {
        txt.data.TextColor = '#' + Math.floor(Math.random()*16777215).toString(16)

    }, 5000)

    let ct = 0
    setInterval(function() {
        if (ct <= 2) {
            app.label.data.CursorPos = ct
            app.label.data.Cursor.data.TextColor = '#' + Math.floor(Math.random()*16777215).toString(16)
            ct += 1
        } else {
            ct = 0
        }
    }, 100)
}