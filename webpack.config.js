const FileManagerPlugin = require("filemanager-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),

    devServer: {
        port: 8080,
    },

    devtool: "source-map",

    entry: {
        index: "./index.js",
    },

    output: {
        filename: "[name].[hash:20].js",
        path: path.resolve(__dirname, "dist"),
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin()],
    },

    plugins: [
        new FileManagerPlugin({
            onStart: [
                {
                    delete: [path.resolve(__dirname, "dist")],
                },
                {
                    copy: [
                        {
                            source: path.resolve(__dirname, "static/assets"),
                            destination: path.resolve(__dirname, "dist/assets"),
                        },
                        {
                            source: path.resolve(__dirname, "static/*"),
                            destination: path.resolve(__dirname, "dist"),
                        },
                    ],
                },
            ],
            onEnd: {
                copy: [
                    {
                        source: path.resolve(__dirname, "static/uu"),
                        destination: path.resolve(__dirname, "dist/uu"),
                    },
                ],
            },
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            inject: true,
        }),
        new GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            swDest: "sw.js",
        }),
    ],
};
