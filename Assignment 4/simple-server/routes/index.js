var express = require('express');
var router = express.Router();

function renderhome(req, res, next) {
  res.render('index', { title: 'Express' });
}

/* GET home page. */
router.get('/', renderhome);

router.get('/index.html', renderhome);

module.exports = router;
