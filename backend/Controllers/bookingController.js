const Booking = require("../models/Bookings");


// Create Booking

const createBooking =
async (req, res) => {

  try {

    const booking =
      await Booking.create({
        user: req.user._id,
        restaurant:
          req.body.restaurant,
        bookingDate:
          req.body.bookingDate,
        guests:
          req.body.guests,
        specialRequest:
          req.body.specialRequest
      });

    res.status(201).json(
      booking
    );

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


// Get User Bookings

const getMyBookings =
async (req, res) => {

  try {

    const bookings =
      await Booking.find({
        user: req.user._id
      })
      .populate(
        "restaurant",
        "name cuisine"
      );

    res.json(bookings);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


// Cancel Booking

const cancelBooking =
async (req, res) => {

  try {

    const booking =
      await Booking.findById(
        req.params.id
      );

    if (!booking) {

      return res.status(404).json({
        message:
          "Booking Not Found"
      });

    }

    booking.status =
      "Cancelled";

    await booking.save();

    res.json({
      message:
        "Booking Cancelled"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

module.exports = {
  createBooking,
  getMyBookings,
  cancelBooking
};