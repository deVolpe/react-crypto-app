const app = require('./app');

const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'production';

switch (env) {
  case 'development':
    app.use(require('morgan')('dev'));
    break;
  case 'production':
    app.use(require('morgan')('combined'));
    break;
  default:
    break;
}

app.listen(port, () => console.log(`Server has been started ${port}`));
