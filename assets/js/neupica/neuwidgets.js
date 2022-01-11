class SessionStorageManager {
    constructor() {
        this.storage = {};
        this.setItem = function (key, value) {
            this.storage[key] = value;
        };
        this.getItem = function (key) {
            return this.storage[key];
        };
        this.removeItem = function (key) {
            delete this.storage[key];
        };
        this.clear = function () {
            this.storage = {};
        };
    }
}
window.IndexStorage = new SessionStorageManager();
window.thisClass = (item) => {
    console.log('thisClass :', item, 'converted to', window.IndexStorage.getItem(item.id));
    return window.IndexStorage.getItem(item.id);
};
import { ColorsModule } from "../utils/Colors.js";
const Colors = new ColorsModule();
class WidgetStylerClass {
    constructor() {
        this.NeuButton = {
            Text: '',
            Color: Colors.Black,
            Size: '1rem',
            TextPadding: '0px',
            BackgroundColor: Colors.LightGray,
            StrokeColor: Colors.Gray,
            StrokeWidth: '0px',
            StrokeStyle: 'solid',
            StrokeRadius: '3px',
            RippleColor: Colors.Yellow,
            Icon: null,
            IconColor: null,
            IconSize: '19px',
            IconTop: false,
            IconPadding: '0px',
            Padding: '8px',
            IconGap: '8px',
        };
    }
}
window.WidgetStyler = new WidgetStylerClass();
export let WidgetStyler = window.WidgetStyler;
export function ChangeWidgetStyler(stylerClass) {
    window.WidgetStyler = stylerClass;
}
export class Ripple {
    constructor(element) {
        element.addEventListener("pointerdown", function (event) {
            let element = window.thisClass(this).element;
            let eventTarget = event.currentTarget;
            let elementRect = element.getBoundingClientRect();
            let HMAX = Math.max(Math.abs(event.clientX - elementRect.left), Math.abs(event.clientX - elementRect.right));
            let VMAX = Math.max(Math.abs(event.clientY - elementRect.top), Math.abs(event.clientY - elementRect.bottom));
            let aniVar = 2;
            let hideTime = 1;
            let circle = document.createElement('div');
            circle.classList.add('Neu-Ripple');
            let diameter = Math.sqrt(Math.pow(HMAX, 2) + Math.pow(VMAX, 2)) / aniVar;
            let radius = diameter / 2;
            circle.style.position = 'absolute';
            circle.style.borderRadius = '50%';
            circle.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            circle.style.width = circle.style.height = `${diameter}px`;
            if (eventTarget instanceof HTMLElement) {
                circle.style.left = `${event.clientX - eventTarget.offsetLeft - radius}px`;
                circle.style.top = `${event.clientY - eventTarget.offsetTop - radius}px`;
            }
            // circle.style.transition = `transform ${0.2 * aniVar}s linear,
            circle.style.transition = `transform ${0.1 * aniVar}s cubic-bezier(0.03,-0.01, 0, 0.89),
                                        opacity ${hideTime}s ease-out`;
            // circle.style.transition = `transform ${0.3 * aniVar}s ease-,
            //                             opacity ${hideTime}s ease-out`
            // circle.setAttribute('aniVar', String(aniVar))
            circle.setAttribute('hideTime', String(hideTime));
            setTimeout(function () {
                circle.style.transform = `scale(${2 * aniVar})`;
            }, 1);
            element.appendChild(circle);
        });
        element.addEventListener("pointerup", function (event) {
            let button = window.thisClass(this).element;
            Array.from(button.getElementsByClassName('Neu-Ripple')).forEach(element => {
                if (element instanceof HTMLElement) {
                    element.style.opacity = '0';
                    setTimeout(function () {
                        element.remove();
                    }, parseFloat(element.getAttribute('hideTime')) * 1000);
                }
            });
        });
    }
}
import { NeuButton } from "./widgets/NeuButton.js";
import { NeuAppBar } from "./widgets/NeuAppBar.js";
import { NeuInput } from "./widgets/NeuInput.js";
export { NeuButton, NeuAppBar, NeuInput };
//# sourceMappingURL=NeuWidgets.js.map