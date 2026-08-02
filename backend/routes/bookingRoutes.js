const express = require("express");

const router = express.Router();

const auth =
require("../middleware/auth");

const {
  createBooking,
  getMyBookings,
  cancelBooking
}
=
require(
 "../Controllers/bookingController"
);


// Create Booking

router.post(
 "/",
 auth,
 createBooking
);


// Get My Bookings

router.get(
 "/my-bookings",
 auth,
 getMyBookings
);


// Cancel Booking

router.put(
 "/cancel/:id",
 auth,
 cancelBooking
);

module.exports = router;