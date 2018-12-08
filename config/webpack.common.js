
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonProperties = require('./common.properties');

const config = {
    //
    resolve: {
        modules: [path.resolve(__dirname, commonProperties.app.dir), 'node_modules'],
        descriptionFiles: ['package.json'],
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
                use: "file-loader?publicPath=./&name=font/[name].[ext]"
              },
              {
                test: /\.(png|jpg|gif)$/,
                use: 'url-loader?limit=10000&publicPath=./&name=img/[name].[ext]'
              },
              {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ]
              },
              {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'less-loader',
                ]
              },
              {
                test: /\.js/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-proposal-export-default-from',
                            'react-hot-loader/babel',
                            ['@babel/plugin-proposal-decorators', { 'legacy': true}]
                        ]
                    }
                }]
              },
              {
                test: /\.js/,
                use: 'imports-loader?define=>false'
              },
              {
                test: /jquery\.flot\.resize\.js$/,
                use: 'imports-loader?this=>window'
              },
        ]
    },

    resolveLoader: {
        alias: {
            'rtlcss-loader': path.join(__dirname, 'rtlcss-loader.js'),
        }
    },
    
    plugins: [
        new webpack.DefinePlugin({
            WP_BASE_HREF: '/'
        }),
        new webpack.ContextReplacementPlugin(/\.locale/, 'empty-module', false, /js$/),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jquery': 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: `${commonProperties.app.dir}/index.html`,
            baseUrl: '/',
            xhtml: true,
        })
    ]
}

module.exports = config;