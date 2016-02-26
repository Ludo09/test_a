var webpack = require('webpack');

module.exports = {
    entry: {
        'a': './src/api.ts'
    },
    output: {
        path: './dist',
        filename: '[name].js',
        library: ['alib']
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [{test: /\.ts$/, loader: 'awesome-typescript-loader'}]
    }
};