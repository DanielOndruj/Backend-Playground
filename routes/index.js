var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
	var data = {
		message: 'hello world'
	};


  res.send(data);
});

module.exports = router;
