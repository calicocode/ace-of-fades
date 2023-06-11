const express = require("express");
const router = express.Router();

const Style = require("../models/Style.model");
const User = require("../models/User.model");
/* const isLoggedIn = require("../middleware/isLoggedIn");
const Style = require("../models/Style.model"); */

// Display Hair Listing Page
router.get("/hair", (req, res, next) => {
  Style.find()
    .then((hairFromDB) => {
      const data = {
        hair: hairFromDB,
      };

      res.render("hair/hair-list", data);
    })
    .catch((e) => {
      console.log("error getting list of beards from DB", e);
      next(e);
    });
});

module.exports = router;
