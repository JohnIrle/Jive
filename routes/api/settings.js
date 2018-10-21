const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const axios = require("../../client/node_modules/axios");

const Setting = require("../../models/Setting");
const User = require("../../models/User");

router.get("/test", (req, res) => {
  res.json("it works");
});

// @route POST api/settings
router.post("/", (req, res) => {});

// @route GET api/settings/current
router.get("/current", (req, res) => {
  Settings.findOne(req.id).then(setting => res.json(setting));
});

// @route GET api/settings/food/multiple
// @desc Return current user
// @access Private
router.get(
  "/food/multiple",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

// @route GET api/users/current
// @desc Return current user
// @access Private
router.get(
  "/food/single",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    axios
      .get(
        "https://api.yelp.com/v3/businesses/search?term='Delivery'&location=" +
          req.body.location +
          "&radius=40000&price=" +
          req.body.cost
      )
      .then(result => res.json(result))
      .catch(error => res.json(error));
  }
);

// @route GET api/users/current
// @desc Return current user
// @access Private
router.get(
  "/activity/multiple",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

// @route GET api/users/current
// @desc Return current user
// @access Private
router.get(
  "/activity/single",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
