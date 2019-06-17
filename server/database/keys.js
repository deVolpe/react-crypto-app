module.exports = process.env.NODE_ENV === 'production'
  ? require('./keys._prod')
  : require('./keys._dev');
