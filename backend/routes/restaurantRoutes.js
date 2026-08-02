const express = require("express");

const router = express.Router();

const auth =
require("../middleware/auth");
const {
  createRestaurant,
  getRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant
} = require("../Controllers/restaurantController");

// Public

router.get(
 "/",
 getRestaurants
);

router.get(
 "/:id",
 getRestaurantById
);


// Protected

router.post(
 "/",
 auth,
 createRestaurant
);

router.put(
 "/:id",
 auth,
 updateRestaurant
);

router.delete(
 "/:id",
 auth,
 deleteRestaurant
);

module.exports = router;