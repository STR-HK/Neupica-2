import { NeuApp } from "../Neupica/Core/App.js"
import { runApp } from "../Neupica/Neupica2.js"
import { NeuColumn } from "../Layout/NeuColumn.js"
import { NeuText } from "../Neupica/Components/Native/NeuText.js"
import { NeuImage } from "../Neupica/Components/Native/NeuImage.js"
import { NeuLabel } from "../Neupica/Components/Widgets/NeuLabel.js"
import { NeuRow } from "../Layout/NeuRow.js"
import { NeuButton } from "../Neupica/Components/Widgets/NeuButton.js"
import { NeuContainer } from "../Neupica/Components/Native/NeuContainer.js"
import { Padding } from "../Tool/Padding.js"
import { work } from "./Screen_worker.js"

class CalcBtn extends NeuButton {
    constructor() {
        super()
        this.geometry.Width = "21vw"

        this.data.ButtonText.FontSize = "8vw"
        this.data.ButtonText.FontWeight = "bold"
        this.data.Button.BorderRadius = "100%"
        this.data.Button.AspectRatio = "1"
        this.data.Button.BorderWidth = "0.1rem"
        this.data.Button.AlignItems = "center"
        this.data.Button.JustifyContent = "center"
        this.data.Button.Padding = new Padding().VH("0.5rem", "1.5rem")
    }
}

class CalcBtnCont extends NeuContainer {
    constructor() {
        super()
        this.button = new CalcBtn()
        this.addChild(this.button)

        this.data.Margin = "2vw"
    }
}

