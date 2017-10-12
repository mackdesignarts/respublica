var express = require('express');
var router = express.Router();
var Groups = require('../models/groups');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET */
router.get('/', function(req, res, next) {
  res.send({ 
    get: "Get"
  });
});

/* GET Groups */
router.get('/groups', function(req, res, next) {
  var allGroups = Groups;
  /*
  Groups.find({}, function(err, groups) {
    if (err) throw err;
    // object of all the groups
    console.log(groups);
    allGroups = groups;
  });
  */
  res.send(allGroups);
});


/* POST Search */
router.post('/search', function(req, res, next) {
  console.log(req.body);
  res.send({ 
    request: "recieved",
    success: true 
  });
});

/* GET Search */
router.get('/search', function(req, res, next) {
  res.send({ 
    get: "Get"
  });
});

module.exports = router;
