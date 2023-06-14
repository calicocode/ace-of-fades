const express = require("express");
const router = express.Router();

const Style = require("../models/Style.model");
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn.js");
const isAdmin = require("../middleware/isAdmin.js");

const fileUploader = require("../config/cloudinary.config");
const req = require("express/lib/request");

router.get("/my-styles", isLoggedIn, (req, res, next) => {
  User.findById(req.session.currentUser._id)
    .then((myStylesFromDB) => {
      // bonus -- deconstruct the object and remove the password

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

router.post(
  "/my-styles",
  fileUploader.single("imageURL"),
  isLoggedIn,
  (req, res, next) => {
    User.findByIdAndUpdate(req.session.currentUser._id, {
      $set: {
        myUploadedStyles: {
          title: req.body.title,
          slogan: req.body.slogan,
          imageURL: req.file.path,
        },
      },
    });
    res.redirect("/my-styles").catch((e) => {
      console.log("error getting list of users styles from DB", e);
      next(e);
    });
  }
);
/*       .then((newStyle) => {
        res.redirect("/my-styles");
      })
      .catch((e) => { */

/*         },
      },
    })
      .then((newStyle) => {
        res.redirect("/my-styles");
      })
      .catch((e) => { */
/*         console.log("error getting list of users styles from DB", e);
        next(e);
      });
  }
); */

module.exports = router;
