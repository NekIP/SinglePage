"use strict";
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Webpack = require("webpack");
var cssExtractor = new ExtractTextPlugin('style.css', { allChunk: true });
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var autoprefixer = require('autoprefixer');
var jsLoader = [
    {
        loader: 'babel-loader',
        options: {
            presets: ['env', 'es2015', 'stage-0', 'vue'],
            sourceMap: true
        }
    }
];
/* IMPORTANT: handlers convert code strictly from bottom to top */
var sassLoader = cssExtractor.extract({
    fallback: "style-loader",
    use: [
        {
            loader: "css-loader"
        },
        "postcss-loader",
        "resolve-url-loader",
        {
            loader: "sass-loader?sourceMap",
            options: {
                includePaths: [
                    path.resolve(__dirname, 'images'),
                    path.resolve(__dirname, 'dist')
                ],
                sourceMap: true
            }
        }
    ]
});
module.exports = {
    entry: './wwwroot/app.js',
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.json',
                    appendTsSuffixTo: [/\.vue$/] /* vue supprot for typescript */
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: sassLoader,
                        sass: sassLoader,
                        js: jsLoader
                    },
                    sourceMap: true
                }
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: jsLoader
            },
            {
                test: /\.css$/,
                loaders: cssExtractor.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader"
                        },
                        "postcss-loader",
                        "resolve-url-loader"
                    ]
                })
            },
            {
                test: /\.(sass|scss)$/,
                use: sassLoader
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].[hash].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].[hash].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "wwwroot")
        ]
    },
    plugins: [
        cssExtractor,
        new Webpack.ProvidePlugin({
            Vue: "vue/dist/vue.min.js"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new Webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer() /* add prefixes to css code: -moz-transform: */
                ]
            }
        })
    ]
};