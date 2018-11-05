const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');

module.exports = {
    entry: './components/js/main.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, loader: 'babel-loader'
            },
            {
                test: require.resolve('jquery'),
                use: [
                    {
                        loader: 'expose-loader',
                        options: '$'
                    },
                    {
                        loader: 'expose-loader',
                        options: 'jQuery'
                    }
                ]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
              },
        ]
    },
    devServer:{
        port: 12450,
        historyApiFallback:true,
        hot:true,
        inline:true
    },
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:12450' }),
        new webpack.HotModuleReplacementPlugin(),
        new uglify(),
        ]
}