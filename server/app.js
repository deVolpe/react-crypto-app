const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const passport = require('passport');

const authRoutes = require('./routes/auth');
const cardsRoutes = require('./routes/cards');
const keys = require('./config/keys');

const app = express();

mongoose
  .connect(keys.mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Db is connected'))
  .catch(console.error);

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(require('cors')());

app.use('/api/auth', authRoutes);
app.use('/api/cards', cardsRoutes);

module.exports = app;
