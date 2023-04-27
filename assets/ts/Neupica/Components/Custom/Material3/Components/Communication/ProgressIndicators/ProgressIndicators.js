import { NeuContainer } from "../../../../../Native/NeuContainer.js";
import { colorScheme } from "../../../Styles/Color.js";
export class ProgressIndicators extends NeuContainer {
    Track;
    constructor() {
        super();
        this.name = 'ProgressIndicators';
        this.geometry.Height = '4rem';
        this.geometry.Width = '100%';
        this.data.BackgroundColor = colorScheme.surfaceVariant;
        this.Track = new NeuContainer();
        this.Track.geometry.Height = '4rem';
        this.Track.geometry.Width = '0%';
        this.Track.data.BackgroundColor = colorScheme.primary;
        this.addChild(this.Track);
        let pr = 0;
        let upt = () => {
            if (pr < 100) {
                pr += 0.75;
                this.setProgress(`${pr}%`);
            }
            else {
                clearInterval(a);
                this.Hide();
            }
        };
        let a = setInterval(upt, 1);
    }
    setProgress(percent) {
        this.Track.geometry.Width = percent;
    }
    reRender() {
        super.reRender();
        this.data.BackgroundColor = colorScheme.surfaceVariant;
        this.Track.data.BackgroundColor = colorScheme.primary;
    }
}
//# sourceMappingURL=ProgressIndicators.js.map