import { runApp } from "../Neupica/Neupica2.js";
import { NeuMainWindow } from "../Neupica/NeuCore.js";
import { NeuButton, NeuButtonToggle, NeuToggleButton } from "../Neupica/NeuWidgets.js";
import { NeuLayout } from "../Neupica/NeuLayout.js";
// import {  } from "../Neupica/widgets/NeuToggleButton.js"
class Stora extends NeuMainWindow {
    constructor() {
        super();
        this.layout = new NeuLayout();
        // this.topAppBar = new NeuAppBar()
        //     this.topAppBar.setText('Stora Web Application')
        //     this.topAppBar.setLead(this.Icons.ac_unit)
        //     this.topAppBar.setLeadColor('white')
        // this.layout.addChild(this.topAppBar)
        this.defaultButton = new NeuButton();
        this.defaultButton.Text = 'Default Button';
        this.layout.addChild(this.defaultButton);
        this.alpha = new NeuButton();
        this.alpha.Text = 'Download';
        this.alpha.BackgroundColor = this.Colors.Transparent;
        this.alpha.StrokeColor = '#C34351';
        this.alpha.StrokeWidth = '2px';
        this.alpha.Color = 'black';
        this.alpha.Icon = this.Icons.file_download;
        this.alpha.IconColor = '#C34351';
        this.alpha.IconTop = true;
        this.layout.addChild(this.alpha);
        // this.ipt = new NeuInput()
        // this.layout.addChild(this.ipt)
        this.beta = new NeuButton();
        this.beta.Text = 'Store';
        this.beta.BackgroundColor = this.Colors.Transparent;
        this.beta.StrokeColor = this.Colors.LightGray;
        this.beta.StrokeWidth = '1px';
        this.beta.Padding = '10px';
        this.beta.Color = this.Colors.Main;
        this.layout.addChild(this.beta);
        this.lover = new NeuButton();
        this.lover.Icon = this.Icons.favorite;
        this.lover.IconColor = this.Colors.White;
        this.lover.BackgroundColor = '#FF3057';
        this.lover.IconTop = true;
        this.lover.Color = this.Colors.Transparent;
        this.layout.addChild(this.lover);
        this.ios = new NeuButton();
        this.ios.Text = 'IOS Style Button';
        this.ios.Icon = this.Icons.code;
        this.ios.IconColor = this.Colors.White;
        this.ios.BackgroundColor = '#007AFF';
        this.ios.IconTop = true;
        this.ios.Color = this.Colors.White;
        this.ios.StrokeRadius = '10px';
        this.layout.addChild(this.ios);
        this.draw(this.layout);
        console.log('drawing finished');
    }
}
class ButtonsMainDemoFragment extends NeuMainWindow {
    constructor() {
        super();
        this.layout = new NeuLayout();
        let primary_color = '#C34351';
        this.elevated_button = new NeuButton();
        this.elevated_button.Text = 'ENABLED';
        this.elevated_button.Color = this.Colors.White;
        this.elevated_button.BackgroundColor = primary_color;
        this.layout.addChild(this.elevated_button);
        this.unelevated_button = new NeuButton();
        this.unelevated_button.Text = 'ENABLED';
        this.unelevated_button.Color = this.Colors.White;
        this.unelevated_button.BackgroundColor = primary_color;
        this.layout.addChild(this.unelevated_button);
        this.icon_button = new NeuButton();
        this.icon_button.Text = 'ENABLED';
        this.icon_button.Color = this.Colors.White;
        this.icon_button.BackgroundColor = primary_color;
        this.icon_button.Icon = this.Icons.favorite;
        this.icon_button.IconColor = this.Colors.White;
        this.layout.addChild(this.icon_button);
        this.text_button = new NeuButton();
        this.text_button.Text = 'ENABLED';
        this.text_button.Color = primary_color;
        this.text_button.BackgroundColor = this.Colors.Transparent;
        this.layout.addChild(this.text_button);
        this.icon_text_button = new NeuButton();
        this.icon_text_button.Text = 'ENABLED';
        this.icon_text_button.Color = primary_color;
        this.icon_text_button.BackgroundColor = this.Colors.Transparent;
        this.icon_text_button.Icon = this.Icons.favorite;
        this.icon_text_button.IconColor = primary_color;
        this.layout.addChild(this.icon_text_button);
        this.outlined_button = new NeuButton();
        this.outlined_button.Text = 'ENABLED';
        this.outlined_button.Color = primary_color;
        this.outlined_button.BackgroundColor = this.Colors.Transparent;
        this.outlined_button.StrokeColor = this.Colors.LightGray;
        this.outlined_button.StrokeWidth = '1px';
        this.layout.addChild(this.outlined_button);
        this.icon_only_button = new NeuButton();
        this.icon_only_button.Icon = this.Icons.favorite;
        this.icon_only_button.IconColor = primary_color;
        this.icon_only_button.BackgroundColor = this.Colors.Transparent;
        this.icon_only_button.StrokeColor = this.Colors.LightGray;
        this.icon_only_button.StrokeWidth = '1px';
        this.layout.addChild(this.icon_only_button);
        this.top_icon_button = new NeuButton();
        this.top_icon_button.Text = 'ENABLED';
        this.top_icon_button.Color = primary_color;
        this.top_icon_button.Icon = this.Icons.favorite;
        this.top_icon_button.IconColor = primary_color;
        this.top_icon_button.BackgroundColor = this.Colors.Transparent;
        this.top_icon_button.StrokeColor = this.Colors.LightGray;
        this.top_icon_button.StrokeWidth = '1px';
        this.top_icon_button.IconTop = true;
        this.layout.addChild(this.top_icon_button);
        this.draw(this.layout);
    }
}
class ButtonToggleGroupDemoFragment extends NeuMainWindow {
    constructor() {
        super();
        this.layout = new NeuLayout();
        let primary_color = '#C34351';
        this.neupicaBtn = new NeuButton();
        this.neupicaBtn.Icon = './assets/icon/icon.svg';
        this.neupicaBtn.IconSize = '50px';
        this.neupicaBtn.IconTop = true;
        this.neupicaBtn.Text = 'Neupica-2 Button';
        this.neupicaBtn.Color = this.Colors.Black;
        this.neupicaBtn.BackgroundColor = this.Colors.White;
        this.neupicaBtn.StrokeColor = this.Colors.LightGray;
        this.neupicaBtn.StrokeWidth = '1px';
        this.layout.addChild(this.neupicaBtn);
        this.toggle_group = new NeuButtonToggle();
        this.toggle_group.Orientation = 'horizontal';
        this.toggle1 = new NeuToggleButton();
        this.toggle1.Text = 'ITEM 1';
        this.toggle_group.addChild(this.toggle1);
        this.toggle2 = new NeuToggleButton();
        this.toggle2.Text = 'ITEM 2';
        this.toggle_group.addChild(this.toggle2);
        this.toggle3 = new NeuToggleButton();
        this.toggle3.Text = 'ITEM 3';
        this.toggle_group.addChild(this.toggle3);
        this.toggle4 = new NeuToggleButton();
        this.toggle4.Text = 'ITEM 4';
        this.toggle_group.addChild(this.toggle4);
        this.toggle5 = new NeuToggleButton();
        this.toggle5.Text = 'ITEM 5';
        this.toggle_group.addChild(this.toggle5);
        // this.toggle_group.Orientation = 'horizontal'
        // this.layout.addChild(this.toggle_group)
        this.draw(this.layout);
    }
}
class Buttons extends NeuMainWindow {
    constructor() {
        super();
        this.layout = new NeuLayout();
        let primary_color = '#C34351';
        //for (let i = 0; i < 50; i++) {
        //    let button = new NeuButton()
        //        button.Text = 'TEST BUTTON'
        //    this.layout.addChild(button)
        //}
        this.testBtn1 = new NeuButton();
        this.testBtn1.Text = 'Neupica-2 Button';
        this.layout.addChild(this.testBtn1);
        //this.toggle_group.Orientation = 'horizontal'
        this.layout.addChild(this.toggle_group);
        this.draw(this.layout);
    }
}
runApp(ButtonToggleGroupDemoFragment);
// runApp(Stora)
//# sourceMappingURL=main.js.map