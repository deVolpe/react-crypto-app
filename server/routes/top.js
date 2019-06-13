const express = require('express');
const controller = require('../controllers/top');

const router = express.Router();

router.get('', controller.getTopList);

module.exports = router;
