import { argbFromHex, themeFromSourceColor } from "./MCU/index.js";
// export const theme = themeFromSourceColor(
//     argbFromHex('#009b79')
// );
export const theme = themeFromSourceColor(argbFromHex('#6750A4'));
let systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
systemDark = true;
export let colorScheme;
if (systemDark == true) {
    colorScheme = theme.schemes.dark;
}
else {
    colorScheme = theme.schemes.light;
}
//# sourceMappingURL=Color.js.map