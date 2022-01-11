import { Widgets } from './Widgets.js';
export class NeuAppBar extends Widgets {
    constructor() {
        super();
        this.name = 'NeuAppBar';
        this.create();
        this.init();
        this.object = {
            Text: 'Page Title',
            BackgroundColor: '#C34351',
            Padding: '16px',
            Color: 'white',
            Size: '1.2rem',
            Shadow: this.materialShadow,
            Gap: '10px',
            Lead: null,
            LeadColor: null,
        };
        this.apply(this.object);
    }
    create() {
        this.cover = this.createCover(this.name);
        this.element = this.createElement();
        this.lead = this.createImg(true);
        this.title = this.createElement();
        this.element.appendChild(this.lead);
        this.element.appendChild(this.title);
        this.cover.appendChild(this.element);
    }
    init() {
        this.element.style.width = '100vw';
        this.element.style.display = 'flex';
    }
    setText(text) {
        this.object.Text = text;
        this.title.innerHTML = text;
    }
    setBackgroundColor(color) {
        this.object.BackgroundColor = color;
        this.element.style.backgroundColor = color;
    }
    setPadding(padding) {
        this.object.Padding = padding;
        this.element.style.padding = padding;
    }
    setColor(color) {
        this.object.Color = color;
        this.title.style.color = color;
    }
    setSize(size) {
        this.object.Size = size;
        this.title.style.fontSize = size;
    }
    setShadow(shadow) {
        this.object.Shadow = shadow;
        this.element.style.boxShadow = shadow;
    }
    setLead(lead) {
        this.object.Lead = lead;
        this.lead.src = lead;
        this.lead.style.display = '';
    }
    setLeadColor(color) {
        this.object.LeadColor = color;
        this.editSvg(this.lead.src, function (element) {
            element.style.fill = color;
            return element;
        }).then((url) => {
            this.lead.src = url;
            this.object.Lead = url;
        });
    }
    setGap(gap) {
        this.object.Gap = gap;
        this.element.style.gap = gap;
    }
}
//# sourceMappingURL=NeuAppBar.js.map