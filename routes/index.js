var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
	var data = {
		message: 'hello world'
	};


  res.send(data);
});

router.post('/profile', function (req, res, next) {
	
	req.checkBody('name', 'Name is empty').notEmpty()

	req.checkBody('height', 'Height is empty').notEmpty()

	req.checkBody('height', 'Height is invalid').isInt()

	var valErrors = req.validateErrors()

	if(valErrors) {
		var data = {
			error : 'Invalid Request',
			message : valErrors
		};

		return res.send(data);
	}

	var profile = {
		name: req.body.name,
		height : req.body.height
	};

	res.send(profile);
}

module.exports = router;
