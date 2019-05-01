const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = require('./webpack.base.conf');

const prodConfig = {
  mode: 'production',
  output: {
    filename: `${baseConfig.externals.paths.assets}js/[name].[hash].js`,
    path: baseConfig.externals.paths.dist,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(s?css)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { publicPath: '' } }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin({}),
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      })
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${baseConfig.externals.paths.assets}css/[name].[hash].css`
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${baseConfig.externals.paths.public}index.html`,
      filename: './index.html'
    })
  ]
};

module.exports = merge.smart(prodConfig, baseConfig);
