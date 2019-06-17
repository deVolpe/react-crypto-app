const express = require('express');
const passport = require('passport');

const controller = require('../controllers/cards');

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), controller.getAllCards);
router.post('/', passport.authenticate('jwt', { session: false }), controller.createCard);
router.delete('/', passport.authenticate('jwt', { session: false }), controller.deleteCard);

module.exports = router;
