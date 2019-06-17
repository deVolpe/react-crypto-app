const Validator = require('validator');
const { isEmpty } = require('lodash');

module.exports = function validateRegisterInput(data) {
  const errors = {};
  const email = !isEmpty(data.email) ? data.email : '';
  const password = !isEmpty(data.password) ? data.password : '';
  const passwordConfirm = !isEmpty(data.passwordConfirm)
    ? data.passwordConfirm
    : '';

  if (!Validator.isEmail(email)) {
    errors.email = 'Email invalid';
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
  if (Validator.isEmpty(passwordConfirm)) {
    errors.passwordConfirm = 'This field is required';
  }
  if (!Validator.equals(password, passwordConfirm)) {
    errors.passwordConfirm = 'Passwords don\'t match';
  }

  return { errors, isValid: isEmpty(errors) };
};
