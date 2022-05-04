import { app } from "./Screen.js"

let view = ""

export function work() {
    function foo() {
        app.view.data.Value = view
    }

    function bar(changer) {
        app.view.data.Value = changer(app.view.data.Value)
    }

    app.one.watchEvent("click", function () {
        bar(function (arg) {
            return arg + "1"
        })
    })
    app.two.watchEvent("click", function () {
        bar(function (arg) {
            return arg + "2"
        })
    })
    app.three.watchEvent("click", function () {
        bar(function (arg) {
            return arg + "3"
        })
    })
    app.four.watchEvent("click", function () {
        bar(function (arg) {
            return arg + "4"
        })
    })
    app.five.watchEvent("click", function () {
        bar(function (arg) {
            return arg + "5"
        })
    })
    app.six.watchEvent("click", function () {
        bar(function (arg) {
            return arg + "6"
        })
    })
    app.seven.watchEvent("click", function () {
        bar(function (arg) {
            return arg + "7"
        })
    })
    app.eight.watchEvent("click", function () {
        bar(function (arg) {
            return arg + "8"
        })
    })
    app.nine.watchEvent("click", function () {
        bar(function (arg) {
            return arg + "9"
        })
    })
    app.zero.watchEvent("click", function () {
        bar(function (arg) {
            return arg + "0"
        })
    })

    app.dot.watchEvent("click", function () {
        bar(function (arg) {
            return arg + "."
        })
    })

    app.plus.watchEvent("click", function () {
        bar(function (arg) {
            return arg + "+"
        })
    })
    app.minus.watchEvent("click", function () {
        bar(function (arg) {
            return arg + "-"
        })
    })
    app.multiply.watchEvent("click", function () {
        bar(function (arg) {
            return arg + "*"
        })
    })
    app.divide.watchEvent("click", function () {
        bar(function (arg) {
            return arg + "/"
        })
    })

    app.backspace.watchEvent("click", function () {
        bar(function (arg) {
            return arg.slice(0, -1)
        })
    })
    app.ac.watchEvent("click", function () {
        bar(function (arg) {
            return ""
        })
    })
    let currrent_bracket = "("
    app.brackets.watchEvent("click", function () {
        bar(function (arg) {
            return arg + currrent_bracket
        })
        currrent_bracket = currrent_bracket == "(" ? ")" : "("
    })

    app.equal.watchEvent("click", function () {
        try {
            bar(function (arg) {
                return eval(arg)
            })
        } catch (e) {
            alert(e)
        }
        // foo()
    })

    app.debug.watchEvent("click", function () {
        if (app.debug.data.ButtonText.Text == "debug off") {
            app.debug.data.ButtonText.Text = "debug on"
            window.debug("#App")
        } else {
            app.debug.data.ButtonText.Text = "debug off"
            window.terminate()
        }
    })
}
