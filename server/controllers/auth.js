const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const keys = require('../config/keys');
const validateRegisterInput = require('./validators/register');
const validateLoginInput = require('./validators/login');
const errorHandler = require('../utils/errorHandler');

module.exports = {
  async loginUser(req, res) {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
      return res
        .status(401)
        .json(errors)
        .end();
    }

    try {
      const user = await User.findOne({
        email: req.body.email,
      })
        .lean()
        .exec();

      if (user) {
        const isMatchPassword = await bcrypt.compare(
          req.body.password,
          user.password,
        );

        if (isMatchPassword) {
          const token = jwt.sign(
            { email: user.email, userId: user._id },
            keys.jwt,
            { expiresIn: 3600 },
          );
          return res.json({ token: `Bearer ${token}` }).end();
        }
        errors.password = 'Password is incorrect';
        return res
          .status(404)
          .json(errors)
          .end();
      }
      errors.email = 'User not found';
      return res.status(404).json(errors);
    } catch (err) {
      errorHandler(res, err);
    }
  },

  async registerUser(req, res) {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
      return res.status(401).json(errors);
    }

    try {
      const candidate = await User.findOne({
        email: req.body.email,
      })
        .lean()
        .exec();

      if (candidate) {
        errors.email = 'Email already exists';
        return res
          .status(409)
          .json(errors)
          .end();
      }
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);

      const user = new User({
        email: req.body.email,
        password: hash,
      });

      await user.save();
      return res.send('All done').end();
    } catch (err) {
      errorHandler(res, err);
    }
  },
};
