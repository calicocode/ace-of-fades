const express = require("express");
const router = express.Router();

const Style = require("../models/Style.model");
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn.js");
const isAdmin = require("../middleware/isAdmin.js");

// READ: display all styles
router.get("/manage-styles", isLoggedIn, isAdmin, (req, res, next) => {
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
});

// CREATE: display form to add new style
router.get(
  "/manage-styles/create-beard-style",
  isLoggedIn,
  isAdmin,
  (req, res, next) => {
    res.render("admin/create-beard-style");
  }
);

// CREATE: process form
router.post(
  "/manage-styles/create-new-style",
  isLoggedIn,
  isAdmin,
  (req, res, next) => {
    const newStyle = {
      beardStyle: req.body.beardStyle,
      hairStyle: req.body.hairStyle,
      primaryImage: req.body.primaryImage,
      description: req.body.rating,
      additionalImages: req.body.additionalImages,
      celebrities: [
        {
          nameOfCelebrity: req.body.nameOfCelebrity,
          image: req.body.image,
        },
      ],
    };

    Style.create(newStyle)
      .then((newStyle) => {
        res.redirect("/manage-styles");
      })
      .catch((e) => {
        console.log("error creating new style", e);
        next(e);
      });
  }
);

// UPDATE: display form
router.get(
  "/manage-styles/:styleID/edit",
  isLoggedIn,
  isAdmin,
  async (req, res, next) => {
    const { styleID } = req.params;

    try {
      const styleDetails = await Style.findById(styleID);

      res.render("admin/edit-style", {
        style: styleDetails,
      });
    } catch (e) {
      next(e);
    }
  }
);

// UPDATE: process form
router.post(
  "/manage-styles/:styleID/edit",
  isLoggedIn,
  isAdmin,
  (req, res, next) => {
    const { styleID } = req.params;
    const {
      beardStyle,
      hairStyle,
      primaryImage,
      additionalImages,
      celebrities,
    } = req.body;

    Style.findByIdAndUpdate(
      styleID,
      { beardStyle, hairStyle, primaryImage, additionalImages, celebrities },
      { new: true }
    )
      .then((updatedStyle) => res.redirect(`/manage-styles/${updatedStyle.id}`)) // go to the details page to see the updates
      .catch((error) => next(error));
  }
);

// DELETE: delete style
router.post(
  "/manage-styles/:styleID/delete",
  isLoggedIn,
  isAdmin,
  (req, res, next) => {
    const { styleID } = req.params;

    Style.findByIdAndDelete(styleID)
      .then(() => res.redirect("/manage-styles"))
      .catch((error) => next(error));
  }
);

module.exports = router;
