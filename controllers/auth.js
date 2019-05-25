const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const keys = require('../config/database/keys');
const validateRegisterInput = require('./validators/register');
const validateLoginInput = require('./validators/login');

module.exports = {
  async login(req, res) {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
      return res.status(401).json(errors);
    }

    const user = await User.findOne({
      email: req.body.email,
    });

    if (user) {
      const isMatchPassword = await bcrypt.compare(
        req.body.password,
        user.password,
      );

      if (isMatchPassword) {
        const token = jwt.sign(
          {
            email: user.email,
            userId: user._id,
          },
          keys.jwt,
          { expiresIn: 3600 },
        );
        return res.status(202).json({
          token: `Bearer ${token}`,
        });
      }
      errors.password = 'Password is incorrect';
      return res.status(404).json(errors);
    }
    errors.email = 'User not found';
    return res.status(404).json(errors);
  },

  async register(req, res) {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
      return res.status(401).json(errors);
    }

    const candidate = await User.findOne({
      email: req.body.email,
    });

    if (candidate) {
      errors.email = 'Email already exists';
      return res.status(409).json(errors);
    }
    bcrypt
      .genSalt(10)
      .then((salt) => {
        bcrypt
          .hash(req.body.password, salt)
          .then((hash) => {
            const user = new User({
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then(user => res.status(201).json(user))
              .catch(console.error);
          })
          .catch(console.error);
      })
      .catch(console.error);
  },
};
