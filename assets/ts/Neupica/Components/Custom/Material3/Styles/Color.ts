import { argbFromHex, Hct, Scheme, themeFromSourceColor } from "./MCU/index.js"

export let themeColor: string
let storageThemeColor = localStorage.getItem('themeColor')
if (storageThemeColor == null) {
    themeColor = '#009b79'
    themeColor = '#6750A4'
    themeColor = '#9C4247'
    themeColor = '#9c4146'
} else {
    themeColor = storageThemeColor
}

export let systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (localStorage.getItem('systemDark') == null) {
    if (systemDark) {
        localStorage.setItem('systemDark', 'dark')
    } else {
        localStorage.setItem('systemDark', 'light')
    }
}


// ----- [ theme creator template ] ----
export var theme = themeFromSourceColor(
    argbFromHex(themeColor)
);
export function setTheme(hex: string) {
    theme = themeFromSourceColor(argbFromHex(hex))
    if (localStorage.getItem('systemDark') == 'dark') {
        colorScheme = theme.schemes.dark
    } else {
        colorScheme = theme.schemes.light
    }
}

export let colorScheme: Scheme;
export let storageDark = localStorage.getItem('systemDark')
export function setStorageDark(light) {
    storageDark = light
    if (storageDark == 'dark') {
        colorScheme = theme.schemes.dark
    } else {
        colorScheme = theme.schemes.light
    }
}
// console.log(storageDark)
if (storageDark == 'dark') {
    colorScheme = theme.schemes.dark
} else {
    colorScheme = theme.schemes.light
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
