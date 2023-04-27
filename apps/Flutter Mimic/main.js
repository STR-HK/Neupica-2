import { NeuCalc } from "../../assets/ts/Layout/NeuCalc.js"
import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import {
    CommonButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/CommonButton.js"
import { NeuScaffold } from "../../assets/ts/Layout/NeuScaffold.js"
import { TopAppBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/TopAppBars.js"
import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import {
    NavigationBar
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import {
    NavigationBarItem
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import {
    IconButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import { Icon } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { MaterialSymbolsRounded } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { themeColor } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { setTheme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { colorScheme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { Box } from "../../assets/ts/Tool/Box.js"
import {
    ElevatedButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/ElevatedButton.js"
import {
    FilledButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/FilledButton.js"
import { MaterialText } from "../../assets/ts/Neupica/Components/Native/MaterialText.js"
import { Typography } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Typography.js"
import {
    FilledTonalButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/FilledTonalButton.js"
import {
    OutlinedButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/OutlinedButton.js"
import {
    TextButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/TextButton.js"
import {
    FloatingActionButtons
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/FloatingActionButtons/FloatingActionButtons.js"
import {
    ExtendedFAB
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/FloatingActionButtons/ExtendedFAB.js"
import { setStorageDark } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { rerenderThemedElements } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { toogleDarkMode } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { theme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { transit } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Motion/Transition.js"
// import { MaterialSymbolsRounded } from "../../assets/ts/Utils/MaterialSymbol.js"

// setTheme('#6750a4')
setTheme("#b05454")

export class Mathmatica extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuScaffold()
        this.setFullScreen(true)

        this.appBar = new TopAppBar()
        this.appBar.setHeadline('Material 3')
        this.appBarDarkModeIconButton = new IconButton(new MaterialSymbolsRounded('light_mode'))
        this.appBarDarkModeIconButton.watchEvent('click', function() {
            toogleDarkMode()
        }.bind(this))
        this.appBarMaterialVersionIconButton = new IconButton(new MaterialSymbolsRounded('filter_3'))
        this.appBarColorPaletteIconButton = new IconButton(new MaterialSymbolsRounded('palette'))
        this.appBarColorPaletteIconButton.watchEvent('click', function() {
            try {
                setTheme('#' + Math.floor(Math.random()*16777215).toString(16))
            } catch (e) {
            }
        }.bind(this))
        this.appBar.addTrailings([
            this.appBarDarkModeIconButton,
            this.appBarColorPaletteIconButton,
            this.appBarMaterialVersionIconButton,

        ])
        this.layout.head.setAppBar(this.appBar)

        class CategoryContainer extends NeuContainer {
            constructor() {
                super()

                this.data.AlignItems = 'center'
                this.data.JustifyContent = 'center'
                this.data.BorderRadius = '8rem'
                this.data.BackgroundColor = colorScheme.inverseOnSurface
                this.data.Padding = new Box().vertical('32rem')
                this.data.Gap = '2em'
            }

            reRender() {
                super.reRender()

                transit(this, {
                    'background': colorScheme.inverseOnSurface
                })
                // this.data.BackgroundColor = colorScheme.inverseOnSurface
            }
        }
        class PreviewContainer extends NeuContainer {
            constructor() {
                super()

                this.data.BackgroundColor = colorScheme.background
                this.data.BorderRadius = '8rem'
                this.data.Padding = new Box().vertical('18rem')
                this.data.Border = '1px solid ' + colorScheme.outlineVariant
                this.geometry.MinWidth = '375px'
                this.geometry.Width = '98%'
                this.geometry.MaxWidth = '450px'
                this.data.AlignItems = 'center'
                this.data.JustifyContent = 'center'
            }
            reRender() {
                super.reRender()
                transit(this, {
                    'background': colorScheme.background,
                    'borderWidth': '1px',
                    'borderStyle': 'solid',
                    'borderColor': colorScheme.outlineVariant
                })
                // this.data.BackgroundColor = colorScheme.background
                // this.data.Border = '1px solid ' + colorScheme.outlineVariant
            }
        }
        class CategoryTitle extends MaterialText {
            constructor() {
                super()

                this.data.FontSize = Typography.Size.TitleLarge
                // this.data.Padding = new Box().bottom('12rem')

            }
        }
        class WidgetTitle extends MaterialText {
            constructor() {
                super()

                this.data.FontSize = Typography.Size.TitleSmall
                this.data.Padding = new Box().top('18rem')

            }
        }

        this.ComponentsTab = new NeuContainer()

        this.CategoryActionsContainer = new CategoryContainer()
        this.CategoryActionsContainerTitle = new CategoryTitle()
        this.CategoryActionsContainerTitle.data.Content = 'Actions'

        this.WidgetCommonButtonsContainer = new PreviewContainer()
        this.WidgetCommonButtonsContainer.data.Gap = '8rem'
        this.WidgetCommonButtonsContainerTitle = new WidgetTitle()
        this.WidgetCommonButtonsContainerTitle.data.Content = 'Common buttons'

        this.ElevatedButtons = new NeuContainer()
        this.ElevatedButtons.data.Symmetric = 'horizontal'
        this.ElevatedButtons.data.Gap = '12rem'
        this.ElevatedButton = new ElevatedButton()
        this.ElevatedButton.geometry.MinWidth = '112px'
        this.ElevatedButton.geometry.Width = 'fit-content'
        this.ElevatedButton.Text.data.Content = 'Elevated'
        this.ElevatedIconButton = new ElevatedButton()
        this.ElevatedIconButton.geometry.MinWidth = '112px'
        this.ElevatedIconButton.Leading.addChild(new MaterialSymbolsRounded('add'))
        this.ElevatedIconButton.Text.data.Content = 'Icon'
        this.ElevatedDisabledButton = new ElevatedButton()
        this.ElevatedDisabledButton.geometry.MinWidth = '112px'
        this.ElevatedDisabledButton.geometry.Width = 'fit-content'
        this.ElevatedDisabledButton.Text.data.Content = 'Elevated'
        this.ElevatedDisabledButton.Disable()

        this.FilledButtons = new NeuContainer()
        this.FilledButtons.data.Symmetric = 'horizontal'
        this.FilledButtons.data.Gap = '12rem'
        this.FilledButton = new FilledButton()
        this.FilledButton.geometry.MinWidth = '112px'
        this.FilledButton.geometry.Width = 'fit-content'
        this.FilledButton.Text.data.Content = 'Filled'
        this.FilledIconButton = new FilledButton()
        this.FilledIconButton.geometry.MinWidth = '112px'
        this.FilledIconButton.Leading.addChild(new MaterialSymbolsRounded('add'))
        this.FilledIconButton.Text.data.Content = 'Icon'
        this.FilledDisabledButton = new FilledButton()
        this.FilledDisabledButton.geometry.MinWidth = '112px'
        this.FilledDisabledButton.geometry.Width = 'fit-content'
        this.FilledDisabledButton.Text.data.Content = 'Filled'
        this.FilledDisabledButton.Disable()

        this.FilledTonalButtons = new NeuContainer()
        this.FilledTonalButtons.data.Symmetric = 'horizontal'
        this.FilledTonalButtons.data.Gap = '12rem'
        this.FilledTonalButton = new FilledTonalButton()
        this.FilledTonalButton.geometry.MinWidth = '112px'
        this.FilledTonalButton.geometry.Width = 'fit-content'
        this.FilledTonalButton.Text.data.Content = 'Filled tonal'
        this.FilledTonalIconButton = new FilledTonalButton()
        this.FilledTonalIconButton.geometry.MinWidth = '112px'
        this.FilledTonalIconButton.Leading.addChild(new MaterialSymbolsRounded('add'))
        this.FilledTonalIconButton.Text.data.Content = 'Icon'
        this.FilledTonalDisabledButton = new FilledTonalButton()
        this.FilledTonalDisabledButton.geometry.MinWidth = '112px'
        this.FilledTonalDisabledButton.geometry.Width = 'fit-content'
        this.FilledTonalDisabledButton.Text.data.Content = 'Filled tonal'
        this.FilledTonalDisabledButton.Disable()

        this.OutlinedButtons = new NeuContainer()
        this.OutlinedButtons.data.Symmetric = 'horizontal'
        this.OutlinedButtons.data.Gap = '12rem'
        this.OutlinedButton = new OutlinedButton()
        this.OutlinedButton.geometry.MinWidth = '112px'
        this.OutlinedButton.geometry.Width = 'fit-content'
        this.OutlinedButton.Text.data.Content = 'Outlined'
        this.OutlinedIconButton = new OutlinedButton()
        this.OutlinedIconButton.geometry.MinWidth = '112px'
        this.OutlinedIconButton.Leading.addChild(new MaterialSymbolsRounded('add'))
        this.OutlinedIconButton.Text.data.Content = 'Icon'
        this.OutlinedDisabledButton = new OutlinedButton()
        this.OutlinedDisabledButton.geometry.MinWidth = '112px'
        this.OutlinedDisabledButton.geometry.Width = 'fit-content'
        this.OutlinedDisabledButton.Text.data.Content = 'Outlined'
        this.OutlinedDisabledButton.Disable()

        this.TextButtons = new NeuContainer()
        this.TextButtons.data.Symmetric = 'horizontal'
        this.TextButtons.data.Gap = '12rem'
        this.TextButton = new TextButton()
        this.TextButton.geometry.MinWidth = '112px'
        this.TextButton.geometry.Width = 'fit-content'
        this.TextButton.Text.data.Content = 'Text'
        this.TextIconButton = new TextButton()
        this.TextIconButton.geometry.MinWidth = '112px'
        this.TextIconButton.Leading.addChild(new MaterialSymbolsRounded('add'))
        this.TextIconButton.Text.data.Content = 'Icon'
        this.TextDisabledButton = new TextButton()
        this.TextDisabledButton.geometry.MinWidth = '112px'
        this.TextDisabledButton.geometry.Width = 'fit-content'
        this.TextDisabledButton.Text.data.Content = 'Text'
        this.TextDisabledButton.Disable()

        this.WidgetFloatingActionButtonsContainer = new PreviewContainer()
        this.WidgetFloatingActionButtonsContainer.data.Gap = '8rem'
        this.WidgetFloatingActionButtonsContainer.data.Symmetric = 'horizontal'
        this.WidgetFloatingActionButtonsContainerTitle = new WidgetTitle()
        this.WidgetFloatingActionButtonsContainerTitle.data.Content = 'Floating action buttons'

        this.ExtendedFAB = new ExtendedFAB()
        this.ExtendedFAB.Icon.data.Content = 'add'
        this.ExtendedFAB.LabelText.data.Content = 'Create'

        this.StandardFAB = new FloatingActionButtons()
        this.StandardFAB.Icon.data.Content = 'add'

        this.layout.body.data.BackgroundColor = colorScheme.background
        this.layout.body.reRender = function() {
            // this.layout.body.data.BackgroundColor = colorScheme.background
            transit(this.layout.body, {
                'background': colorScheme.background
            })

        }.bind(this)
        this.ComponentsTab.addChildren([
            this.CategoryActionsContainer.addChildren([
                this.CategoryActionsContainerTitle,
                this.WidgetCommonButtonsContainerTitle,
                this.WidgetCommonButtonsContainer.addChildren([
                    this.ElevatedButtons.addChildren([
                        this.ElevatedButton,
                        this.ElevatedIconButton,
                        this.ElevatedDisabledButton
                    ]),
                    this.FilledButtons.addChildren([
                        this.FilledButton,
                        this.FilledIconButton,
                        this.FilledDisabledButton
                    ]),
                    this.FilledTonalButtons.addChildren([
                        this.FilledTonalButton,
                        this.FilledTonalIconButton,
                        this.FilledTonalDisabledButton
                    ]),
                    this.OutlinedButtons.addChildren([
                        this.OutlinedButton,
                        this.OutlinedIconButton,
                        this.OutlinedDisabledButton
                    ]),
                    this.TextButtons.addChildren([
                        this.TextButton,
                        this.TextIconButton,
                        this.TextDisabledButton
                    ])
                ]),
                this.WidgetFloatingActionButtonsContainerTitle,
                this.WidgetFloatingActionButtonsContainer.addChildren([
                    this.ExtendedFAB,
                    this.StandardFAB
                ])
            ])
        ])

        this.TypographyTab = new NeuContainer()
        this.TypographyTab.data.Padding = new Box().all('8px')
        this.TypographyTab.data.Gap = '12px'

        this.TypoDisplayLarge = new MaterialText()
        this.TypoDisplayLarge.data.FontSize = Typography.Size.DisplayLarge
        this.TypoDisplayLarge.data.Content = 'Display Large'
        this.TypoDisplayMedium = new MaterialText()
        this.TypoDisplayMedium.data.FontSize = Typography.Size.DisplayMedium
        this.TypoDisplayMedium.data.Content = 'Display Medium'
        this.TypoDisplaySmall = new MaterialText()
        this.TypoDisplaySmall.data.FontSize = Typography.Size.DisplaySmall
        this.TypoDisplaySmall.data.Content = 'Display Small'
        this.TypoHeadlineLarge = new MaterialText()
        this.TypoHeadlineLarge.data.FontSize = Typography.Size.HeadlineLarge
        this.TypoHeadlineLarge.data.Content = 'Headline Large'
        this.TypoHeadlineMedium = new MaterialText()
        this.TypoHeadlineMedium.data.FontSize = Typography.Size.HeadlineMedium
        this.TypoHeadlineMedium.data.Content = 'Headline Medium'
        this.TypoHeadlineSmall = new MaterialText()
        this.TypoHeadlineSmall.data.FontSize = Typography.Size.HeadlineSmall
        this.TypoHeadlineSmall.data.Content = 'Headline Small'
        this.TypoTitleLarge = new MaterialText()
        this.TypoTitleLarge.data.FontSize = Typography.Size.TitleLarge
        this.TypoTitleLarge.data.Content = 'Title Large'
        this.TypoTitleMedium = new MaterialText()
        this.TypoTitleMedium.data.FontSize = Typography.Size.TitleMedium
        this.TypoTitleMedium.data.Content = 'Title Medium'
        this.TypoTitleSmall = new MaterialText()
        this.TypoTitleSmall.data.FontSize = Typography.Size.TitleSmall
        this.TypoTitleSmall.data.Content = 'Title Small'
        this.TypoLabelLarge = new MaterialText()
        this.TypoLabelLarge.data.FontSize = Typography.Size.LabelLarge
        this.TypoLabelLarge.data.Content = 'Label Large'
        this.TypoLabelMedium = new MaterialText()
        this.TypoLabelMedium.data.FontSize = Typography.Size.LabelMedium
        this.TypoLabelMedium.data.Content = 'Label Medium'
        this.TypoLabelSmall = new MaterialText()
        this.TypoLabelSmall.data.FontSize = Typography.Size.LabelSmall
        this.TypoLabelSmall.data.Content = 'Label Small'
        this.TypoBodyLarge = new MaterialText()
        this.TypoBodyLarge.data.FontSize = Typography.Size.BodyLarge
        this.TypoBodyLarge.data.Content = 'Body Large'
        this.TypoBodyMedium = new MaterialText()
        this.TypoBodyMedium.data.FontSize = Typography.Size.BodyMedium
        this.TypoBodyMedium.data.Content = 'Body Medium'
        this.TypoBodySmall = new MaterialText()
        this.TypoBodySmall.data.FontSize = Typography.Size.BodySmall
        this.TypoBodySmall.data.Content = 'Body Small'
        
        this.TypographyTab.addChildren([
            this.TypoDisplayLarge,
            this.TypoDisplayMedium,
            this.TypoDisplaySmall,
            this.TypoHeadlineLarge,
            this.TypoHeadlineMedium,
            this.TypoHeadlineSmall,
            this.TypoTitleLarge,
            this.TypoTitleMedium,
            this.TypoTitleSmall,
            this.TypoLabelLarge,
            this.TypoLabelMedium,
            this.TypoLabelSmall,
            this.TypoBodyLarge,
            this.TypoBodyMedium,
            this.TypoBodySmall
        ])

        this.ColorTab = new NeuContainer()
        this.ColorTab.data.Gap = '12px'
        this.ColorTab.data.Padding = new Box().all('16px')

        class SchemeColorPreivew extends NeuContainer {
            constructor(data, mode){
                super()

                this.background = data['background']
                this.color = data['color']
                this.mode = mode

                this.data.FontSize = Typography.Size.BodyMedium
                this.data.Padding = new Box().all(Typography.Size.BodyLarge)

                this.reRender()
            }

            reRender() {
                super.reRender()
                transit(this, {
                    'background': theme.schemes[this.mode][this.background],
                    'color': theme.schemes[this.mode][this.color]
                })
                // this.data.BackgroundColor = theme.schemes[this.mode][this.background]
                this.data.Content = this.background
                // this.data.TextColor = theme.schemes[this.mode][this.color]
            }

        }
        class SchemeColorPairContainer extends NeuContainer {
            constructor() {
                super()
                this.data.BorderRadius = '12px'
                this.geometry.Overflow = 'hidden'

            }

            addColorPreviewList(preview_list, mode) {
                preview_list.forEach(prev => {
                    let prev_cont = new SchemeColorPreivew(prev, mode)
                    this.addChild(prev_cont)
                })
            }
        }


        let colors = [
            [
                { 'background': 'primary', 'color': 'onPrimary', },
                { 'background': 'onPrimary', 'color': 'primary', },
                { 'background': 'primaryContainer', 'color': 'onPrimaryContainer', },
                { 'background': 'onPrimaryContainer', 'color': 'primaryContainer', },
            ],
            [
                { 'background': 'secondary', 'color': 'onSecondary', },
                { 'background': 'onSecondary', 'color': 'secondary', },
                { 'background': 'secondaryContainer', 'color': 'onSecondaryContainer', },
                { 'background': 'onSecondaryContainer', 'color': 'secondaryContainer', },
            ],
            [
                { 'background': 'tertiary', 'color': 'onTertiary', },
                { 'background': 'onTertiary', 'color': 'tertiary', },
                { 'background': 'tertiaryContainer', 'color': 'onTertiaryContainer', },
                { 'background': 'onTertiaryContainer', 'color': 'tertiaryContainer', },
            ],
            [
                { 'background': 'error', 'color': 'onError', },
                { 'background': 'onError', 'color': 'error', },
                { 'background': 'errorContainer', 'color': 'onErrorContainer', },
                { 'background': 'onErrorContainer', 'color': 'errorContainer', },
            ],
            [
                { 'background': 'background', 'color': 'onBackground', },
                { 'background': 'onBackground', 'color': 'background', },
            ],
            [
                { 'background': 'surface', 'color': 'onSurface', },
                { 'background': 'onSurface', 'color': 'surface', },
                { 'background': 'surfaceVariant', 'color': 'onSurfaceVariant', },
                { 'background': 'onSurfaceVariant', 'color': 'surfaceVariant', },
            ],
            [
                { 'background': 'outline', 'color': 'surface', },
                { 'background': 'outlineVariant', 'color': 'onSurface', },
                { 'background': 'shadow', 'color': 'surface', },
                { 'background': 'inverseSurface', 'color': 'surface', },
                { 'background': 'inverseOnSurface', 'color': 'onSurface', },
                { 'background': 'inversePrimary', 'color': 'primary', },
            ]
        ]


        this.ColorLightScheme = new NeuContainer()
        this.ColorLightScheme.geometry.Width = '100%'
        this.ColorLightScheme.data.Gap = '12px'
        this.ColorDarkScheme = new NeuContainer()
        this.ColorDarkScheme.geometry.Width = '100%'
        this.ColorDarkScheme.data.Gap = '12px'


        this.ColorTab.data.Symmetric = 'horizontal'
        this.ColorTab.data.Gap = '28px'
        this.ColorTab.addChildren([
            this.ColorLightScheme,
            this.ColorDarkScheme
        ])


        colors.forEach(color_list => {
            let paircont = new SchemeColorPairContainer()
            paircont.addColorPreviewList(color_list, 'light')
            this.ColorLightScheme.addChild(paircont)
        })

        colors.forEach(color_list => {
            let paircont = new SchemeColorPairContainer()
            paircont.addColorPreviewList(color_list, 'dark')
            this.ColorDarkScheme.addChild(paircont)
        })
        // let temp = new SchemeColorPairContainer()
        // temp.addColorPreviewList(first)
        // this.ColorTab.addChild(temp)

        this.navigation = new NavigationBar()
        this.navigateComponent = new NavigationBarItem()
        this.navigateComponent.Icon.data.Content = 'widgets'
        this.navigateComponent.Label.data.Content = 'Components'
        this.navigateComponent.watchEvent('click', function() {
            this.layout.body.clearChildren()
            this.layout.body.addChild(this.ComponentsTab)
        }.bind(this))
        this.navigateColor = new NavigationBarItem()
        this.navigateColor.Icon.data.Content = 'imagesearch_roller'
        this.navigateColor.Label.data.Content = 'Color'
        this.navigateColor.watchEvent('click', function() {
            this.layout.body.clearChildren()
            this.layout.body.addChild(this.ColorTab)
        }.bind(this))
        this.navigateComponent.click()

        this.navigateTypography = new NavigationBarItem()
        this.navigateTypography.Icon.data.Content = 'text_snippet'
        this.navigateTypography.Label.data.Content = 'Typography'
        this.navigateTypography.watchEvent('click', function() {
            this.layout.body.clearChildren()
            this.layout.body.addChild(this.TypographyTab)
        }.bind(this))
        this.navigateElevation = new NavigationBarItem()
        this.navigateElevation.Icon.data.Content = 'humidity_mid'
        this.navigateElevation.Label.data.Content = 'Elevation'
        this.navigateElevation.watchEvent('click', function() {
            this.layout.body.clearChildren()
        }.bind(this))
        this.navigation.addChildren([
            this.navigateComponent,
            this.navigateColor,
            this.navigateTypography,
            this.navigateElevation
        ])
        this.layout.foot.addChild(this.navigation)


        this.draw('#fit-glass-pane')
    }

}


export let app = runApp(new Mathmatica())

// setInterval(function() {
//     try {
//         setTheme('#' + Math.floor(Math.random()*16777215).toString(16))
//     } catch (e) {}
// }, 500)