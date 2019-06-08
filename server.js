const webpack = require('webpack');
const express = require('express');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

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
      publicPath: config.output.publicPath,
    }),
  );
  app.use(
    webpackHotMiddleware(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000,
    }),
  );
}

if (env === 'production') {
  app.use(require('morgan')('combined'));
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('*', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'build') });
  });
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json',
  );
  next();
});

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send('Internal Server Error');
  }
  next();
});

app.listen(port, () => console.log(`Server has been started ${port}`));
