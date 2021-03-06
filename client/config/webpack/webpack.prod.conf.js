const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const baseConfig = require('./webpack.base.conf');

const prodConfig = {
  mode: 'production',
  output: {
    filename: `${baseConfig.externals.paths.assets}js/[name].[hash].js`,
    path: baseConfig.externals.paths.build,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(s?css)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { publicPath: '' } },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin({}),
      new TerserPlugin({
        cache: true,
        parallel: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
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
          priority: 5,
          reuseExistingChunk: true,
          filename: `${
            baseConfig.externals.paths.assets
          }js/vendors.[chunkhash].js`,
        },
        axios: {
          test: /[\\/]node_modules[\\/]axios[\\/]/,
          priority: 10,
          reuseExistingChunk: true,
          filename: `${
            baseConfig.externals.paths.assets
          }js/axios.[chunkhash].js`,
        },
        react: {
          test: /[\\/]node_modules[\\/](react(-dom|-router|-redux|-select|-chartjs-2)?(-dom)?|redux(-thunk)?)|prop-types[\\/]/,
          priority: 20,
          reuseExistingChunk: true,
          filename: `${
            baseConfig.externals.paths.assets
          }js/react.[chunkhash].js`,
        },
        lodash: {
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          priority: 15,
          reuseExistingChunk: true,
          filename: `${
            baseConfig.externals.paths.assets
          }js/lodash.[chunkhash].js`,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${baseConfig.externals.paths.assets}css/[name].[hash].css`,
    }),
    new HtmlWebpackPlugin({
      hash: false,
      inject: 'body',
      template: `${baseConfig.externals.paths.public}index.html`,
      filename: './index.html',
      showErrors: false,
    }),
  ],
};

module.exports = merge.smart(prodConfig, baseConfig);
