const express = require("express");
const router = express.Router();

const Style = require("../models/Style.model");
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");

// READ: display beards
router.get("/styles", isLoggedIn, (req, res, next) => {
  Style.find()
    .then((stylesFromDB) => {
      const data = {
        styles: beardsFromDB,
      };

      res.render("admin/styles", data);
    })
    .catch((e) => {
      console.log("error getting list of styles from DB", e);
      next(e);
    });
});
