var express = require('express');
var router = express.Router();

// Import controllers to route
const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get(['/', '/index'], ctrlMain.index);


module.exports = router;
