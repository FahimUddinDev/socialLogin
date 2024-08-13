const router = require("express").Router();
const passport = require("passport");
require("../config/authGoogle");

router
  .route("/")
  .get(passport.authenticate("google", { scope: ["profile", "email"] }));

router
  .route("/redirect")
  .get(
    passport.authenticate("google", { failureRedirect: "/", session: false }),
    (req, res) => {
      res.cookie("auth", JSON.stringify({ key: req.user }), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Ensure cookies are only sent over HTTPS in production
        sameSite: "Lax", // Adjust as needed
      });
      console.log({ user: req.user.token });
      res.redirect(`http://localhost:3000`);
    }
  );

module.exports = router;
