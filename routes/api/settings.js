const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

const Setting = require('../../models/Setting');
const User = require('../../models/User');

// @route POST api/settings

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  // get fields
  const settingFields = {};
  settingFields.user = req.user.id;
  if (req.body.cost) settingFields.cost = req.body.cost;
  if (req.body.location) settingFields.location = req.body.location;

  Setting.findOne({ user: req.user.id }).then(setting => {
    if (setting) {
      // Update
      Setting.findOneAndUpdate({ user: req.user.id }, { $set: settingFields }, { new: true }).then(
        result => res.json(result)
      );
    } else {
      // Create

      // Save setting
      new Setting(settingFields).save().then(result => res.json(result));
    }
  });
});

// @route GET api/settings/current
router.get('/current', (req, res) => {
  Setting.findOne(req.body.id).then(setting => res.json(setting));
});

module.exports = router;
