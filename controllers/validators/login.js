const Validator = require('validator');

const isEmpty = require('./features/isEmpty');

module.exports = function validateLoginInput(data) {
  const errors = {};
  const email = !isEmpty(data.email) ? data.email : '';
  const password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(email)) {
    errors.email = 'Email is required';
  }
  if (!Validator.isLength(password, { min: 6, max: 16 })) {
    errors.password = 'Password must have a range from 6 to 16 chars';
  }
  if (Validator.isEmpty(password)) {
    errors.password = 'Password is required';
  }

  return { errors, isValid: isEmpty(errors) };
};
