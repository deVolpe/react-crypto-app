const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base.conf');

const devConfig = {
  mode: 'development',
  output: {
    filename: `${baseConfig.externals.paths.assets}js/bundle.js`,
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
    overlay: {
      warnings: false,
      errors: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      template: `${baseConfig.externals.paths.public}index.html`,
      showErrors: false,
      inject: false
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
