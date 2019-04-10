const express = require('express');
const controller = require('../controllers/top');

const router = express.Router();

router.get('/', controller.top);

module.exports = router;
