const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const keys = require('../config/database/keys');

module.exports = {
  async login(req, res) {
    const user = await User.findOne({
      email: req.body.email
    });

    if (user) {
      const isValidPassword = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (isValidPassword) {
        const token = jwt.sign(
          {
            email: user.email,
            userId: user._id
          },
          keys.jwt,
          { expiresIn: 3600 }
        );
        res.status(202).json({
          token: `Bearer ${token}`
        });
      } else {
        res.status(404).json({
          message: 'Password is not correct'
        });
      }
    } else {
      res.status(404).json({
        message: 'User not found'
      });
    }
  },

  async register(req, res) {
    const candidate = await User.findOne({
      email: req.body.email
    });

    if (candidate) {
      res.status(409).json({
        message: 'Email already exists'
      });
    } else {
      const salt = bcrypt.genSaltSync(10);

      const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, salt)
      });
      try {
        await user.save();
        res.status(201).json(user);
      } catch (e) {}
    }
  }
};
