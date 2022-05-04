const path = require("path")
const WebpackObfuscatorPlugin = require("webpack-obfuscator")
const AutoExport = require("webpack-auto-export")

module.exports = {
    mode: "production",
    entry: "./assets/js/Lib/Screen.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        libraryTarget: "window",
    },
    plugins: [],
    optimization: {
        minimize: false,
    },
}
