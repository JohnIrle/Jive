const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  facebookId: {
    type: String
  }
});

module.exports = User = mongoose.model("users", UserSchema);
