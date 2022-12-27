import { colorScheme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
import { CommonButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/CommonButton.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { TopAppBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/TopAppBars.js"
import { OutlinedButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/OutlinedButton.js"
import { MaterialSymbolsOutlined } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { IconButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import { Switch } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Selection/Switch.js"
import { Divider } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/Divider.js"
import { NavigationBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import { NavigationBarItem } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import { NeuScaffold } from "../../assets/ts/Layout/NeuScaffold.js"
import { FilledButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/FilledButton.js"
import { TextFields } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/TextInputs/Text Fields/TextFields.js"
import { OutlinedTextField } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/TextInputs/Text Fields/OutlinedTextField.js"
// import { initModal } from "../../assets/ts/Neupica/Core/Modal.js"
import { Snackbar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Communication/Snackbar.js"
import { ProgressIndicators } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Communication/ProgressIndicators/ProgressIndicators.js"
import { Cards } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/Cards/Cards.js"
import { Typography } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Typography.js"
import { NeuImage } from "../../assets/ts/Neupica/Components/Native/NeuImage.js"
import { TextButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/TextButton.js"
import { Padding } from "../../assets/ts/Tool/Padding.js"
import { SegmentedButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/SegmentedButton.js"
import {
    FloatingActionButtons
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/FloatingActionButtons/FloatingActionButtons.js"
import { BasicDialogs } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/Dialogs/BasicDialogs.js"
import { Menu } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Selection/Menu.js"
import { MenuItem } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Selection/Menu.js"
import { MenuDivider } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Selection/Menu.js"
import { initModal } from "../../assets/ts/Neupica/Core/Modal.js"
// import { ro } from "../../assets/ts/Common/Updater.js"
import { resizeObserver } from "../../assets/ts/Common/Updater.js"
import { SmallBadge } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Communication/Badges/SmallBadge.js"

initModal()

export class Material3 extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuScaffold()
        this.layout.data.BackgroundColor = colorScheme.background
        this.setFullScreen(true)

        this.head = this.layout.head
        this.body = this.layout.body
        this.foot = this.layout.foot

        this.menuIcon = new MaterialSymbolsOutlined('specific_gravity')
        this.menuIcon.geometry.Width = '24rem'
        this.menuIcon.data.TextColor = colorScheme.onSurface
        this.menuIconButton = new IconButton(this.menuIcon)
        this.menuIconButton.geometry.Width = '48rem'

        this.themeModeIcon = new MaterialSymbolsOutlined('light_mode')
        this.themeModeIcon.geometry.Width = '24rem'
        this.themeModeIcon.data.TextColor = colorScheme.onSurfaceVariant
        this.themeModeIconButton = new IconButton(this.themeModeIcon)
        this.themeModeIconButton.geometry.Width = '48rem'
        this.themeModeIconButton.watchEvent('click', function(){
            if (localStorage.getItem('systemDark') === 'dark') {
                localStorage.setItem('systemDark', 'light')
            } else {
                localStorage.setItem('systemDark', 'dark')
            }
            location.reload()
        })

        this.calendarIcon = new MaterialSymbolsOutlined('Colorize')
        this.calendarIcon.geometry.Width = '24rem'
        this.calendarIcon.data.TextColor = colorScheme.onSurfaceVariant
        this.calendarIconButton = new IconButton(this.calendarIcon)
        this.calendarIconButton.geometry.Width = '48rem'
        this.calendarIconButton.watchEvent('click', function() {
            let cpkr = document.createElement('input')
            cpkr.type = 'color'
            cpkr.click()
            cpkr.addEventListener('input', (e) => {
                localStorage.setItem('themeColor', e.target.value)
                location.reload()
            })
        })

        this.appbar = new TopAppBar('Material 3')
        this.appbar.setLeading(
            this.menuIconButton
        )
        this.appbar.addTrailings([
            this.themeModeIconButton,
            this.calendarIconButton
        ])
        this.head.addChild(this.appbar)

        this.homeScreen = new NeuContainer()
        this.homeScreen.geometry.Height = '100%'
        this.homeScreen.geometry.Width = '100%'
        this.lavenderScreen = new NeuContainer()
        this.lavenderScreen.geometry.Height = '100%'
        this.lavenderScreen.geometry.Width = '100%'
        this.extraScreen = new NeuContainer()
        this.extraScreen.geometry.Height = '100%'
        this.extraScreen.geometry.Width = '100%'

        let initHomeScreen = function () {
            this.homeScreen.data.AlignItems = 'center'
            this.homeScreen.data.Gap = '4rem'

            this.pr = new ProgressIndicators()
            this.head.addChild(this.pr)

            this.iooper = new NeuContainer()
            this.iooper.data.Symmetric = 'horizontal'
            this.homeScreen.addChild(this.iooper)

            this.titleChangeButton = new CommonButton()
            this.titleChangeButton.data.Text = 'Show Modal'
            this.iooper.addChild(this.titleChangeButton)
            this.titleChangeButton.watchEvent('click', function() {
                this.backlog = new NeuContainer()
                this.backlog.geometry.Width = '100%'
                this.backlog.geometry.Height = '100%'
                this.backlog.data.JustifyContent = 'center'
                this.backlog.data.AlignItems = 'center'
                this.backlog.data.BackgroundColor = 'rgba(0,0,0,0.5)'
                this.backlog.data.Gap = '4rem'
                window.modal.addInteractiveModal(this.backlog)
                this.backlog.watchEvent('click', function() {
                    // window.modal.clearModal()
                })

                this.cm = new CommonButton()
                this.cm.data.Text = 'Modaled Button Demo'
                this.backlog.addChild(this.cm)

                this.ncm = new CommonButton()
                this.ncm.data.Text = 'Modaled Button Demo'
                this.backlog.addChild(this.ncm)

                this.close = new OutlinedButton()
                this.close.data.Text = 'CLOSE'
                this.backlog.addChild(this.close)
                this.close.watchEvent('click', function() {
                    window.modal.removeModal(this)
                    // console.log(window.modal.clearModal)
                }.bind(this.backlog))

            })

            this.snackingButton = new CommonButton()
            this.snackingButton.data.Text = 'SnackingBar OPEN!'
            this.iooper.addChild(this.snackingButton)

            this.snackingButton.watchEvent('click', function() {
                let snackBar = new Snackbar(this.body)
                // this.body.addChild(snackBar)
                window.modal.addModal(snackBar)
                snackBar.Icon.watchEvent('click', function() {
                    window.modal.removeModal(this)
                }.bind(snackBar))
                setTimeout(function() {
                    window.modal.removeModal(snackBar)
                }, 2000)
            }.bind(this))

            this.div = new Divider()
            this.homeScreen.addChild(this.div)

            this.seg = new SegmentedButton()
            this.homeScreen.addChild(this.seg)

            this.outlinedButton = new OutlinedButton()
            this.outlinedButton.data.Text = 'Toggle all switches'
            this.homeScreen.addChild(this.outlinedButton)
            this.outlinedButton.watchEvent('click', function() {
                this.sss.forEach(e => {
                    e.Toggle()
                })
            }.bind(this))

            this.sss = []

            for (let i = 0; i < 1; i++) {
                let s = new NeuContainer()
                s.data.Symmetric = 'horizontal'
                this.homeScreen.addChild(s)
                for (let j = 0; j < 5; j++) {
                    let tp = new Switch()
                    this.sss.push(tp)
                    s.addChild(tp)
                }
            }
            this.hbox = new NeuContainer()
            this.hbox.data.Symmetric = 'horizontal'
            this.homeScreen.addChild(this.hbox)

            this.filledButton = new FilledButton()
            this.filledButton.data.Text = 'Reset Theme Color'
            this.hbox.addChild(this.filledButton)
            this.filledButton.watchEvent('click', function() {
                localStorage.removeItem('themeColor')
            })

            this.Reload = new FilledButton()
            this.Reload.data.Text = 'RELOAD'
            this.hbox.addChild(this.Reload)
            this.Reload.watchEvent('click', function() {
                window.location.reload()
            }.bind(this))

            this.ipt = new TextFields()
            this.ipt.geometry.Width = '240rem'
            this.homeScreen.addChild(this.ipt)

            this.appl = new CommonButton()
            this.appl.data.Text = 'Apply Textfield Text to Title'
            this.appl.watchEvent('click', function() {
                this.appbar.setHeadline(this.ipt.Input.data.Value)
                this.appbar.setHeadline(this.ipt.Input.data.Value)
            }.bind(this))
            this.homeScreen.addChild(this.appl)

            this.menuButton = new OutlinedButton()
            this.menuButton.data.Text = 'OPEN MENU'
            this.menuButton.watchEvent('click', function() {
                // function getOffset( el ) {
                //     var _x = 0;
                //     var _y = 0;
                //     while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
                //         _x += el.offsetLeft - el.scrollLeft;
                //         _y += el.offsetTop - el.scrollTop;
                //         el = el.offsetParent;
                //     }
                //     return { top: _y, left: _x };
                // }

                let menu = new Menu()
                let it1 = new MenuItem()
                let it2 = new MenuItem()
                let it3 = new MenuItem()
                let itd = new MenuDivider()
                let it4 = new MenuItem()
                menu.Container.addChildren([
                    it1, it2, it3, itd, it4
                ])
                // this.homeScreen.addChild(menu)
                window.modal.addInteractiveModal(menu)

                let datum = this.menuButton.getBoundElement().getBoundingClientRect()
                // console.log(datum)
                menu.geometry.Top = datum.top + datum.height + 'px'

                // menu.geometry.Top = getOffset(this.menuButton.getBoundElement()).top + 'px'
                menu.geometry.Left = datum.left + 'px'
                menu.geometry.Position = 'absolute'

                // console.log( menu.Container.children[0])
                menu.children[0].watchEvent('click', function() {
                    setTimeout(function() {
                        window.modal.removeModal(menu)
                        // this.homeScreen.removeChild(menu)
                    }.bind(this), 100)
                }.bind(this))
            }.bind(this))
            this.homeScreen.addChild(this.menuButton)


            this.crd1 = new Cards()
            this.crd1.Button.watchEvent('click', function() {
                window.modal.addInteractiveModal(new BasicDialogs())
            }.bind(this))
            this.homeScreen.addChild(this.crd1)

            this.ipt2 = new OutlinedTextField()
            this.ipt2.geometry.Width = '200rem'
            // this.homeScreen.addChild(this.ipt2)

            this.platFormInfo = new FilledButton()
            this.platFormInfo.data.Text = 'Get PLATFORM Info'
            this.platFormInfo.watchEvent('click', function() {
                function getPlatform() {
                    {
                        var unknown = '-';

                        // screen
                        var screenSize = '';
                        if (screen.width) {
                            let width = (screen.width) ? screen.width : '';
                            let height = (screen.height) ? screen.height : '';
                            screenSize += '' + width + " x " + height;
                        }

                        // browser
                        var nVer = navigator.appVersion;
                        var nAgt = navigator.userAgent;
                        var browser = navigator.appName;
                        var version = '' + parseFloat(navigator.appVersion);
                        var majorVersion = parseInt(navigator.appVersion, 10);
                        var nameOffset, verOffset, ix;

                        // Opera
                        if ((verOffset = nAgt.indexOf('Opera')) != -1) {
                            browser = 'Opera';
                            version = nAgt.substring(verOffset + 6);
                            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                                version = nAgt.substring(verOffset + 8);
                            }
                        }
                        // Opera Next
                        if ((verOffset = nAgt.indexOf('OPR')) != -1) {
                            browser = 'Opera';
                            version = nAgt.substring(verOffset + 4);
                        }
                        // Legacy Edge
                        else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
                            browser = 'Microsoft Legacy Edge';
                            version = nAgt.substring(verOffset + 5);
                        }
                        // Edge (Chromium)
                        else if ((verOffset = nAgt.indexOf('Edg')) != -1) {
                            browser = 'Microsoft Edge';
                            version = nAgt.substring(verOffset + 4);
                        }
                        // MSIE
                        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
                            browser = 'Microsoft Internet Explorer';
                            version = nAgt.substring(verOffset + 5);
                        }
                        // Chrome
                        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
                            browser = 'Chrome';
                            version = nAgt.substring(verOffset + 7);
                        }
                        // Safari
                        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                            browser = 'Safari';
                            version = nAgt.substring(verOffset + 7);
                            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                                version = nAgt.substring(verOffset + 8);
                            }
                        }
                        // Firefox
                        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                            browser = 'Firefox';
                            version = nAgt.substring(verOffset + 8);
                        }
                        // MSIE 11+
                        else if (nAgt.indexOf('Trident/') != -1) {
                            browser = 'Microsoft Internet Explorer';
                            version = nAgt.substring(nAgt.indexOf('rv:') + 3);
                        }
                        // Other browsers
                        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                            browser = nAgt.substring(nameOffset, verOffset);
                            version = nAgt.substring(verOffset + 1);
                            if (browser.toLowerCase() == browser.toUpperCase()) {
                                browser = navigator.appName;
                            }
                        }
                        // trim the version string
                        if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
                        if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
                        if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

                        majorVersion = parseInt('' + version, 10);
                        if (isNaN(majorVersion)) {
                            version = '' + parseFloat(navigator.appVersion);
                            majorVersion = parseInt(navigator.appVersion, 10);
                        }

                        // mobile version
                        var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

                        // cookie
                        var cookieEnabled = (navigator.cookieEnabled) ? true : false;

                        if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
                            document.cookie = 'testcookie';
                            cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
                        }

                        // system
                        var os = unknown;
                        var clientStrings = [
                            {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
                            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
                            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
                            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
                            {s:'Windows Vista', r:/Windows NT 6.0/},
                            {s:'Windows Server 2003', r:/Windows NT 5.2/},
                            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
                            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
                            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
                            {s:'Windows 98', r:/(Windows 98|Win98)/},
                            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
                            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
                            {s:'Windows CE', r:/Windows CE/},
                            {s:'Windows 3.11', r:/Win16/},
                            {s:'Android', r:/Android/},
                            {s:'Open BSD', r:/OpenBSD/},
                            {s:'Sun OS', r:/SunOS/},
                            {s:'Chrome OS', r:/CrOS/},
                            {s:'Linux', r:/(Linux|X11(?!.*CrOS))/},
                            {s:'iOS', r:/(iPhone|iPad|iPod)/},
                            {s:'Mac OS X', r:/Mac OS X/},
                            {s:'Mac OS', r:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
                            {s:'QNX', r:/QNX/},
                            {s:'UNIX', r:/UNIX/},
                            {s:'BeOS', r:/BeOS/},
                            {s:'OS/2', r:/OS\/2/},
                            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
                        ];
                        for (var id in clientStrings) {
                            var cs = clientStrings[id];
                            if (cs.r.test(nAgt)) {
                                os = cs.s;
                                break;
                            }
                        }

                        var osVersion = unknown;

                        if (/Windows/.test(os)) {
                            osVersion = /Windows (.*)/.exec(os)[1];
                            os = 'Windows';
                        }

                        switch (os) {
                            case 'Mac OS':
                            case 'Mac OS X':
                            case 'Android':
                                osVersion = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(nAgt)[1];
                                break;

                            case 'iOS':
                                osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                                osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                                break;
                        }

                        // flash (you'll need to include swfobject)
                        /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
                        var flashVersion = 'no check';
                        if (typeof swfobject != 'undefined') {
                            var fv = swfobject.getFlashPlayerVersion();
                            if (fv.major > 0) {
                                flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
                            }
                            else  {
                                flashVersion = unknown;
                            }
                        }
                    }

                    return {
                        screen: screenSize,
                        browser: browser,
                        browserVersion: version,
                        browserMajorVersion: majorVersion,
                        mobile: mobile,
                        os: os,
                        osVersion: osVersion,
                        cookies: cookieEnabled,
                        flashVersion: flashVersion
                    };
                }

                let jscd = getPlatform(this)
                alert(
                    'OS: ' + jscd.os +' '+ jscd.osVersion + '\n' +
                    'Browser: ' + jscd.browser +' '+ jscd.browserMajorVersion +
                    ' (' + jscd.browserVersion + ')\n' +
                    'Mobile: ' + jscd.mobile + '\n' +
                    'Flash: ' + jscd.flashVersion + '\n' +
                    'Cookies: ' + jscd.cookies + '\n' +
                    'Screen Size: ' + jscd.screen + '\n\n' +
                    'Full User Agent: ' + navigator.userAgent
                );
            })
            this.homeScreen.addChild(this.platFormInfo)

            this.ipt.watchEvent('resize', function(e) {
                console.log(e)
            })

            for (let i =0; i < 100; i++) {
                let v = new NeuContainer()
                v.data.Text = `${i.toString()}| This is temporary container text`
                v.data.FontSize = '12rem'
                v.data.TextColor = colorScheme.onBackground
                this.homeScreen.addChild(v)
            }
        }.bind(this)
        initHomeScreen()

        let initLavenderScreen = function () {
            this.lavenderScreen.data.Symmetric = 'vertical'
            this.lavenderScreen.data.AlignItems = 'center'
            this.lavenderScreen.data.JustifyContent = 'center'

            this.time = new NeuContainer()
            this.time.data.FontSize = Typography.Size.DisplayLarge
            this.time.data.TextColor = colorScheme.onBackground
            this.time.data.FontWeight = 'bold'
            this.time.data.Text = '23:06'
            setInterval(
                function() {
                this.time.data.Text = new Intl.DateTimeFormat(
                    "en",
                    {
                        timeStyle: 'short',
                        hour12: false
                    }
                    ).format(
                        new Date()
                )
            }.bind(this),
                1000
            )
            this.lavenderScreen.addChild(this.time)

            this.today = new NeuContainer()
            this.today.data.Text = 'TODAY IS'
            this.today.data.FontSize = Typography.Size.TitleSmall
            this.today.data.TextColor = colorScheme.onBackground
            this.today.data.FontStyle = 'italic'
            this.lavenderScreen.addChild(this.today)

            this.date = new NeuContainer()
            this.date.data.Text = 'December 1st, 2022'
            this.date.data.FontSize = Typography.Size.TitleSmall
            this.date.data.TextColor = colorScheme.onBackground
            this.lavenderScreen.addChild(this.date)

            this.blank = new NeuContainer()
            this.blank.geometry.Height = '20%'
            this.lavenderScreen.addChild(this.blank)

            this.weatherBox = new NeuContainer()
            this.weatherBox.data.Symmetric = 'horizontal'
            this.weatherBox.data.AlignItems = 'center'
            this.weatherBox.data.Gap = '12rem'
            this.lavenderScreen.addChild(this.weatherBox)

            this.temperature = new NeuContainer()
            this.temperature.data.Text = '-1'
            this.temperature.data.FontSize = Typography.Size.TitleSmall
            this.temperature.data.TextColor = colorScheme.onBackground
            this.weatherBox.addChild(this.temperature)

            this.weatherIcon = new MaterialSymbolsOutlined()
            this.weatherIcon.data.Text = 'air'
            this.weatherIcon.data.FontSize = Typography.Size.DisplayMedium
            this.weatherIcon.data.TextColor = colorScheme.onBackground
            this.weatherBox.addChild(this.weatherIcon)

            this.weather = new NeuContainer()
            this.weather.data.Text = 'CLOUDY'
            this.weather.data.FontSize = Typography.Size.TitleSmall
            this.weather.data.TextColor = colorScheme.onBackground
            this.weatherBox.addChild(this.weather)

        }.bind(this)
        initLavenderScreen()

        let initExtraScreen = function () {
            this.extraScreen.data.AlignItems = 'center'
            // this.extraScreen.geometry.Width = '100%'
            this.extraScreen.data.Padding = new Padding().horizontal('7.5%')
            this.extraScreen.data.Gap = '12rem'

            this.albumImage = new NeuImage()
            this.albumImage.data.Src = 'https://upload.wikimedia.org/wikipedia/en/2/2a/Charlie_Puth_-_Light_Switch.png'
            this.albumImage.geometry.Width = '100%'
            this.albumImage.data.BorderRadius = '12rem'
            this.extraScreen.addChild(this.albumImage)


            this.informationLine = new NeuContainer()
            this.informationLine.data.Symmetric = 'vertical'
            this.informationLine.geometry.Width = '100%'
            this.informationLine.data.Gap = '4rem'
            this.extraScreen.addChild(this.informationLine)

            this.albumTitle = new NeuContainer()
            this.albumTitle.data.Text = 'Light Switch'
            this.albumTitle.data.TextColor = colorScheme.onBackground
            this.albumTitle.data.FontSize = Typography.Size.TitleLarge
            this.informationLine.addChild(this.albumTitle)

            this.albumAuthor = new NeuContainer()
            this.albumAuthor.data.Text = 'Charlie Puth'
            this.albumAuthor.data.TextColor = colorScheme.onBackground
            this.albumAuthor.data.FontSize = Typography.Size.TitleSmall
            this.informationLine.addChild(this.albumAuthor)

            this.toolLine = new NeuContainer()
            this.toolLine.data.Symmetric = 'horizontal'
            this.toolLine.geometry.Width = '100%'
            this.extraScreen.addChild(this.toolLine)

            this.shuffleTool = new TextButton()
            this.shuffleToolIcon = new MaterialSymbolsOutlined()
            this.shuffleToolIcon.data.Text = 'shuffle'
            this.shuffleTool.data.AlignItems = 'center'
            this.shuffleToolIcon.data.FontSize = Typography.Size.TitleMedium
            this.shuffleTool.addChild(this.shuffleToolIcon)
            this.shuffleTool.geometry.AspectRatio = '1'
            this.shuffleTool.geometry.Width = '20%'
            this.toolLine.addChild(this.shuffleTool)

            this.previousTool = new TextButton()
            this.previousToolIcon = new MaterialSymbolsOutlined()
            this.previousToolIcon.data.Text = 'skip_previous'
            this.previousTool.data.AlignItems = 'center'
            this.previousToolIcon.data.FontSize = Typography.Size.TitleMedium
            this.previousTool.addChild(this.previousToolIcon)
            this.previousTool.geometry.AspectRatio = '1'
            this.previousTool.geometry.Width = '20%'
            this.toolLine.addChild(this.previousTool)

            this.pauseTool = new FilledButton()
            this.pauseToolIcon = new MaterialSymbolsOutlined()
            this.pauseToolIcon.data.Text = 'play_arrow'
            this.pauseTool.data.AlignItems = 'center'
            this.pauseToolIcon.data.FontSize = Typography.Size.TitleMedium
            this.pauseTool.addChild(this.pauseToolIcon)
            this.pauseTool.geometry.AspectRatio = '1'
            this.pauseTool.geometry.Width = '20%'
            this.toolLine.addChild(this.pauseTool)

            this.nextTool = new TextButton()
            this.nextToolIcon = new MaterialSymbolsOutlined()
            this.nextToolIcon.data.Text = 'skip_next'
            this.nextTool.data.AlignItems = 'center'
            this.nextToolIcon.data.FontSize = Typography.Size.TitleMedium
            this.nextTool.addChild(this.nextToolIcon)
            this.nextTool.geometry.AspectRatio = '1'
            this.nextTool.geometry.Width = '20%'
            this.toolLine.addChild(this.nextTool)

            this.repeatTool = new TextButton()
            this.repeatToolIcon = new MaterialSymbolsOutlined()
            this.repeatToolIcon.data.Text = 'repeat'
            this.repeatTool.data.AlignItems = 'center'
            this.repeatToolIcon.data.FontSize = Typography.Size.TitleMedium
            this.repeatTool.addChild(this.repeatToolIcon)
            this.repeatTool.geometry.AspectRatio = '1'
            this.repeatTool.geometry.Width = '20%'
            this.toolLine.addChild(this.repeatTool)

            this.repeatTool.watchEvent('click', function( ) {
                prompt('Repeat time? (0~99)')
            }.bind(this))

            this.albumImage.ActivateRipple()


            this.informationLine = new NeuContainer()
        }.bind(this)
        initExtraScreen()

        this.btm = new NavigationBar()
        this.foot.addChild(this.btm)

        this.items = []

        this.navBarItem1 = new NavigationBarItem()
        this.navBarItem1.Icon.data.Text = 'spa'
        this.navBarItem1.Label.data.Text = 'Lavender'
        this.btm.addChild(this.navBarItem1)
        this.navBarItem1.watchEvent('click', function() {
            this.menuIcon.data.Text = 'spa'
            this.appbar.setHeadline('Lavender')
            this.body.clearChildren()
            this.body.addChild(this.lavenderScreen)
        }.bind(this))
        // this.navBarItem1.element.click()

        let badge = new SmallBadge()
        this.addWaitForEvent(function() {
            let badgeInfo = this.navBarItem1.getBoundingClientRect()
            // console.log(badgeInfo)

            // let cnt = new NeuContainer()
            // cnt.geometry.Width = badgeInfo.width + 'px'
            // cnt.geometry.Height = badgeInfo.height + 'px'
            // cnt.geometry.Top = badgeInfo.top + 'px'
            // cnt.geometry.Left = badgeInfo.left + 'px'
            // cnt.data.BackgroundColor = 'red'
            // window.modal.addModal(cnt)

            badge.geometry.Top = badgeInfo.top + badgeInfo.height / 2 - 24 + 'px'
            badge.geometry.Left = badgeInfo.width / 2 + badge.getBoundingClientRect().width+ 'px'
        }.bind(this))
        window.modal.addInteractiveModal(badge)
        // let badgeLayout = window.modal.getLayer(badge)




        this.navBarItem2 = new NavigationBarItem()
        this.navBarItem2.Icon.data.Text = 'token'
        this.navBarItem2.Label.data.Text = 'Home'
        this.btm.addChild(this.navBarItem2)
        this.navBarItem2.watchEvent('click', function() {
            this.menuIcon.data.Text = 'specific_gravity'
            this.appbar.setHeadline('Material 3')
            this.body.clearChildren()
            this.body.addChild(this.homeScreen)
        }.bind(this))
        this.navBarItem2.element.click()


        this.navBarItem3 = new NavigationBarItem()
        this.navBarItem3.Icon.data.Text = 'water_drop'
        this.navBarItem3.Label.data.Text = 'Preference'
        this.btm.addChild(this.navBarItem3)
        this.navBarItem3.watchEvent('click', function() {
            this.menuIcon.data.Text = 'water_drop'
            this.appbar.setHeadline('Water is Dropping')
            this.body.clearChildren()
            this.body.addChild(this.extraScreen)
        }.bind(this))


        this.setLayout(this.layout)

        this.draw('#App')
    }
}

export let app = runApp(new Material3())