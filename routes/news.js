const express = require('express');
const controller = require('../controllers/news');

const router = express.Router();


router.get('/all', controller.getAllNews);


module.exports = router;
