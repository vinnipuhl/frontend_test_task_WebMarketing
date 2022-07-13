const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
          },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Web Marketing',
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    options: {
                    importLoaders: 1,
                    }
                },
                // {
                //     loader: 'postcss-loader'
                // }
                ]
            },
            // {
            //     test: /\.(scss|css)$/,
            //     use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            // },
        ],
    }
}