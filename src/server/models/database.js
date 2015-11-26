var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
  firstName: String,
  lastName: String,
  email: String,
  places: Array,
  newsUpdates: Boolean
});

// var placesSchema = new Schema ({

// });

var User = mongoose.model('users', userSchema);

mongoose.connect('mongodb://localhost/mongo-user');

module.exports = User;