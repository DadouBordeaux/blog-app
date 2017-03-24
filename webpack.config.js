'use strict';

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const liveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: {
        'public': './src/front/app.md.js',
    },
    output: {
        filename: './angular-apps/[name]/bundle.js'
    },
    plugins: [
        new liveReloadPlugin(),
        // new UglifyJSPlugin({
        //     sourceMap: false
        // })
    ],
    module: {
        rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['ng-annotate-loader',
            {
            loader: 'babel-loader',
            query: {
                presets: ['env']
            }},
        ]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },{
            test: /\.html$/,
            use: ['html-loader']
        }]
    }
};
