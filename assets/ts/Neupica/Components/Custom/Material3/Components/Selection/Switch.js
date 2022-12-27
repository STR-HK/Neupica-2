import { NeuContainer } from "../../../../Native/NeuContainer.js";
import { colorScheme } from "../../Styles/Color.js";
import { Padding } from "../../../../../../Tool/Padding.js";
import { anime } from "../../Styles/Motion/anime.es.js";
import { NeuImage } from "../../../../Native/NeuImage.js";
export class Switch extends NeuContainer {
    State;
    Track;
    Thumb;
    Icon;
    constructor() {
        super();
        this.name = 'Switch';
        this.State = true;
        // this.cover.style.cursor = "pointer"
        this.geometry.Cursor = 'pointer';
        // this.element.style.borderRadius = '16rem'
        this.data.BorderRadius = '16rem';
        this.Track = new NeuContainer();
        this.Track.geometry.Width = '52rem';
        this.Track.geometry.Height = '32rem';
        this.Track.data.BorderRadius = '16rem';
        this.Track.data.JustifyContent = 'center';
        this.addChild(this.Track);
        this.Thumb = new NeuContainer();
        this.Thumb.data.BorderRadius = '50%';
        this.Track.addChild(this.Thumb);
        this.Icon = new NeuImage();
        this.watchEvent('click', function () {
            this.Toggle();
        }.bind(this));
        this.Toggle();
        this.ActivateRipple();
    }
    Toggle() {
        if (this.State) {
            this.Track.data.BorderWidth = '2rem';
            this.Track.data.BorderStyle = 'solid';
            this.Track.data.BorderColor = colorScheme.outline;
            this.Track.data.Padding = new Padding().all('5rem');
            this.Thumb.geometry.Width = '16rem';
            this.Thumb.geometry.Height = '16rem';
            anime({
                targets: this.Thumb.element,
                easing: 'linear',
                duration: 100,
                translateX: '0rem',
                scale: 1,
                backgroundColor: [
                    colorScheme.onPrimary,
                    colorScheme.outline,
                ],
                borderColor: [
                    colorScheme.outline,
                    'transparent',
                ]
            });
            anime({
                targets: this.Track.element,
                easing: 'linear',
                duration: 100,
                backgroundColor: [
                    colorScheme.primary,
                    colorScheme.surfaceVariant,
                ],
            });
        }
        else {
            // this.data.BorderColor = 'transparent'
            this.Track.data.BorderColor = 'transparent';
            this.Track.data.Padding = new Padding().all('1rem');
            anime({
                targets: this.Thumb.element,
                easing: 'linear',
                duration: 100,
                translateX: '24rem',
                scale: 3 / 2,
                backgroundColor: [
                    colorScheme.outline,
                    colorScheme.onPrimary,
                ],
                borderColor: [
                    'transparent',
                    colorScheme.outline,
                ]
            });
            anime({
                targets: this.Track.element,
                easing: 'linear',
                duration: 100,
                backgroundColor: [
                    colorScheme.surfaceVariant,
                    colorScheme.primary,
                ],
            });
        }
        this.State = !this.State;
    }
}
//# sourceMappingURL=Switch.js.map