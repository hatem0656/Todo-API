const { Router } = require("express");
const {
  post_signup,
  post_signin,
  get_signout,
  get_user,
} = require("../controllers/userController");

const router = Router();

//--------Sign Up--------------//
router.post("/sign_up", post_signup);

//--------Log In--------------//
router.post("/sign_in", post_signin);

//--------Log Out--------------//
router.get("/sign_out", get_signout);

router.get("/user", get_user);

module.exports = router;
