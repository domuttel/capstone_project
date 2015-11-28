var path = require('path');
var express = require('express');
var router = express.Router();

router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

module.exports = router;

// var express = require('express');
// var router = express.Router();
// var User = require('../models/database.js');

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/users', function(req, res, next) {
//   User.find({}, function(err, data){
//     if (err) {
//       res.json(err);
//     }
//     else if (data.length === 0) {
//       res.json({message: 'There are no users in the database'});
//     }
//     else {
//       res.json(data);
//     }
//   });
// });

// router.post('/users', function (req, res, next) {
//   var newUser = new User({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, places: req.body.places, newsUpdates: req.body.newsUpdates});
//   newUser.save(function(err, data) {
//     if (err) {
//       res.json(err);
//     }
//     else {
//       res.json(data);
//     }
//   });
// });

// router.put('/users/:id', function(req, res, next) {
//   var id = {_id: req.params.id};
//   var update = {firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, places: req.param.places, newsUpdates: req.body.email};
//   var options = {new: true};

//   User.findOneAndUpdate(id, update, options, function(err, data){
//     if (err) {
//       res.json(err.message);
//     }
//     else {
//       res.json(data);
//     }
//   });
// });

// router.delete('/users/:id', function(req, res, next) {
//   User.findOneAndRemove({_id: req.params.id}, function(err, data){
//     if (err) {
//       res.json(err.message);
//     }
//     else if (data.length === 0) {
//       res.json({message: 'A user with that ID does not exist in this database.'});
//     }
//     else {
//       res.json({message: 'User has been succesfully deleted.'});
//     }
//   });
// });



// module.exports = router;
