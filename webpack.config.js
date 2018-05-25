const webpack = require('webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const config = {
    target: 'node',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: []
    },
    plugins: [
        new CleanWebpackPlugin('./dist')
    ]
}

module.exports = config