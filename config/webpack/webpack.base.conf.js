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
  output: {
    filename: `${PATHS.assets}js/[name].bundle.js`,
    path: PATHS.dist,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: ['node_modules']
  },
  resolveLoader: {
    extensions: ['.js', '.json'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }],
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: `${PATHS.assets}img`,
          publicPath: '/'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
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
              sourceMap: true
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
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].bundle.css`
    }),
    new CopyWebpackPlugin([
      {
        from: `${PATHS.public}${PATHS.assets}icons`,
        to: `${PATHS.assets}icons/[name].[ext]`
      }
    ])
  ]
};
