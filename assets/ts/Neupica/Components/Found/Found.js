import { Children } from "../../../Common/Children.js";
import { createCover, createDiv, createImg, createInput, } from "../Create/Create.js";
import { Geometry } from "../../Core/Geometry.js";
export class Found extends Children {
    build;
    target;
    name;
    cover;
    element;
    geometry;
    update_gm;
    build_gm;
    getBound;
    watchEvent;
    watchBoundEvent;
    watchPreset;
    watchEvents;
    constructor() {
        super();
        this.build = function () {
            this.obj = {};
            Object.entries(this.data).forEach(([key, value]) => {
                this.obj[key] = value;
            });
            Object.keys(this.data).forEach((key) => {
                Object.defineProperty(this.data, key, {
                    get: () => {
                        return this.obj[key];
                    },
                    set: (newValue) => {
                        this.obj[key] = newValue;
                        this[key]();
                    },
                });
            });
        };
        this.geometry = new Geometry().geometry;
        this.target = this.element;
        this.update_gm = function (attribute) {
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
                // this.cover.style.width = this.geometry.Width
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
        };
        this.build_gm = function () {
            this.gb_obj = {};
            Object.entries(this.geometry).forEach(([key, value]) => {
                this.gb_obj[key] = value;
                // this[key] = value
            });
            Object.keys(this.geometry).forEach((key) => {
                Object.defineProperty(this.geometry, key, {
                    get: () => {
                        return this.gb_obj[key];
                    },
                    set: (newValue) => {
                        this.gb_obj[key] = newValue;
                        // console.log(key)
                        this.update_gm(key);
                    },
                });
            });
        };
        this.build_gm();
        this.getBound = function () {
            let target = this.cover;
            while (true) {
                if (!Array.from(target.classList).includes("NeuBound")) {
                    target = target.children[0];
                }
                else {
                    break;
                }
            }
            return target;
        };
        this.watchEvent = function (eventname, callback) {
            this.cover.addEventListener(eventname, callback);
        };
        this.watchBoundEvent = function (eventname, callback) {
            this.getBound().addEventListener(eventname, callback);
        };
        this.watchPreset = function (preset, callback) {
        };
        this.watchEvents = function (eventnames, callback) {
            eventnames.forEach((eventname) => {
                console.log(eventname);
                this.cover.addEventListener(eventname, callback);
            });
        };
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