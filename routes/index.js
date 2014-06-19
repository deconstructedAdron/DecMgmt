var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    var apikey = process.env.ORCHESTRATE_API_KEY;

    res.render('index', { title: 'Express + ' + apikey });
});

module.exports = router;
