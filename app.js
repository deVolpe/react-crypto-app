const express = require('express');
const authRoutes = require('./routes/auth');
const mainRoutes = require('./routes/main');
const newsRoutes = require('./routes/news');
const topRoutes = require('./routes/top');

const app = express();

app.use('/api/auth', authRoutes);
app.use('/api/main', mainRoutes);
// app.use('/api/news', newsRoutes);
// app.use('/api/top', topRoutes);



module.exports = app;