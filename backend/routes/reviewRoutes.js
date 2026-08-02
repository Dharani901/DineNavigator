const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
  addReview,
  getRestaurantReviews,
  getAllReviews,
  deleteReview,
} = require("../Controllers/reviewController");

// User
router.post("/", auth, addReview);

// Public
router.get("/:restaurantId", getRestaurantReviews);

// Admin
router.get("/", auth, getAllReviews);

router.delete("/:id", auth, deleteReview);

module.exports = router;