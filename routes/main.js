const express = require('express');
const controller = require('../controllers/main');

const router = express.Router();

router.get('/all', controller.getAllCryptoCards);

module.exports = router;
