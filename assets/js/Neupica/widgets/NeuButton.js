import { Ripple } from '../NeuWidgets.js';
import { Widgets } from './Widgets.js';
export class NeuButton extends Widgets {
    constructor() {
        super();
        this.name = 'NeuButton';
        this.create();
        this.init();
        this.object = {
            Text: '',
            Color: 'black',
            Size: '1rem',
            TextPadding: '0px',
            BackgroundColor: 'lightgray',
            StrokeColor: 'gray',
            StrokeWidth: '0px',
            StrokeStyle: 'solid',
            StrokeRadius: '3px',
            RippleColor: 'yellow',
            Icon: null,
            IconColor: null,
            IconSize: '19px',
            IconTop: false,
            IconPadding: '0px',
            Padding: '8px',
            IconGap: '8px',
            Shadow: null,
        };
        this.apply(this.object); // 스타일 적용
    }
    create() {
        this.cover = this.createCover(this.name);
        this.element = this.createElement();
        this.icon = this.createImg(true);
        this.text = this.createElement();
        this.element.appendChild(this.icon);
        this.element.appendChild(this.text);
        this.cover.appendChild(this.element);
    }
    init() {
        this.element.style.userSelect = 'none';
        this.element.style.webkitTapHighlightColor = 'transparent';
        this.element.style.display = 'flex';
        this.element.style.flexDirection = 'row';
        this.element.style.justifyContent = 'center';
        this.element.style.alignItems = 'center';
        this.element.style.cursor = 'pointer';
        this.element.style.overflow = 'hidden';
        this.element.style.position = 'relative';
        this.text.style.display = 'flex';
        this.text.style.alignItems = 'center';
        new Ripple(this.cover);
    }
    setText(text) {
        this.object.Text = text;
        this.text.innerText = text;
        if (text != '') {
            this.text.style.display = '';
        }
        else {
            this.text.style.display = 'none';
        }
    }
    setColor(color) {
        this.object.Color = color;
        this.element.style.color = color;
    }
    setSize(size) {
        // this.text.style.height = size
        this.object.Size = size;
        this.text.style.fontSize = size;
    }
    setTextPadding(padding) {
        this.object.TextPadding = padding;
        this.text.style.padding = padding;
    }
    setPadding(padding) {
        this.object.Padding = padding;
        this.element.style.padding = padding;
    }
    setBackgroundColor(color) {
        this.object.BackgroundColor = color;
        this.element.style.backgroundColor = color;
    }
    setStrokeStyle(style) {
        this.object.StrokeStyle = style;
        this.element.style.borderStyle = style;
    }
    setStrokeColor(color) {
        this.object.StrokeColor = color;
        this.element.style.borderColor = color;
    }
    setStrokeWidth(width) {
        this.object.StrokeWidth = width;
        this.element.style.borderWidth = width;
    }
    setStrokeRadius(radius) {
        this.object.StrokeRadius = radius;
        this.element.style.borderRadius = radius;
    }
    setRippleColor(color) {
        this.object.RippleColor = color;
    }
    setIcon(icon) {
        this.object.Icon = icon;
        this.icon.src = icon;
        if (icon != '') {
            this.icon.style.display = '';
        }
        else {
            this.icon.style.display = 'none';
        }
    }
    setIconColor(color) {
        this.object.IconColor = color;
        this.editSvg(this.icon.src, function (element) {
            element.style.fill = color;
            return element;
        }).then((url) => {
            this.icon.src = url;
            this.object.Icon = url;
        });
    }
    setIconSize(size) {
        this.object.IconSize = size;
        this.icon.style.width = size;
    }
    setIconTop(top) {
        this.object.IconTop = top;
        this.element.style.flexDirection = top ? 'column' : 'row';
    }
    setIconPadding(padding) {
        this.object.IconPadding = padding;
        this.icon.style.padding = padding;
    }
    setIconGap(gap) {
        this.object.IconGap = gap;
        this.element.style.gap = gap;
    }
    setShadow(shadow) {
        this.object.Shadow = shadow;
        this.element.style.boxShadow = shadow;
    }
}
//# sourceMappingURL=NeuButton.js.map