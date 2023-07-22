const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        home: './src/home.js',
        about: './src/about.js',
        menu: './src/menu.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "Coffee_Shop"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource',
            },
        ],
    },
};