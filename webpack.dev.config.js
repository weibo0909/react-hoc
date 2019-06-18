const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    context: path.resolve('./src'),
    devtool: 'eval-source-map',
    entry: __dirname + '/src/study/main.js',
    output: {
        path: __dirname + "/public",
        filename: "js/bundle-dev.js"
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        host: 'localhost',
        port: 8089,
        inline: true // 实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader','postcss-loader','sass-loader']
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','postcss-loader','sass-loader']
            },
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'index.html'
        })
    ]
}