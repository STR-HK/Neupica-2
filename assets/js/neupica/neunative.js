// function makeId(length) {
//     var result           = ''
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     var charactersLength = characters.length
//     for ( var i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength))
//     }
//     return result
// }
function makeId(length) {
    var result = '';
    var characters = '';
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    characters += 'abcdefghijklmnopqrstuvwxyz';
    characters += '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
export class NeuNative {
    constructor() {
        this.createCover = function (name) {
            var element = document.createElement('div');
            // element.
            element.id = `${name}-${makeId(6)}`; // Neu-xxxxxx
            return element;
        };
        this.createElement = function (hidden = false) {
            var element = document.createElement('div');
            element.id = `Neu-Div-${makeId(6)}`; // Neu-xxxxxx
            if (hidden) {
                element.style.display = 'none';
            }
            return element;
        };
        this.createImg = function (hidden = false) {
            var element = document.createElement('img');
            element.id = `Neu-Img-${makeId(6)}`; // Neu-xxxxxx
            if (hidden) {
                element.style.display = 'none';
            }
            return element;
        };
    }
}
// export class Button extends NeuNative {
//     constructor() {
//         super()
//         this.cover = this.createCover('Button')
//         this.element = this.createElement()
//         this.cover.appendChild(this.element)
//         this.text = this.createElement()
//         this.icon = this.createImg()
//     }
// }
//# sourceMappingURL=NeuNative.js.map