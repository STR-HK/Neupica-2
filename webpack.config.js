const path = require("path")
const WebpackObfuscatorPlugin = require("webpack-obfuscator")
const AutoExport = require("webpack-auto-export")

module.exports = {
    mode: "production",
    entry: "./assets/js/Lib/Screen.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    plugins: [
        new AutoExport({
            extension: ".js", // define extension of generated index file
            exportType: "default", // the default way to export. values can be: 'named' | 'default' | 'detect'
            // baseDir: './src', // base directory to observe the changes
            // paths: [ // the folders to be automatically exported
            //   'hooks', // hooks folder will use default exportType
            //   { path: 'components', exportType: 'detect' }, // we can also specify the export type for any given path.
            // ],
        }),
    ],
    optimization: {
        minimize: false,
    },
}
