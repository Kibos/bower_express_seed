var express = require('express');
var router = express.Router();

var moment= require('moment');



// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
router.use(function (req, res, next) {
  console.log('-------------------------> Time:', moment().format());
  next();
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/reg', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Express' });
});

router.get('/test2', function(req, res, next) {
  res.render('test2', { title: 'Express' });
});



module.exports = router;
