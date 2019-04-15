const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../../src/'),
  dist: path.join(__dirname, '../../dist/'),
  config: path.join(__dirname, '../../config/'),
  public: path.join(__dirname, '../../public/'),
  assets: 'assets/'
};

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    polyfill: 'babel-polyfill',
    app: PATHS.src
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:base64:5].[ext]',
          outputPath: `${PATHS.assets}img`,
          publicPath: '/'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:base64:5].[ext]',
          outputPath: `${PATHS.assets}fonts`,
          publicPath: '/'
        }
      },
      {
        test: /\.(s?css)$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: true,
              import: true,
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]_[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: `${PATHS.config}postcss/postcss.config.js`
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              modules: true,
              sourceMap: true,
              url: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[hash:base64:5].bundle.css`
    }),
    new CopyWebpackPlugin([
      {
        from: `${PATHS.public}${PATHS.assets}icons`,
        to: `${PATHS.assets}icons/[name].[ext]`
      }
    ])
  ]
};
