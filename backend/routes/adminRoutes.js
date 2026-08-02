const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const adminAuth = require("../middleware/adminAuth");

const {
  adminLogin,
  dashboard,
  getUsers,
  deleteUser
} = require("../Controllers/adminController");

// Admin Login
router.post("/login", adminLogin);

// Dashboard
router.get(
  "/dashboard",
  auth,
  adminAuth,
  dashboard
);

// Get All Users
router.get(
  "/users",
  auth,
  adminAuth,
  getUsers
);

// Delete User
router.delete(
  "/users/:id",
  auth,
  adminAuth,
  deleteUser
);

module.exports = router;