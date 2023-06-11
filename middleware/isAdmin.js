module.exports = (req, res, next) => {
  //req.session.currentUser = user.toObject();

  if (req.session.currentUser === "admin") {
    next();
  } else {
    res.redirect("/auth/login");
  }
};
