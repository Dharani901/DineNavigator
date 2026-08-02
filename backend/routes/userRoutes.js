const express = require("express");

const router =
express.Router();

const {
  registerUser,
  loginUser,
  getProfile
}
=
require(
 "../Controllers/userController"
);

const auth =
require("../middleware/auth");


// Register

router.post(
 "/register",
 registerUser
);


// Login

router.post(
 "/login",
 loginUser
);


// Profile

router.get(
 "/profile",
 auth,
 getProfile
);

module.exports = router;