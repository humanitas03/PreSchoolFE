
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const rimraf = require('rimraf');
const path = require('path');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonProperties = require('./common.properties');
const prodProperties = require('./prod.properties');
const common = require('./webpack.common');

rimraf.sync(path.join(process.cwd(), commonProperties.app.output));

const config = {
    mode: prodProperties.env,

    entry: prodProperties.entry,

    output: {
        path: path.join(process.cwd(), commonProperties.app.output),
        publicPath: prodProperties.publicPath,
        filename: '[name].[hash].js',
        libraryTarget: 'window',
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(prodProperties.env),
            }
        }),

        new webpack.HotModuleReplacementPlugin(),

        new CopyWebPackPlugin([{
            from: 'resource',
            to: 'res',
            context: path.join(process.cwd()),
        }]),

        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        })
    ],
}

if (prodProperties.noErrors === true) config.plugins.push(new webpack.NoEmitOnErrorsPlugin());
if (prodProperties.uglify) config.plugins.push(new webpack.optimize.UglifyJsPlugin(prodProperties.uglify));

module.exports = webpackMerge(common, config);