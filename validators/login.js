const Validator = require('validator');

const isEmpty = require('./features/is-empty');

module.exports = function validateLoginInput(data) {
  const errors = {};
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }
  if (!Validator.isLength(data.password, { min: 6, max: 16 })) {
    errors.password = 'Password must have a range from 6 to 16 chars';
  }

  return { errors, isValid: isEmpty(errors) };
};
