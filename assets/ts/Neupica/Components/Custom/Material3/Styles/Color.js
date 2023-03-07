// @ts-ignore
import { argbFromHex, themeFromSourceColor } from "./MCU/index.js";
export let themeColor;
let storageThemeColor = localStorage.getItem('themeColor');
if (storageThemeColor == null) {
    // themeColor = '#009b79'
    // themeColor = '#6750A4'
    // themeColor = '#9C4247'
    // themeColor = '#9c4146'
    // 2002. True Red - PANTONE 19-1664
    // themeColor = '#BF1932'
    // 2007. Chili Pepper - PANTONE 19-1557
    // themeColor = '#9B1B30'
    // 2012. Tangerine Tango - PANTONE 17-1463
    // themeColor = '#DD4124'
    // 2013. Emerald - PANTONE 17-5641
    themeColor = '#009874';
    // 2016. Rose Quartz - PANTONE 13-1520
    // themeColor = '#F7CACA'
    // 2022. Very Peri - Pantone 17-3938
    // themeColor = '#6667AB'
    // 2023. Viva Magenta - Pantone 18-1750
    // themeColor = '#BB2649'
}
else {
    themeColor = storageThemeColor;
}
export let systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (localStorage.getItem('systemDark') == null) {
    if (systemDark) {
        localStorage.setItem('systemDark', 'dark');
    }
    else {
        localStorage.setItem('systemDark', 'light');
    }
}
// ----- [ theme creator template ] ----
export var theme = themeFromSourceColor(argbFromHex(themeColor));
export function setTheme(hex) {
    theme = themeFromSourceColor(argbFromHex(hex));
    if (localStorage.getItem('systemDark') == 'dark') {
        colorScheme = theme.schemes.dark;
    }
    else {
        colorScheme = theme.schemes.light;
    }
}
window.setTheme = setTheme;
var hexToRgba = function (hex) {
    var r, g, b, a;
    hex = hex.replace('#', '');
    if (3 === hex.length) {
        r = hex.charAt(0);
        g = hex.charAt(1);
        b = hex.charAt(2);
    }
    else if (4 === hex.length) {
        r = hex.charAt(0);
        g = hex.charAt(1);
        b = hex.charAt(2);
        a = hex.charAt(3);
    }
    else if (6 === hex.length) {
        r = hex.substring(0, 2);
        g = hex.substring(2, 4);
        b = hex.substring(4, 6);
    }
    else if (8 === hex.length) {
        r = hex.substring(0, 2);
        g = hex.substring(2, 4);
        b = hex.substring(4, 6);
        a = hex.substring(6, 8);
    }
    else {
        return '';
    }
    if ('undefined' === typeof a) {
        a = 'ff';
    }
    if (1 === r.length) {
        r += r;
    }
    if (1 === g.length) {
        g += g;
    }
    if (1 === b.length) {
        b += b;
    }
    if (1 === a.length) {
        a += a;
    }
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    a = parseInt(a, 16) / 255;
    return [r, g, b, a];
};
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}
export function blendHEXColors(...args) {
    var args = arguments[0];
    var mix = [];
    var added;
    while (added = args.shift()) {
        mix.push(hexToRgba(added));
    }
    let rgbaList = blendRGBColors(mix);
    return rgb2hex(`rgba(${rgbaList[0]}, ${rgbaList[1]}, ${rgbaList[2]}, ${rgbaList[3]})`);
}
export function blendRGBColors() {
    var args = arguments[0];
    var base = [0, 0, 0, 0];
    var mix;
    var added;
    while (added = args.shift()) {
        if (typeof added[3] === 'undefined') {
            added[3] = 1;
        }
        if (base[3] && added[3]) {
            mix = [0, 0, 0, 0];
            mix[3] = 1 - (1 - added[3]) * (1 - base[3]);
            mix[0] = Math.round((added[0] * added[3] / mix[3]) + (base[0] * base[3] * (1 - added[3]) / mix[3]));
            mix[1] = Math.round((added[1] * added[3] / mix[3]) + (base[1] * base[3] * (1 - added[3]) / mix[3]));
            mix[2] = Math.round((added[2] * added[3] / mix[3]) + (base[2] * base[3] * (1 - added[3]) / mix[3]));
        }
        else if (added) {
            mix = added;
        }
        else {
            mix = base;
        }
        base = mix;
    }
    return mix;
}
export let colorScheme;
export let storageDark = localStorage.getItem('systemDark');
export function setStorageDark(light) {
    storageDark = light;
    if (storageDark == 'dark') {
        colorScheme = theme.schemes.dark;
    }
    else {
        colorScheme = theme.schemes.light;
    }
}
// console.log(storageDark)
if (storageDark == 'dark') {
    colorScheme = theme.schemes.dark;
}
else {
    colorScheme = theme.schemes.light;
}
// ---- [ theme creator template ] ----
// ---- [ baker starts ] ----
// let bakedLight = {}
// let bakedDark = {}
//
// Object.keys(theme.schemes.light.props).forEach(key => {
//     bakedLight[key] = theme.schemes.light[key]
// })
// Object.keys(theme.schemes.dark.props).forEach(key => {
//     bakedDark[key] = theme.schemes.dark[key]
// })
//
// console.log(JSON.stringify(bakedLight))
// console.log(JSON.stringify(bakedDark))
// ---- [ baker ends ] ----
// ---- [ baked template ] ----
// let bakedLight = {"primary":"#9c4146","onPrimary":"#ffffff","primaryContainer":"#ffdad9","onPrimaryContainer":"#40000a","secondary":"#775656","onSecondary":"#ffffff","secondaryContainer":"#ffdad9","onSecondaryContainer":"#2c1515","tertiary":"#755a2f","onTertiary":"#ffffff","tertiaryContainer":"#ffddaf","onTertiaryContainer":"#281800","error":"#ba1a1a","onError":"#ffffff","errorContainer":"#ffdad6","onErrorContainer":"#410002","background":"#fffbff","onBackground":"#201a1a","surface":"#fffbff","onSurface":"#201a1a","surfaceVariant":"#f4dddd","onSurfaceVariant":"#524343","outline":"#857372","outlineVariant":"#d7c1c1","shadow":"#000000","scrim":"#000000","inverseSurface":"#362f2f","inverseOnSurface":"#fbeeed","inversePrimary":"#ffb3b3"}
// let bakedDark = {"primary":"#ffb3b3","onPrimary":"#5f131b","primaryContainer":"#7e2a30","onPrimaryContainer":"#ffdad9","secondary":"#e6bdbc","onSecondary":"#44292a","secondaryContainer":"#5d3f3f","onSecondaryContainer":"#ffdad9","tertiary":"#e5c18d","onTertiary":"#422c05","tertiaryContainer":"#5b421a","onTertiaryContainer":"#ffddaf","error":"#ffb4ab","onError":"#690005","errorContainer":"#93000a","onErrorContainer":"#ffb4ab","background":"#201a1a","onBackground":"#ece0df","surface":"#201a1a","onSurface":"#ece0df","surfaceVariant":"#524343","onSurfaceVariant":"#d7c1c1","outline":"#a08c8c","outlineVariant":"#524343","shadow":"#000000","scrim":"#000000","inverseSurface":"#ece0df","inverseOnSurface":"#362f2f","inversePrimary":"#9c4146"}
// let baked = {
//     schemes: {
//         light: bakedLight,
//         dark: bakedDark,
//     }
// }
// export let colorScheme;
// if (localStorage.getItem('systemDark') == 'dark') {
//     // colorScheme = theme.schemes.dark
//     colorScheme = baked.schemes.dark
// } else {
//     // colorScheme = theme.schemes.light
//     colorScheme = baked.schemes.light
// }
// ---- [ baked template ] ----
//# sourceMappingURL=Color.js.map