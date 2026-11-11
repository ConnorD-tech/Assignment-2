var express = require('express');
var router = express.Router();

/* GET home page. */
//When its "/" go to index.ejs
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); 
});

/* GET home page. */
//When its "/" go to index.ejs
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' }); 
});

/* GET aboutus page. */
//When its "/" go to index.ejs
router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', { title: 'About Us' }); 
});

/* GET products page. */
//When its "/" go to index.ejs
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' }); 
});


/* GET contactus page. */
//When its "/" go to index.ejs
router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'Contact Us' }); 
});
module.exports = router;


