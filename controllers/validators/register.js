const Validator = require('validator');

const isEmpty = require('./features/isEmpty');

module.exports = function validateRegisterInput(data) {
  const errors = {};
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.passwordConfirm = !isEmpty(data.passwordConfirm)
    ? data.passwordConfirm
    : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }
  if (!Validator.isLength(data.password, { min: 6, max: 16 })) {
    errors.password = 'Password must have a range from 6 to 16 chars';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }
  if (Validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = 'This input is required';
  }
  if (!Validator.equals(data.password, data.passwordConfirm)) {
    errors.passwordConfirm = 'Passwords are not match';
  }

  return { errors, isValid: isEmpty(errors) };
};
