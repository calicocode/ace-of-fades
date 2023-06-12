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
router
  .get("/manage-styles/create", isLoggedIn, isAdmin, (req, res, next) => {
    res.render("manage-styles/create");
  })
  .catch((e) => {
    console.log("error displaying the manage styles create form", e);
    next(e);
  });

// CREATE: process form
router.post("/manage-styles/create", isLoggedIn, isAdmin, (req, res, next) => {
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
});

// UPDATE: display form
router.get(
  "/manage-styles/:styleID/edit",
  isLoggedIn,
  isAdmin,
  async (req, res, next) => {
    const { styleID } = req.params;

    try {
      const styleDetails = await Style.findById(styleID);

      res.render("manage-styles/style-edit.hbs", {
        style: styleDetails,
      });
    } catch (e) {
      next(e);
    }
  }
);

// UPDATE: process form
router.post("/styles/:bookId/edit", isLoggedIn, (req, res, next) => {
  const { bookId } = req.params;
  const { title, description, author, rating } = req.body;

  Book.findByIdAndUpdate(
    bookId,
    { title, description, author, rating },
    { new: true }
  )
    .then((updatedBook) => res.redirect(`/books/${updatedBook.id}`)) // go to the details page to see the updates
    .catch((error) => next(error));
});

// DELETE: delete book
router.post("/books/:bookId/delete", isLoggedIn, (req, res, next) => {
  const { bookId } = req.params;

  Book.findByIdAndDelete(bookId)
    .then(() => res.redirect("/books"))
    .catch((error) => next(error));
});

module.exports = router;
