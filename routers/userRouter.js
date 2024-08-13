const router = require("express").Router();
const passport = require("passport");
require("../config/authGoogle");
const {} = require("../models/user");

router.route("/").get((req, res) => {
  console.log(req);
  if (req.user) {
    res.json(req.user); // Send user data as JSON response
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
});

module.exports = router;
