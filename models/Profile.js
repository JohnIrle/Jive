const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({});

module.exports = Profile = mongoose.model("profile", ProfileSchema);