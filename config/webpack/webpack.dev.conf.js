const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base.conf');

const devConfig = {
  mode: 'development',
  context: __dirname,
  entry: {
    polyfill: 'babel-polyfill',
    app: [
      baseConfig.externals.paths.src,
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(s?css)$/,
        use: [{ loader: 'style-loader', options: { hmr: true } }],
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: baseConfig.externals.paths.build,
    watchContentBase: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      template: `${baseConfig.externals.paths.public}index.html`,
      showErrors: false,
      inject: 'body',
      filename: './index.html',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
};

module.exports = merge.smart(devConfig, baseConfig);
