const express = require("express");
const router = express.Router();

const Style = require("../models/Style.model");
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn.js");
const isAdmin = require("../middleware/isAdmin.js");

const fileUploader = require("../config/cloudinary.config");

router.get("/my-styles", isLoggedIn, (req, res, next) => {
  User.find()
    .then((myStylesFromDB) => {
      console.log(myStylesFromDB);
      const data = {
        myStyles: myStylesFromDB,
      };
      res.render("customer/my-styles", data);
    })
    .catch((e) => {
      console.log("error getting list of users styles from DB", e);
      next(e);
    });
});

module.exports = router;
