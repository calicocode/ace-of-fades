const express = require("express");
const router = express.Router();

const Style = require("../models/Style.model");
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn.js");
const isAdmin = require("../middleware/isAdmin.js");

// READ: display beards
router.get(
  "/manage-styles",
  /*  isLoggedIn, */
  /* isAdmin, */ (req, res, next) => {
    Style.find()
      .then((stylesFromDB) => {
        const data = {
          styles: stylesFromDB,
        };

        res.render("admin/manage-styles", data);
      })
      .catch((e) => {
        console.log("error getting list of styles from DB", e);
        next(e);
      });
  }
);

module.exports = router;
