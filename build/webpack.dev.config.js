'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const config = require('../config')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: config.path.client,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'index.js'
  ],
  output: {
    path: config.path.dist,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    root: config.path.client
  },
  module: {
    loaders: [
      { test: /\.js/, loader: 'ng-annotate!babel', exclude: /node_modules/ },
      { test: /\.html/, loader: 'raw' },
      { test: /\.css/, loader: 'style!css!postcss' },
      { test: /\.scss/, loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap' },
      { test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, loader: 'url?limit=10000' },
      { test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, loader: 'url?limit=10000' },
      { test: /\.json/, loader: 'json' }
    ]
  },
  postcss: [autoprefixer],
  // sassLoader: {
  //   data: '@import "theme/_config.scss";',
  //   includePaths: [config.path.client]
  // },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks (module) {
        return module.resource && module.resource.indexOf(path.join(config.path.client)) === -1
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(config.path.client, 'index.html'),
      favicon: path.join(config.path.client, 'static/favicon.ico'),
      inject: true
    })
  ]
}
