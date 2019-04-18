const express = require('express');
const passport  = require('passport');

const controller = require('../controllers/main');

const router = express.Router();

router.get('/cards', passport.authenticate('jwt', { session: false }), controller.getAllCryptoCards);
router.post('/cards/', passport.authenticate('jwt', { session: false }), controller.create);
router.delete('/cards/:id', passport.authenticate('jwt', { session: false }), controller.delete);

module.exports = router;
