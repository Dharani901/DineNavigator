const Review = require("../models/Review");

// =========================
// Add Review
// =========================

exports.addReview = async (req, res) => {

  try {

    const { restaurant, rating, comment } = req.body;

    const review = await Review.create({

      restaurant,

      user: req.user.id,

      rating,

      comment,

    });

    const populatedReview = await Review.findById(review._id)
      .populate("user", "name email")
      .populate("restaurant", "name");

    res.status(201).json({
      success: true,
      message: "Review Added Successfully",
      review: populatedReview,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// =========================
// Get Reviews By Restaurant
// =========================

exports.getRestaurantReviews = async (req, res) => {

  try {

    const reviews = await Review.find({
      restaurant: req.params.restaurantId,
    })
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(reviews);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// =========================
// Get All Reviews (Admin)
// =========================

exports.getAllReviews = async (req, res) => {

  try {

    const reviews = await Review.find()
      .populate("restaurant", "name city")
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(reviews);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// =========================
// Delete Review
// =========================

exports.deleteReview = async (req, res) => {

  try {

    await Review.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Review Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};