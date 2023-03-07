// import { color } from "../../assets/ts/Neupica/Components/M3/Components/Color.js"
import { colorScheme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.ts";
import { NeuApp } from "../../assets/ts/Neupica/Core/App.js";
// import { NeuColumn } from "../../assets/js/Layout/NeuColumn.js"
import { CommonButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/CommonButtons.js";
import { NeuColumn } from "../../assets/ts/Layout/NeuColumn.js";
import { runApp } from "../../assets/ts/Neupica/Neupica2.js";
import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js";
import { TopAppBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/TopAppBars.js";
import { OutlinedButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/OutlinedButton.js";
import { MaterialSymbolsOutlined } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js";
import { IconButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js";
import { Divider } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/Divider.js";
import { NavigationBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js";
class SimpleApp extends NeuApp {
    constructor() {
        super();
        this.layout = new NeuColumn();
        this.title = new NeuContainer();
        this.title.
        ;
    }
}
export class Material3 extends NeuApp {
    constructor() {
        super();
        this.layout = new NeuColumn();
        this.layout.element.style.backgroundColor = colorScheme.background;
        this.setFullScreen(true);
        this.menuIcon = new MaterialSymbolsOutlined('palette');
        this.menuIcon.geometry.Width = '24rem';
        this.menuIcon.data.TextColor = colorScheme.onSurface;
        this.menuIconButton = new IconButton(this.menuIcon);
        this.menuIconButton.geometry.Width = '48rem';
        this.themeModeIcon = new MaterialSymbolsOutlined('light_mode');
        this.themeModeIcon.geometry.Width = '24rem';
        this.themeModeIcon.data.TextColor = colorScheme.onSurfaceVariant;
        this.themeModeIconButton = new IconButton(this.themeModeIcon);
        this.themeModeIconButton.geometry.Width = '48rem';
        this.themeModeIconButton.watchEvent('click', function () {
            if (localStorage.getItem('systemDark') === 'dark') {
                localStorage.setItem('systemDark', 'light');
            }
            else {
                localStorage.setItem('systemDark', 'dark');
            }
            location.reload();
        });
        this.calendarIcon = new MaterialSymbolsOutlined('Colorize');
        this.calendarIcon.geometry.Width = '24rem';
        this.calendarIcon.data.TextColor = colorScheme.onSurfaceVariant;
        this.calendarIconButton = new IconButton(this.calendarIcon);
        this.calendarIconButton.geometry.Width = '48rem';
        this.calendarIconButton.watchEvent('click', function () {
            let cpkr = document.createElement('input');
            cpkr.type = 'color';
            cpkr.click();
            cpkr.addEventListener('input', (e) => {
                localStorage.setItem('themeColor', e.target.value);
                location.reload();
            });
        });
        this.appbar = new TopAppBar('Material 3');
        this.appbar.setLeading(this.menuIconButton);
        this.appbar.addTrailings([
            this.themeModeIconButton,
            this.calendarIconButton
        ]);
        this.layout.addChild(this.appbar);
        this.titleChangeButton = new CommonButton();
        this.titleChangeButton.Text.data.Content = 'Click To Change Title';
        this.layout.addChild(this.titleChangeButton);
        this.div = new Divider();
        this.layout.addChild(this.div);
        this.outlinedButton = new OutlinedButton();
        this.outlinedButton.Text.data.Content = 'Toggle all switches';
        this.layout.addChild(this.outlinedButton);
        this.btm = new NavigationBar();
        this.layout.addChild(this.btm);
        this.btn = new CommonButton();
        this.btm.addChild(this.btn);
        this.sss = [];
        // for (let i = 0; i < 5; i++) {
        //     let s = new NeuContainer()
        //     s.data.Symmetric = 'horizontal'
        //     this.layout.addChild(s)
        //     for (let j = 0; j < 5; j++) {
        //         let tp = new Switch()
        //         this.sss.push(tp)
        //         s.addChild(tp)
        //     }
        // }
        this.setLayout(this.layout);
        this.draw('#App');
    }
}
export let app = new Material3();
runApp(app);
work();
function work() {
    app.titleChangeButton.watchEvent('click', function () {
        let ret = prompt('New Title?');
        if (ret !== null) {
            app.appbar.setHeadline(ret);
        }
    });
    app.outlinedButton.watchEvent('click', function () {
        app.sss.forEach(e => {
            e.Toggle();
        });
    });
}
//# sourceMappingURL=app.js.map