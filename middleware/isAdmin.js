module.exports = (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else {
    res.redirect("/auth/login");
  }
};
