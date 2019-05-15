const mongoURI =
  'mongodb+srv://de_Volpe:D8dmvtiAc9Lt0STk@react-crypto-app-vdgxs.mongodb.net/test?retryWrites=true' ||
  process.env.URI;
const jwt = 'dev-jwt' || process.env.JWT;

module.exports = {
  mongoURI,
  jwt
};
