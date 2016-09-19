var mongoose = require('mongoose');
var conf = require('../settings');
mongoose.connect(conf.dbUrl);

exports.mongoose = mongoose;