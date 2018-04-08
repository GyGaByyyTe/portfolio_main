const mongoose = require('mongoose');
const bCrypt = require('bcryptjs');
const Shema = mongoose.Schema;

const userShema = new Shema({
  login: {
    type: String,
    unique: true,
    required: true
  },
  hash: String
});

userShema.methods.setPassword = function(password) {
  this.hash = bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

userShema.methods.validPassword = function(password) {
  return bCrypt.compareSync(password, this.hash);
};

mongoose.model('user', userShema);
