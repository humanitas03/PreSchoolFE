
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devServerProperties = require('./devServer.properties');
const common = require('./webpack.common');

const config = {
    mode: devServerProperties.env,

    devtool: '#cheap-module-eval-source-map',

    entry: devServerProperties.entry,

    output: {
        path: path.join(process.cwd(), './dist'),
        filename: '[name].[hash].js',
        libraryTarget: 'window',
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(devServerProperties.env),
            }
        }),

        new webpack.HotModuleReplacementPlugin(),

        // new CopyWebPackPlugin([{
        //     from: 'resource',
        //     to: 'res',
        //     context: path.join(process.cwd()),
        // }]),

        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        })
    ],

    devServer: {
        historyApiFallback: true, 
        stats: 'minimal',
        inline: true,
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*'},
        proxy: devServerProperties.proxy
    }
}

module.exports = webpackMerge(common, config);