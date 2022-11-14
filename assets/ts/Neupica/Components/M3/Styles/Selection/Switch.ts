import { NeuContainer } from "../../../Native/NeuContainer.js"
import { colorScheme } from "../../Components/Color.js"
import { Padding } from "../../../../../Tool/Padding.js"
import { anime } from "../../Components/Motion/anime.es.js"

export class Switch extends NeuContainer {
    State: boolean

    Track: NeuContainer
    Thumb: NeuContainer
    Icon: any
    constructor() {
        super()
        this.name = 'Switch'

        this.State = false

        this.cover.style.cursor = "pointer"


        this.Track = new NeuContainer()
        this.Track.geometry.Width = '52rem'
        this.Track.geometry.Height = '32rem'
        this.Track.data.BorderRadius = '16rem'
        this.Track.data.JustifyContent = 'center'
        this.addChild(this.Track)

        this.Thumb = new NeuContainer()
        this.Thumb.data.BorderRadius = '50%'
        this.Track.addChild(this.Thumb)

        this.Icon

        let that = this

        this.watchEvent('click', function() {
            that.Toggle()
        })

        this.Toggle()

        this.getBound().setAttribute('onpointerdown', `ripplet(arguments[0], ${JSON.stringify(
            {
                // "color":"black",
                "opacity":"0.15",
                "spreadingDuration":".225s",
                "spreadingDelay":"0s",
                // "spreadingTimingFunction":"cubic-bezier(0.03,-0.01, 0, 0.89)",
                "clearing":false,
                "clearingDuration":".225s",
                "clearingDelay":".150s",
                // "clearingTimingFunction":"ease-in-out",
                "centered":false,
                "appendTo":"target"
            }
        )})`)
        this.getBound().setAttribute('onpointerup', "ripplet.clear(this)")
        this.getBound().setAttribute('onpointerleave', "ripplet.clear(this)")


    }

    Toggle() {
        if (this.State) {
            this.Track.data.BackgroundColor = colorScheme.primary
            this.Track.data.BorderColor = 'transparent'

            this.Track.data.Padding = new Padding().all('1rem')

            // this.Thumb.data.BackgroundColor = colorScheme.onPrimary
            // this.Thumb.geometry.Width = '24rem'
            // this.Thumb.geometry.Height = '24rem'

            anime({
                targets: this.Thumb.element,
                easing: 'linear',
                duration: 100,
                translateX: '24rem',
                scale: 3/2,
                backgroundColor: [
                    colorScheme.outline,
                    colorScheme.onPrimary,
                ]
            })
            // this.Thumb.geometry.Left = '20rem'


        } else {
            this.Track.data.BackgroundColor = colorScheme.surfaceVariant
            this.Track.data.BorderColor = colorScheme.outline
            this.Track.data.BorderWidth = '2rem'
            this.Track.data.BorderStyle = 'solid'

            this.Track.data.Padding = new Padding().all('5rem')

            this.Thumb.data.BackgroundColor = colorScheme.outline
            this.Thumb.geometry.Width = '16rem'
            this.Thumb.geometry.Height = '16rem'

            // this.Thumb.geometry.Left = '0rem'

            anime({
                targets: this.Thumb.element,
                easing: 'linear',
                duration: 100,
                translateX: '0rem',
                scale: 1,
                backgroundColor: [
                    colorScheme.onPrimary,
                    colorScheme.outline,

                ]
            })

        }

        this.State = !this.State

    }
}