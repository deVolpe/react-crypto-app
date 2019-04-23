const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const passport = require('passport');

const authRoutes = require('./routes/auth');
const mainRoutes = require('./routes/main');
const newsRoutes = require('./routes/news');
const topRoutes = require('./routes/top');
const keys = require('./config/database/keys');

const app = express();

mongoose
  .connect(keys.mongoURI, { useCreateIndex: true, useNewUrlParser: true })
  .then(() => console.log('Db is connected'))
  .catch(console.error);

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(require('cors')());

app.use('/auth', authRoutes);
app.use('/main', mainRoutes);
app.use('/news', newsRoutes);
app.use('/top', topRoutes);

module.exports = app;
