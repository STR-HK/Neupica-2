import { NeuContainer } from "../../../../Native/NeuContainer.js"
import { colorScheme } from "../../Styles/Color.js"
import { Level2 } from "../../Styles/Elevation.js"
import { Box } from "../../../../../../Tool/Box.js"
// import { MaterialSymbolsOutlined } from "../../Components/Icons"
// import { NeuText } from "../../../../Native/NeuText"
import { MaterialSymbolsOutlined } from "../../Styles/Icons.js"
import { Divider } from "../Containment/Divider.js"
import { Typography } from "../../Styles/Typography.js"
import anime from "../../Styles/Motion/anime.es.js"

export class Menu extends NeuContainer {
    public Container: NeuContainer
    private animating: boolean
    constructor() {
        super()

        this.Container = new NeuContainer()

        this.Container.data.BackgroundColor = colorScheme.surface
        this.Container.data.Shadow = Level2
        this.Container.data.BorderRadius = '4rem'

        this.Container.geometry.MinWidth = '112rem'
        this.Container.geometry.Width = '212rem'
        this.Container.geometry.MaxWidth = '280rem'

        this.geometry.Transform = 'scaleY(0)'
        this.geometry.TransformOrigin = '50% 0 0'

        this.addChild(this.Container)

        this.animating = false
    }

    reRender() {
        super.reRender()
        this.Container.data.BackgroundColor = colorScheme.surface

    }

    Appear() {
        let that = this
        if (!this.animating) {
            anime({
                targets: this.element,
                scaleY: 1,
                begin: function() {
                    that.animating = true
                },
                complete: function() {
                    that.animating = false
                }
            })
        }
    }

    DisAppear(callback) {
        // let that = this
        // if (!this.animating) {
        //     anime({
        //         targets: this.element,
        //         scaleY: 0,
        //         easing: 'easeOutElastic(1, .5)',
        //         duration: 1000,
        //         // loop: true,
        //         begin: function() {
        //             that.animating = true
        //         },
        //         complete: function() {
        //             that.animating = false
        //         }
        //     })
        //     callback()

        // }
        // console.log(callback)
    }

}

export class MenuItem extends NeuContainer {
    LeadingIcon: MaterialSymbolsOutlined
    LabelText: NeuContainer
    TrailingText: NeuContainer
    TrailingIcon: MaterialSymbolsOutlined
    CascadingMenuIcon: MaterialSymbolsOutlined
    constructor() {
        super()

        this.geometry.Height = '48rem'
        this.geometry.Width = '100%'
        this.data.Padding = new Box().VH('4rem', '12rem')
        this.data.Symmetric = 'horizontal'
        this.data.AlignItems = 'center'

        this.LeadingIcon = new MaterialSymbolsOutlined('visibility')
        this.LeadingIcon.data.TextColor = colorScheme.onSurfaceVariant
        this.addChild(this.LeadingIcon)

        this.LeadingPadding = new NeuContainer()
        this.LeadingPadding.geometry.Width = '12rem'
        this.addChild(this.LeadingPadding)

        this.LabelText = new NeuContainer()
        this.LabelText.data.TextColor = colorScheme.onSurface
        this.LabelText.data.Content = 'Item 1'
        this.LabelText.geometry.MinWidth = 'fit-content'
        this.LabelText.data.FontSize = Typography.Size.LabelLarge
        this.addChild(this.LabelText)

        this.Trailer = new NeuContainer()
        this.Trailer.geometry.Width = '100%'
        this.addChild(this.Trailer)

        this.TrailingText = new NeuContainer()
        this.TrailingText.data.TextColor = colorScheme.onSurfaceVariant


        this.TrailingIcon = new MaterialSymbolsOutlined('cut')
        this.TrailingIcon.data.TextColor = colorScheme.onSurfaceVariant
        this.addChild(this.TrailingIcon)

        this.CascadingMenuIcon = new MaterialSymbolsOutlined('arrow_right')
        this.CascadingMenuIcon.data.TextColor = colorScheme.onSurfaceVariant

        // For ripple
        this.data.TextColor = colorScheme.onSurfaceVariant
        this.ActivateRipple()

        this.geometry.Cursor = 'pointer'

    }

    reRender() {
        super.reRender()
        this.LeadingIcon.data.TextColor = colorScheme.onSurfaceVariant
        this.LabelText.data.TextColor = colorScheme.onSurface
        this.TrailingText.data.TextColor = colorScheme.onSurfaceVariant
        this.TrailingIcon.data.TextColor = colorScheme.onSurfaceVariant
        this.CascadingMenuIcon.data.TextColor = colorScheme.onSurfaceVariant
        this.data.TextColor = colorScheme.onSurfaceVariant

    }
}

export class MenuDivider extends Divider {
    constructor() {
        super()

        this.geometry.Margin = new Box().vertical('8rem')
    }
}