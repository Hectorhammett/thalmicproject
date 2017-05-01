let path = require('path');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    devtool: 'source-map',
    entry: {
        index: ["babel-polyfill",'./index.js']
    },
    output: {
        path: __dirname + '/dist/javascript',
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
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }],
            },
            {
                test: /\.css/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|woff2|woff|png|svg|jpeg|jpg|eot)$/,
                loader: 'file-loader'
            }
        ]
    }
}