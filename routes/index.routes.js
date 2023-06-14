const express = require("express");
const router = express.Router();

// Import the configured Nodemailer transporter object
const transporter = require("../config/transporter.config");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET contact page */
router.get("/contact", (req, res, next) => {
  res.render("contact");
});

/* GET about page */
router.get("/about", (req, res, next) => {
  res.render("about");
});

/* Send Email */

router.post("/send-email", (req, res, next) => {
  let { email, subject, message } = req.body;

  // Send an email with the information we got from the form
  transporter
    .sendMail({
      from: `"My Awesome Project " <${process.env.EMAIL_ADDRESS}>`,
      to: email,
      subject: subject,
      text: message,
      html: `<b>${message}</b>`,
    })
    .then((info) => res.render("message", { email, subject, message, info }))
    .catch((error) => console.log(error));
});

module.exports = router;
