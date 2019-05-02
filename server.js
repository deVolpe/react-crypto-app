const webpack = require('webpack');
const express = require('express');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = require('./app');
const config = require('./config/webpack/webpack.dev.conf');

const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'production';

if (env === 'development') {
  const compiler = webpack(config);
  app.use(require('morgan')('dev'));
  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    })
  );
}

if (env === 'production') {
  app.use(require('morgan')('combined'));
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile('index.html', path.join(__dirname, 'dist'));
  });
}

app.listen(port, () => console.log(`Server has been started ${port}`));
