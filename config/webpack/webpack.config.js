const path = require('path');


module.exports = {
  entry: {
    app: '../../src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../build/'),
    publicPath: '/'
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(s?css)$/,
        use: [
          
        ]
      }
    ]
  }
}