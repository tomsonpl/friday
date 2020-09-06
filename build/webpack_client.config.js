const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.tsx"
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
                            presets: ["@babel/preset-typescript", "@babel/preset-react"],
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
        open: true
    },
    plugins: [
        new HtmlPlugin({
            template: path.resolve("build/index.html"),
        })
    ],
};
