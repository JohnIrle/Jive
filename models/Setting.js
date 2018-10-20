const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SettingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  cost: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Setting = mongoose.model("setting", SettingSchema);
