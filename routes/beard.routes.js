const express = require("express");
const router = express.Router();

const Style = require("../models/Style.model");
const User = require("../models/User.model");
/* const isLoggedIn = require("../middleware/isLoggedIn");
const Style = require("../models/Style.model"); */

// READ: display beards
router.get("/beard", (req, res, next) => {
  Style.find()
    .then((beardsFromDB) => {
      const data = {
        beards: beardsFromDB,
      };

      res.render("beard/beard-list", data);
    })
    .catch((e) => {
      console.log("error getting list of beards from DB", e);
      next(e);
    });
});

// READ: display details of one beard style
router.get("/beard/:beardId", (req, res, next) => {
  const id = req.params.beardId;

  Style.findById(id)
    .then((beardFromDB) => {
      res.render("beard/beard-details", beardFromDB);
    })
    .catch((e) => {
      console.log("error getting beard details from DB", e);
      next(e);
    });
});

module.exports = router;

/* // CREATE: display form
router.get("/books/create", isLoggedIn, (req, res, next) => {
  Author.find()
    .then((authorsFromDB) => {
      res.render("books/book-create", { authorsArr: authorsFromDB });
    })
    .catch((e) => {
      console.log("error displaying book create form", e);
      next(e);
    });
});

// CREATE: process form
router.post("/books/create", isLoggedIn, (req, res, next) => {
  const newBook = {
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
    rating: req.body.rating,
  };

  Book.create(newBook)
    .then((newBook) => {
      res.redirect("/books");
    })
    .catch((e) => {
      console.log("error creating new book", e);
      next(e);
    });
});

// UPDATE: display form
router.get("/books/:bookId/edit", isLoggedIn, async (req, res, next) => {
  const { bookId } = req.params;

  try {
    const authors = await Author.find();
    const bookDetails = await Book.findById(bookId);

    res.render("books/book-edit.hbs", { book: bookDetails, authors: authors });
  } catch (e) {
    next(e);
  }
});

// UPDATE: process form
router.post("/books/:bookId/edit", isLoggedIn, (req, res, next) => {
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
 */
