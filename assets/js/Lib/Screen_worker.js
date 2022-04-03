import { app } from "./Screen.js"

app.btn.watchEvent("click", function () {
    // app.btn.data.ButtonText.Text = "CLickced"
    app.btn.data.Button.BackgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16)
})

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
