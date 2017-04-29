let path = require('path');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: './src',
        historyApiFallback: true
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(ttf|woff2|woff|png|svg|jpeg|jpg)$/,
                loader: 'file-loader'
            }
        ]
    }
}