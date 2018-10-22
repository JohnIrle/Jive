const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const axios = require("../../client/node_modules/axios");
const yelp = require("yelp-fusion");

const Setting = require("../../models/Setting");
const User = require("../../models/User");

const apiKey = keys.yelpKey;
const foodSearch = "https://api.yelp.com/v3/businesses/search?";
const eventSearch = "https://api.yelp.com/v3/events";
const foodterm = "food";
const activityterm = "";
const radius = 40000;

router.get("/test", (req, res) => {
  res.json("it works");
});

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

// @route GET api/settings/food
// @desc Return food
// @access Public
router.get("/food", (req, res) => {
  let position = Math.floor(Math.random() * 15);
  axios
    .get(
      foodSearch + "location=kansascity" + "&&radius=" + radius + "&&cost=1,2",
      { headers: { Authorization: "Bearer " + apiKey } }
    )
    .then(result => {
      res.json(result.data.business[position]);
    })
    .catch(err => res.json(err));
});

// @route GET api/settings/activity
// @desc Return activity
// @access Public
router.get("/activity", (req, res) => {
  let position = Math.floor(Math.random() * 15);
  axios
    .get(
      foodSearch +
        "location=kansascity" +
        "&&radius=" +
        radius +
        "&&cost=1,2" +
        "&&categories=active,experiences,hiking,rock_climbing,waterparks,nightlife",
      { headers: { Authorization: "Bearer " + apiKey } }
    )
    .then(result => {
      res.json(result.data.business[position]);
    })
    .catch(err => console.log(err));
});

// @route GET api/settings/activity/now
// @desc Return activity open now
// @access Public
router.get("/activity/now", (req, res) => {
  axios
    .get(
      foodSearch +
        "location=kansascity" +
        "&&radius=" +
        radius +
        "&&open_now=true" +
        "&&cost=1,2" +
        "&&categories=active,experiences,hiking,rock_climbing,waterparks,nightlife",
      { headers: { Authorization: "Bearer " + apiKey } }
    )
    .then(result => {
      res.json(result.data);
    })
    .catch(err => console.log(err));
});

// @route GET api/settings/food/now
// @desc Return food open now
// @access Public

router.get("/food/now", (req, res) => {
  axios
    .get(
      foodSearch +
        "location=kansascity" +
        "&&radius=" +
        radius +
        "&&open_now=true" +
        "&&cost=1,2",
      { headers: { Authorization: "Bearer " + apiKey } }
    )
    .then(result => {
      res.json(result.data);
    })
    .catch(err => console.log(err));
});

module.exports = router;
