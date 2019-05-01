const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.conf');

const devConfig = {
  mode: 'development',
  output: {
    filename: `${baseConfig.externals.paths.assets}js/[name].js`,
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
    overlay: {
      warnings: false,
      errors: true
    }
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
};

module.exports = merge.smart(devConfig, baseConfig);
