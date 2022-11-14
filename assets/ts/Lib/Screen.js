import { NeuApp } from "../Neupica/Core/App.ts"
import { runApp } from "../Neupica/Neupica2.ts"
import { NeuColumn } from "../Layout/NeuColumn.ts"
import { NeuText } from "../Neupica/Components/Native/NeuText.js"
import { NeuImage } from "../Neupica/Components/Native/NeuImage.ts"
import { NeuLabel } from "../Neupica/Components/Widgets/NeuLabel.js"
import { NeuRow } from "../Layout/NeuRow.ts"
import { NeuButton } from "../Neupica/Components/Widgets/NeuButton.js"
import { NeuContainer } from "../Neupica/Components/Native/NeuContainer.ts"
import { Padding } from "../Tool/Padding.js"
import { work } from "./Screen_worker.js"
import { BorderRadius } from "../Tool/BorderRadius.js"
import { NeuInput } from "../Neupica/Components/Native/NeuInput.ts"

class CalcBtn extends NeuButton {
    constructor() {
        super()
        this.geometry.Width = "21vw"

        // console.log(this.data.ButtonText)

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

        this.normal_button = []
        this.operating_button = []

        this.view = new NeuInput()
        this.view.geometry.Width = "100%"
        this.view.geometry.Height = "100%"
        this.view.data.TextAlign = "right"
        this.view.data.FontSize = "2rem"
        // this.view.data.ReadOnly = true

        this.result_cont = new NeuContainer()
        this.result_cont.data.BackgroundColor = "#E9EFFB"
        this.result_cont.data.BorderRadius = new BorderRadius().Bottom("1.5rem")
        this.result_cont.geometry.Width = "100%"
        this.result_cont.geometry.Height = "60vw"
        this.layout.addChild(this.result_cont)

        this.result_cont.addChild(this.view)
        this.result_cont.data.Padding = new Padding().all("1rem")
        this.result_cont.data.AlignItems = "center"

        this.init_row1()
        this.init_row2()
        this.init_row3()
        this.init_row4()
        this.init_row5()

        this.normal_button.forEach((e) => {
            e.button.data.ButtonText.TextColor = "#00132B"
            e.button.data.Button.BackgroundColor = "#F6F7FB"
        })
        this.operating_button.forEach((e) => {
            e.button.data.ButtonText.TextColor = "#00132B"
            e.button.data.Button.BackgroundColor = "#C3E7FF"
        })

        this.debug = new NeuButton()
        this.debug.data.ButtonText.Text = "debug off"
        this.debug.data.ButtonText.FontSize = "4vw"
        this.debug.data.Button.BackgroundColor = "pink"
        this.debug.geometry.Width = "fit-content"
        this.debug.data.ButtonText.TextColor = "black"
        // this.layout.addChild(this.debug)

        this.ios = new NeuButton()
        this.layout.addChild(this.ios)

        this.draw("#App")
    }

    init_row1() {
        this.row1 = new NeuContainer() // AC () % /
        this.row1.data.Symmetric = 'horizontal'
        this.layout.addChild(this.row1)
        this.ac = new CalcBtnCont()
        this.ac.button.data.ButtonText.TextColor = "#04280E"
        this.ac.button.data.Button.BackgroundColor = "#C3EED0"
        this.ac.button.data.ButtonText.Text = "AC"
        this.row1.addChild(this.ac)
        this.brackets = new CalcBtnCont()
        this.operating_button.push(this.brackets)
        this.brackets.button.data.ButtonText.Text = "()"
        this.row1.addChild(this.brackets)
        this.percent = new CalcBtnCont()
        this.operating_button.push(this.percent)
        this.percent.button.data.ButtonText.Text = "%"
        this.row1.addChild(this.percent)
        this.divide = new CalcBtnCont()
        this.operating_button.push(this.divide)
        this.divide.button.data.ButtonText.Text = "÷"
        this.row1.addChild(this.divide)
    }
    init_row2() {
        this.row2 = new NeuContainer() // 7 8 9 X
        this.row2.data.Symmetric = 'horizontal'
        this.layout.addChild(this.row2)
        this.seven = new CalcBtnCont()
        this.normal_button.push(this.seven)
        this.seven.button.data.ButtonText.Text = "7"
        this.row2.addChild(this.seven)
        this.eight = new CalcBtnCont()
        this.normal_button.push(this.eight)
        this.eight.button.data.ButtonText.Text = "8"
        this.row2.addChild(this.eight)
        this.nine = new CalcBtnCont()
        this.normal_button.push(this.nine)
        this.nine.button.data.ButtonText.Text = "9"
        this.row2.addChild(this.nine)
        this.multiply = new CalcBtnCont()
        this.operating_button.push(this.multiply)
        this.multiply.button.data.ButtonText.Text = "x"
        this.row2.addChild(this.multiply)
    }
    init_row3() {
        this.row3 = new NeuContainer() // 4 5 6 -
        this.row3.data.Symmetric = 'horizontal'
        this.layout.addChild(this.row3)
        this.four = new CalcBtnCont()
        this.normal_button.push(this.four)
        this.four.button.data.ButtonText.Text = "4"
        this.row3.addChild(this.four)
        this.five = new CalcBtnCont()
        this.normal_button.push(this.five)
        this.five.button.data.ButtonText.Text = "5"
        this.row3.addChild(this.five)
        this.six = new CalcBtnCont()
        this.normal_button.push(this.six)
        this.six.button.data.ButtonText.Text = "6"
        this.row3.addChild(this.six)
        this.minus = new CalcBtnCont()
        this.operating_button.push(this.minus)
        this.minus.button.data.ButtonText.Text = "-"
        this.row3.addChild(this.minus)
    }
    init_row4() {
        this.row4 = new NeuContainer() // 1 2 3 +
        this.row4.data.Symmetric = 'horizontal'
        this.layout.addChild(this.row4)
        this.one = new CalcBtnCont()
        this.normal_button.push(this.one)
        this.one.button.data.ButtonText.Text = "1"
        this.row4.addChild(this.one)
        this.two = new CalcBtnCont()
        this.normal_button.push(this.two)
        this.two.button.data.ButtonText.Text = "2"
        this.row4.addChild(this.two)
        this.three = new CalcBtnCont()
        this.normal_button.push(this.three)
        this.three.button.data.ButtonText.Text = "3"
        this.row4.addChild(this.three)
        this.plus = new CalcBtnCont()
        this.operating_button.push(this.plus)
        this.plus.button.data.ButtonText.Text = "+"
        this.row4.addChild(this.plus)
    }
    init_row5() {
        this.row5 = new NeuContainer() // 0 . <- =
        this.row5.data.Symmetric = 'horizontal'
        this.layout.addChild(this.row5)
        this.zero = new CalcBtnCont()
        this.normal_button.push(this.zero)
        this.zero.button.data.ButtonText.Text = "0"
        this.row5.addChild(this.zero)
        this.dot = new CalcBtnCont()
        this.normal_button.push(this.dot)
        this.dot.button.data.ButtonText.Text = "."
        this.row5.addChild(this.dot)
        this.backspace = new CalcBtnCont()
        this.normal_button.push(this.backspace)
        this.backspace.button.data.ButtonText.Text = "←"
        this.row5.addChild(this.backspace)
        this.equal = new CalcBtnCont()
        this.equal.button.data.ButtonText.TextColor = "#000F3A"
        this.equal.button.data.Button.BackgroundColor = "#D3E3FD"
        this.equal.button.data.ButtonText.Text = "="
        this.row5.addChild(this.equal)
    }
}

export let app = new Calc()
runApp(app)
work()
//
