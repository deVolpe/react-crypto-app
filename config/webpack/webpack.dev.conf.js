const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: `${baseWebpackConfig.externals.paths.assets}js/[name].bundle.js`,
    path: baseWebpackConfig.externals.paths.dist,
    publicPath: '/'
  },
  devServer: {
    port: 8081,
    contentBase: baseWebpackConfig.externals.paths.dist,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
});


module.exports = new Promise((res, rej) => {
  res(devWebpackConfig);
});