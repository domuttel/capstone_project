var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema ({
  firstName: String,
  lastName: String,
  email: String,
  newsUpdates: Boolean
});

var User = mongoose.model('items', itemSchema);

module.exports = User;