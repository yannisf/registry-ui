var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

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
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.png$/,
                use: ["file-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Sample Angular application!!',
            template: './src/index.ejs'
        })
    ]
};
