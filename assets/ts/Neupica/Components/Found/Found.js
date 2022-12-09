import { Children } from "../../../Common/Children.js";
import { Bounding, createCover, createDiv, createImg, createInput, createModal } from "../Create/Create.js";
import { Geometry } from "../../Core/Geometry.js";
// import { Object } from "../../../Common/Object"
export class Found extends Children {
    build;
    target;
    name;
    cover;
    element;
    geometry;
    geometryUpdater;
    buildGeometry;
    getBoundElement;
    getBoundingClientRect;
    watchEvent;
    watchBoundEvent;
    watchPreset;
    watchEvents;
    getBoundingParent;
    dataObj;
    constructor() {
        super();
        this.name = "Found";
        this.build = function () {
            this.dataObj = {};
            Object.entries(this.data).forEach(([key, value]) => {
                this.dataObj[key] = value;
            });
            Object.keys(this.data).forEach((key) => {
                Object.defineProperty(this.data, key, {
                    get: () => {
                        return this.dataObj[key];
                    },
                    set: (newValue) => {
                        this.dataObj[key] = newValue;
                        this[key]();
                    },
                });
            });
        };
        this.geometry = new Geometry().geometry;
        this.target = this.element;
        this.geometryUpdater = function (attribute) {
            try {
                this.target.style;
            }
            catch (e) {
                this.target = this.element;
                try {
                    this.target.style;
                }
                catch (e) {
                    console.warn(this);
                    console.warn('"this.element & this.target" is missing\nUnable to update geometry');
                    return;
                }
            }
            if (attribute === "Width") {
                this.target.style.width = this.geometry.Width;
            }
            if (attribute === "Height") {
                this.target.style.height = this.geometry.Height;
            }
            if (attribute === "MinWidth") {
                this.target.style.minWidth = this.geometry.MinWidth;
            }
            if (attribute === "MinHeight") {
                this.target.style.minHeight = this.geometry.MinHeight;
            }
            if (attribute === "MaxWidth") {
                this.target.style.maxWidth = this.geometry.MaxWidth;
            }
            if (attribute === "MaxHeight") {
                this.target.style.maxHeight = this.geometry.MaxHeight;
            }
            if (attribute === "Left") {
                this.target.style.left = this.geometry.Left;
            }
            if (attribute === "Top") {
                this.target.style.top = this.geometry.Top;
            }
            if (attribute === "Right") {
                this.target.style.right = this.geometry.Right;
            }
            if (attribute === "Bottom") {
                this.target.style.bottom = this.geometry.Bottom;
            }
            if (attribute === "Margin") {
                this.target.style.margin = this.geometry.Margin;
            }
            if (attribute === "Padding") {
                this.target.style.padding = this.geometry.Padding;
            }
            if (attribute === "Border") {
                this.target.style.border = this.geometry.Border;
            }
            if (attribute === "ZIndex") {
                this.target.style.zIndex = this.geometry.ZIndex;
            }
            if (attribute === "Display") {
                this.target.style.display = this.geometry.Display;
            }
            if (attribute === "Position") {
                this.target.style.position = this.geometry.Position;
            }
            if (attribute === "Float") {
                this.target.style.float = this.geometry.Float;
            }
            if (attribute === "Overflow") {
                this.target.style.overflow = this.geometry.Overflow;
            }
            if (attribute === "OverflowX") {
                this.target.style.overflowX = this.geometry.OverflowX;
            }
            if (attribute === "OverflowY") {
                this.target.style.overflowY = this.geometry.OverflowY;
            }
            if (attribute === "AspectRatio") {
                this.target.style.aspectRatio = this.geometry.AspectRatio;
            }
            if (attribute === "Cursor") {
                this.target.style.cursor = this.geometry.Cursor;
            }
            if (attribute === "Transform") {
                this.target.style.transform = this.geometry.Transform;
            }
        };
        this.buildGeometry = function () {
            this.geometryObj = {};
            Object.entries(this.geometry).forEach(([key, value]) => {
                this.geometryObj[key] = value;
                // this[key] = value
            });
            Object.keys(this.geometry).forEach((key) => {
                Object.defineProperty(this.geometry, key, {
                    get: () => {
                        return this.geometryObj[key];
                    },
                    set: (newValue) => {
                        this.geometryObj[key] = newValue;
                        // console.log(key)
                        this.geometryUpdater(key);
                    },
                });
            });
        };
        this.buildGeometry();
        this.getBoundElement = function () {
            let target = this.cover;
            while (true) {
                if (!Array.from(target.classList).includes(Bounding)) {
                    target = target.children[0];
                }
                else {
                    break;
                }
            }
            return target;
        };
        this.getBoundingParent = function () {
            let target = this.cover.parentElement;
            while (target.style.display == 'contents') {
                target = target.parentElement;
            }
            return target;
        };
        this.getBoundingClientRect = function () {
            return this.getBoundElement().getBoundingClientRect();
        };
        this.watchEvent = function (eventname, callback) {
            this.cover.addEventListener(eventname, callback, true);
        };
        this.watchBoundEvent = function (eventname, callback) {
            this.getBoundElement().addEventListener(eventname, callback, true);
        };
        this.watchPreset = function (preset, callback) {
        };
        this.watchEvents = function (eventnames, callback) {
            eventnames.forEach((eventname) => {
                console.log(eventname);
                this.cover.addEventListener(eventname, callback, true);
            });
        };
    }
    createModal() {
        return createModal();
    }
    createCover() {
        return createCover(Object.getPrototypeOf(this).constructor.name);
    }
    createDiv() {
        return createDiv();
    }
    createImg() {
        return createImg();
    }
    createInput() {
        return createInput();
    }
}
//# sourceMappingURL=Found.js.map