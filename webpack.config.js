var path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
});

module.exports = {
    entry: {
        application: './src/app/schoolApp/index.js',
    },
    output: {
        filename: '[name].js',
        path: '/home/yannis/Development/Registry/registry/target/registry',
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                })
            }, {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.png$/,
                use: 'file-loader?name=images/[name].[ext]'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        extractSass,
        new HtmlWebpackPlugin({
            title: 'Sample Angular application!!',
            template: './src/index.ejs'
        })
    ]
};
