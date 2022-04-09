import { app } from "./Screen.js"

let view = ""

export function work() {
    function foo() {
        console.log(view)
        app.view.data.Text = view
    }
    app.one.watchEvent("click", function () {
        view += "1"
        foo()
    })
    app.two.watchEvent("click", function () {
        view += "2"
        foo()
    })
    app.three.watchEvent("click", function () {
        view += "3"
        foo()
    })
    app.four.watchEvent("click", function () {
        view += "4"
        foo()
    })
    app.five.watchEvent("click", function () {
        view += "5"
        foo()
    })
    app.six.watchEvent("click", function () {
        view += "6"
        foo()
    })
    app.seven.watchEvent("click", function () {
        view += "7"
        foo()
    })
    app.eight.watchEvent("click", function () {
        view += "8"
        foo()
    })
    app.nine.watchEvent("click", function () {
        view += "9"
        foo()
    })
    app.zero.watchEvent("click", function () {
        view += "0"
        foo()
    })

    app.dot.watchEvent("click", function () {
        view += "."
        foo()
    })

    app.plus.watchEvent("click", function () {
        view += "+"
        foo()
    })
    app.minus.watchEvent("click", function () {
        view += "-"
        foo()
    })
    app.multiply.watchEvent("click", function () {
        view += "*"
        foo()
    })
    app.divide.watchEvent("click", function () {
        view += "/"
        foo()
    })

    app.backspace.watchEvent("click", function () {
        view = view.slice(0, -1)
        foo()
    })
    app.ac.watchEvent("click", function () {
        view = ""
        foo()
    })
    let currrent_bracket = "("
    app.brackets.watchEvent("click", function () {
        view += currrent_bracket
        if (currrent_bracket == "(") {
            currrent_bracket = ")"
        } else {
            currrent_bracket = "("
        }
        foo()
    })

    app.equal.watchEvent("click", function () {
        view = eval(view)
        foo()
    })
}

// app.click.watchEvent("click", function () {
//     if (app.click.data.Text == "Click") {
//         app.click.data.Text = "Clicked"
//     } else {
//         app.click.data.Text = "Click"
//     }
// })

// let hover_store

// app.hover.watchEvent("mouseenter", function () {
//     hover_store = app.hover.data.Text
//     app.hover.data.Text = "Hovered"
// })

// app.hover.watchEvent("mouseleave", function () {
//     app.hover.data.Text = hover_store
// })

// app.focus.watchEvents(["pointerdown", "mousedown"], function () {
//     app.focus.data.Text = "Focused"
// })

// app.focus.watchEvents(["pointerup", "mouseup"], function () {
//     app.focus.data.Text = "Focus"
// })