class Calc extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuColumn()

        this.view = new NeuText()
        this.view.geometry.Width = "100%"
        this.layout.addChild(this.view)

        this.row1 = new NeuRow() // AC () % /
        this.layout.addChild(this.row1)

        this.ac = new CalcBtnCont()
        this.ac.button.data.ButtonText.TextColor = "#04280E"
        this.ac.button.data.Button.BackgroundColor = "#C3EED0"
        this.ac.button.data.ButtonText.Text = "AC"
        this.row1.addChild(this.ac)

        this.brackets = new CalcBtnCont()
        this.brackets.button.data.ButtonText.TextColor = "#00132B"
        this.brackets.button.data.Button.BackgroundColor = "#C3E7FF"
        this.brackets.button.data.ButtonText.Text = "()"
        this.row1.addChild(this.brackets)

        this.percent = new CalcBtnCont()
        this.percent.button.data.ButtonText.TextColor = "#00132B"
        this.percent.button.data.Button.BackgroundColor = "#C3E7FF"
        this.percent.button.data.ButtonText.Text = "%"
        this.row1.addChild(this.percent)

        this.divide = new CalcBtnCont()
        this.divide.button.data.ButtonText.TextColor = "#00132B"
        this.divide.button.data.Button.BackgroundColor = "#C3E7FF"
        this.divide.button.data.ButtonText.Text = "÷"
        this.row1.addChild(this.divide)

        this.row2 = new NeuRow() // 7 8 9 X
        this.layout.addChild(this.row2)

        this.seven = new CalcBtnCont()
        this.seven.button.data.ButtonText.TextColor = "#000000"
        this.seven.button.data.Button.BackgroundColor = "#F6F7FB"
        this.seven.button.data.ButtonText.Text = "7"
        this.row2.addChild(this.seven)

        this.eight = new CalcBtnCont()
        this.eight.button.data.ButtonText.TextColor = "#000000"
        this.eight.button.data.Button.BackgroundColor = "#F6F7FB"
        this.eight.button.data.ButtonText.Text = "8"
        this.row2.addChild(this.eight)

        this.nine = new CalcBtnCont()
        this.nine.button.data.ButtonText.TextColor = "#000000"
        this.nine.button.data.Button.BackgroundColor = "#F6F7FB"
        this.nine.button.data.ButtonText.Text = "9"
        this.row2.addChild(this.nine)

        this.multiply = new CalcBtnCont()
        this.multiply.button.data.ButtonText.TextColor = "#00132B"
        this.multiply.button.data.Button.BackgroundColor = "#C3E7FF"
        this.multiply.button.data.ButtonText.Text = "x"
        this.row2.addChild(this.multiply)

        this.row3 = new NeuRow() // 4 5 6 -
        this.layout.addChild(this.row3)

        this.four = new CalcBtnCont()
        this.four.button.data.ButtonText.TextColor = "#000000"
        this.four.button.data.Button.BackgroundColor = "#F6F7FB"
        this.four.button.data.ButtonText.Text = "4"
        this.row3.addChild(this.four)

        this.five = new CalcBtnCont()
        this.five.button.data.ButtonText.TextColor = "#000000"
        this.five.button.data.Button.BackgroundColor = "#F6F7FB"
        this.five.button.data.ButtonText.Text = "5"
        this.row3.addChild(this.five)

        this.six = new CalcBtnCont()
        this.six.button.data.ButtonText.TextColor = "#000000"
        this.six.button.data.Button.BackgroundColor = "#F6F7FB"
        this.six.button.data.ButtonText.Text = "6"
        this.row3.addChild(this.six)

        this.minus = new CalcBtnCont()
        this.minus.button.data.ButtonText.TextColor = "#00132B"
        this.minus.button.data.Button.BackgroundColor = "#C3E7FF"
        this.minus.button.data.ButtonText.Text = "-"
        this.row3.addChild(this.minus)

        this.row4 = new NeuRow() // 1 2 3 +
        this.layout.addChild(this.row4)

        this.one = new CalcBtnCont()
        this.one.button.data.ButtonText.TextColor = "#000000"
        this.one.button.data.Button.BackgroundColor = "#F6F7FB"
        this.one.button.data.ButtonText.Text = "1"
        this.row4.addChild(this.one)

        this.two = new CalcBtnCont()
        this.two.button.data.ButtonText.TextColor = "#000000"
        this.two.button.data.Button.BackgroundColor = "#F6F7FB"
        this.two.button.data.ButtonText.Text = "2"
        this.row4.addChild(this.two)

        this.three = new CalcBtnCont()
        this.three.button.data.ButtonText.TextColor = "#000000"
        this.three.button.data.Button.BackgroundColor = "#F6F7FB"
        this.three.button.data.ButtonText.Text = "3"
        this.row4.addChild(this.three)

        this.plus = new CalcBtnCont()
        this.plus.button.data.ButtonText.TextColor = "#00132B"
        this.plus.button.data.Button.BackgroundColor = "#C3E7FF"
        this.plus.button.data.ButtonText.Text = "+"
        this.row4.addChild(this.plus)

        this.row5 = new NeuRow() // 0 . <- =
        this.layout.addChild(this.row5)

        this.zero = new CalcBtnCont()
        this.zero.button.data.ButtonText.TextColor = "#00132B"
        this.zero.button.data.Button.BackgroundColor = "#F6F7FB"
        this.zero.button.data.ButtonText.Text = "0"
        this.row5.addChild(this.zero)

        this.dot = new CalcBtnCont()
        this.dot.button.data.ButtonText.TextColor = "#00132B"
        this.dot.button.data.Button.BackgroundColor = "#F6F7FB"
        this.dot.button.data.ButtonText.Text = "."
        this.row5.addChild(this.dot)

        this.backspace = new CalcBtnCont()
        this.backspace.button.data.ButtonText.TextColor = "#00132B"
        this.backspace.button.data.Button.BackgroundColor = "#F6F7FB"
        this.backspace.button.data.ButtonText.Text = "←"
        this.row5.addChild(this.backspace)

        this.equal = new CalcBtnCont()
        this.equal.button.data.ButtonText.TextColor = "#000F3A"
        this.equal.button.data.Button.BackgroundColor = "#D3E3FD"
        this.equal.button.data.ButtonText.Text = "="
        this.row5.addChild(this.equal)

        this.draw("#App")
    }
}

export let app = new Calc()
// export let app = runApp(Calc)
work()
