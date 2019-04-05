const express = require('express');
const authRoutes = require('./routes/auth');

const app = express();

const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'production'

app.use('/api/auth', authRoutes);



// switch(env) {
//   case 'development':

// }





app.listen(port, () => console.log(`Server has been started ${port}`));