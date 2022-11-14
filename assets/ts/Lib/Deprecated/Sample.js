import { NeuColumn } from "../../Layout/NeuColumn.ts"
import { NeuApp } from "../../Neupica/Core/App.ts"
import { NeuText } from "../../Neupica/Components/Native/NeuText.js"
import { NeuLabel } from "../../Neupica/Components/Widgets/NeuLabel.js"

import { runApp } from "../../Neupica/Neupica2.ts"

class Sample extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuColumn()

        this.level1 = new NeuText()
        this.level1.Text = "1단계"
        this.level1.FontSize = "20px"
        this.layout.addChild(this.level1)

        this.level2 = new NeuText()
        this.level2.Text = "2단계"
        this.level2.FontSize = "19px"
        this.layout.addChild(this.level2)

        this.level3 = new NeuText()
        this.level3.Text = "3단계"
        this.level3.FontSize = "18px"
        this.layout.addChild(this.level3)

        this.level4 = new NeuText()
        this.level4.Text = "4단계"
        this.level4.FontSize = "16.5px"
        this.layout.addChild(this.level4)

        this.level5 = new NeuText()
        this.level5.Text = "5단계"
        this.level5.FontSize = "15.5px"
        this.layout.addChild(this.level5)

        this.level6 = new NeuText()
        this.level6.Text = "6단계"
        this.level6.FontSize = "11px"
        this.layout.addChild(this.level6)

        this.blank1 = new NeuText()
        this.blank1.Text = "\n"
        this.layout.addChild(this.blank1)

        this.bold = new NeuText()
        this.bold.Text = "굵게 표시됩니다."
        this.bold.FontWeight = "bold"
        this.layout.addChild(this.bold)

        this.italic = new NeuText()
        this.italic.Text = "이탤릭체 표시됩니다."
        this.italic.FontStyle = "italic"
        this.layout.addChild(this.italic)

        this.blank2 = new NeuText()
        this.blank2.Text = "\n"
        this.layout.addChild(this.blank2)

        this.underline = new NeuText()
        this.underline.Text = "밑줄 표시됩니다."
        this.underline.TextDecorationLine = "underline"
        this.layout.addChild(this.underline)

        this.striketrough = new NeuText()
        this.striketrough.Text = "취소선 표시됩니다."
        this.striketrough.TextDecorationLine = "line-through"
        this.layout.addChild(this.striketrough)

        this.blank3 = new NeuText()
        this.blank3.Text = "\n"
        this.layout.addChild(this.blank3)

        this.superscript = new NeuText()
        this.superscript.Text = "위첨자 표시됩니다."
        this.superscript.VerticalAlign = "super"
        this.superscript.FontSize = "smaller"

        this.text1 = new NeuText()
        this.text1.Text = "ABC 123 あいうえお"
        this.text1.FontSize = "20px"

        this.draw("#App")
    }
}

class Label extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuColumn()

        this.label = new NeuLabel()
        this.label.Cursor = 0
        this.label.Cursor.Text = "E = MC"
        this.label.Cursor.FontSize = "20px"
        this.label.Cursor = 1
        this.label.Cursor.Text = "2"
        this.label.Cursor.FontSize = "smaller"
        this.label.Cursor.VerticalAlign = "super"
        this.layout.addChild(this.label)

        this.draw("#App")
    }
}

runApp(Sample)
runApp(Label)
