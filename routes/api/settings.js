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
router.post("/", (req, res) => {
  Settings.findOneAndUpdate(req.body.id).then();
});

// @route GET api/settings/current
router.get("/current", (req, res) => {
  Settings.findOne(req.body.id).then(setting => res.json(setting));
});

// @route GET api/settings/food/multiple
// @desc Return current user
// @access Private
router.post(
  "/food",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    axios
      .get(
        foodSearch +
          "location=" +
          req.body.location +
          "&&radius=" +
          radius +
          "&&cost=" +
          req.body.cost,
        { headers: { Authorization: "Bearer " + apiKey } }
      )
      .then(result => {
        res.json(result.data);
      })
      .catch(err => res.json(err));
  }
);

// @route GET api/users/current
// @desc Return current user
// @access Private
router.post(
  "/activity",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    axios
      .get(
        foodSearch +
          "location=" +
          req.body.location +
          "&&radius=" +
          radius +
          "&&cost=" +
          req.body.cost +
          "&&categories=active,experiences,hiking,rock_climbing,waterparks",
        { headers: { Authorization: "Bearer " + apiKey } }
      )
      .then(result => {
        res.json(result.data);
      })
      .catch(err => console.log(err));
  }
);

module.exports = router;
