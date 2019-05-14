const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base.conf');

const devConfig = {
  mode: 'development',
  entry: {
    polyfill: 'babel-polyfill',
    app: ['webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false']
  },
  output: {
    filename: `${baseConfig.externals.paths.assets}js/[name].bundle.js`,
    path: baseConfig.externals.paths.dist,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(s?css)$/,
        use: [{ loader: 'style-loader', options: { hmr: true } }]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: baseConfig.externals.paths.dist,
    watchContentBase: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      template: `${baseConfig.externals.paths.public}index.html`,
      showErrors: false,
      inject: 'body',
      filename: './index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
};

module.exports = merge.smart(devConfig, baseConfig);
