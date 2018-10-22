const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const axios = require("../../client/node_modules/axios");

const Setting = require("../../models/Setting");
const User = require("../../models/User");

const apiKey = keys.yelpKey;
const foodSearch = "https://api.yelp.com/v3/businesses/search?";
const radius = 40000;

// @route POST api/settings

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // get fields
    const settingFields = {};
    settingFields.user = req.user.id;
    if (req.body.cost) settingFields.cost = req.body.cost;
    if (req.body.location) settingFields.location = req.body.location;

    Setting.findOne({ user: req.user.id }).then(setting => {
      if (setting) {
        //Update
        Setting.findOneAndUpdate(
          { user: req.user.id },
          { $set: settingFields },
          { new: true }
        ).then(setting => res.json(setting));
      } else {
        // Create

        // Save setting
        new Setting(settingFields).save().then(setting => res.json(setting));
      }
    });
  }
);

// @route GET api/settings/current
router.get("/current", (req, res) => {
  Settings.findOne(req.body.id).then(setting => res.json(setting));
});

module.exports = router;
