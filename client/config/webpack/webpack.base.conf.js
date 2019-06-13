const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../../src/'),
  build: path.join(__dirname, '../../../build/'),
  config: path.join(__dirname, '../postcss/'),
  public: path.join(__dirname, '../../public/'),
  assets: 'assets/',
};

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    polyfill: 'babel-polyfill',
    app: PATHS.src,
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: ['node_modules'],
  },
  resolveLoader: {
    extensions: ['.js', '.json'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader', options: { emitError: true } },
        ],
        exclude: '/node_modules/',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:base64:5].[ext]',
          outputPath: `${PATHS.assets}img`,
          publicPath: '/',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:base64:5].[ext]',
          outputPath: `${PATHS.assets}fonts`,
          publicPath: '/',
        },
      },
      {
        test: /\.(s?css)$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: true,
              import: true,
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]_[local]__[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: `${PATHS.config}postcss.config.js`,
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              url: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: `${PATHS.public}${PATHS.assets}icons`,
        to: `${PATHS.assets}icons/[name].[ext]`,
      },
    ]),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
  ],
};
