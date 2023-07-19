const { Router } = require("express");
// const {
//   post_signup,
//   post_login,
//   get_logout,
// } = require("../controllers/authController");
const {
  post_signup,
  post_signin,
  get_signout,
} = require("../controllers/authController");

const router = Router();

//--------Sign Up--------------//
router.post("/sign_up", post_signup);

//--------Log In--------------//
router.post("/sign_in", post_signin);

//--------Log Out--------------//
router.get("/sign_out", get_signout);

module.exports = router;
