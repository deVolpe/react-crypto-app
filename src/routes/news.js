const express = require('express');
const controller = require('../controllers/news');


const router = express.Router();


router.get('/news', controller.getAllNews);
router.post('/register', controller.register);

module.exports = router;