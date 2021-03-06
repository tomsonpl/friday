const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./build/index.tsx"
    },
    output: {
        filename: "[name].js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-typescript", "@babel/preset-react", "@emotion/babel-preset-css-prop"],
                            plugins: [
                                "@babel/plugin-proposal-optional-chaining",
                                "@babel/plugin-proposal-nullish-coalescing-operator",
                                "@babel/plugin-proposal-class-properties"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
        port: 8088,
        host: "0.0.0.0",
        open: true
    },
    plugins: [
        new HtmlPlugin({
            meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
            template: path.resolve("build/index.html"),
        })
    ],
};
