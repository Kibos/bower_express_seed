/**
 * Created by norway on 14-4-2.
 */
var mongodb = require('./DB');
var Schema = mongodb.mongoose.Schema;

/**
 * @type {Schema}
 */
var UserSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  address:[{}],
  describe: String,
  class: String,
  status: {type: Boolean, default: false},
  phone: String,
  cellphone: String,
  role: {
    type: String,
    default: 'user'
  },
  roles:[],
  userInfo:[{}],
  hashedPassword: String,
  provider: String,
  salt: String,
  create_date: {type: Date, default: Date.now}
});

// 创建User的mongodb模型
var User = mongodb.mongoose.model('users', UserSchema);

module.exports = User;
