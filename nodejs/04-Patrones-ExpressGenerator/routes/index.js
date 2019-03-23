var express = require('express');
var router = express.Router();
var controller = require('../controllers/mainController');

/* GET home page. */
router.get('/', controller.indexFunction);

/* GET about. */
router.get('/about', controller.aboutFunction);

module.exports = router;
