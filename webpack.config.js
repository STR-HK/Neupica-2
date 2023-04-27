const path = require("path")
const WebpackObfuscatorPlugin = require("webpack-obfuscator")
const AutoExport = require("webpack-auto-export")

module.exports = {
    mode: "production",
    entry: "./apps/Flutter Mimic/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        libraryTarget: "window",
    },
    plugins: [],
    // optimization: {
    //     minimize: false,
    // },
}
