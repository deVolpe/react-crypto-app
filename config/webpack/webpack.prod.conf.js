const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.conf');

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    filename: `${baseWebpackConfig.externals.paths.assets}js/[name].[hash].bundle.js`,
    path: baseWebpackConfig.externals.paths.dist,
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      template: `${baseWebpackConfig.externals.paths.public}index.html`,
      filename: './index.html'
    })
  ]
});

module.exports = new Promise((res, rej) => {
  res(prodWebpackConfig);
});
