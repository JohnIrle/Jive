const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const axios = require("../../client/node_modules/axios");

const apiKey = keys.yelpKey;
const foodSearch = "https://api.yelp.com/v3/businesses/search?";
const radius = 40000;

// @route GET api/settings/food
// @desc Return food
// @access Public
router.get("/food", (req, res) => {
  let position = Math.floor(Math.random() * 15);
  axios
    .get(
      foodSearch + "location=kansascity" + "&&radius=" + radius + "&&cost=1,2,3",
      { headers: { Authorization: "Bearer " + apiKey } }
    )
    .then(result => {
      res.json(result.data.business[position])
    })
    .catch(err => res.json(err));
});

// @route GET api/settings/food
// @desc Return food
// @access Public
router.get("/food/now", (req, res) => {
  let position = Math.floor(Math.random() * 15);
  axios
    .get(
      foodSearch + "location=kansascity&&open_now=true" + "&&radius=" + radius + "&&cost=1,2,3",
      { headers: { Authorization: "Bearer " + apiKey } }
    )
    .then(result => {
      res.json(result.data.business[position])
    })
    .catch(err => res.json(err));
});

// @route GET api/settings/activity
// @desc Return activity
// @access Public
router.get("/activity", (req, res) => {
  let position = Math.floor((Math.random() * 7));
  axios
    .get(
      foodSearch +
        "location=kansascity" +
        "&&radius=" +
        radius +
        "&&cost=1,2,3" +
        "&&categories=active,experiences,hiking,rock_climbing,waterparks,art",
      { headers: { Authorization: "Bearer " + apiKey } }
    )
    .then(result => {
      res.json(result.data.businesses[position]);
    })
    .catch(err => console.log(err));
});

// @route GET api/settings/activity/now
// @desc Return activity open now
// @access Public
router.get("/activity/now", (req, res) => {

  let position = Math.floor((Math.random() * 5));
  axios
    .get(
      foodSearch +
        "location=kansascity" +
        "&&radius=" +
        radius +
        "&&cost=1,2,3&&open_now=true",
      { headers: { Authorization: "Bearer " + apiKey } }
    )
    .then(result => {
      res.json(result.data.businesses[position]);
        "&&open_now=true" +
        "&&cost=1,2" +
        "&&categories=active,experiences,hiking,rock_climbing,waterparks,nightlife",
      { headers: { Authorization: "Bearer " + apiKey } }
    })
    .then(result => {
      res.json(result.data);
    })
    .catch(err => console.log(err));
});

module.exports = router;
