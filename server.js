const app = require('./app');

const port = process.env.PORT || 5000
// const env = process.env.NODE_ENV || 'production'

app.listen(port, () => console.log(`Server has been started ${port}`));
       