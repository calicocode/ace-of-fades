module.exports = (req, res, next) => {
  //req.session.currentUser.role = user.toObject();

  if (req.session.currentUser.role === "admin") {
    next();
  } else {
    res.redirect("/auth/login");
  }
};
