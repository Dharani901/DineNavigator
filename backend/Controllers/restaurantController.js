const Restaurant = require("../models/Restaurant");

// =========================
// CREATE RESTAURANT
// =========================

const createRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =========================
// GET ALL RESTAURANTS
// =========================

const getRestaurants = async (req, res) => {
  try {
    const {
      search,
      cuisine,
      city,
      rating,
      budget,
    } = req.query;

    let filter = {};

    // Search by Restaurant Name
    if (search) {
      filter.name = {
        $regex: search,
        $options: "i",
      };
    }

    // Cuisine Filter
    if (cuisine) {
      filter.cuisine = cuisine;
    }

    // City Filter
    if (city) {
      filter.city = city;
    }

    // Rating Filter
    if (rating) {
      filter.rating = {
        $gte: Number(rating),
      };
    }

    // Budget Filter
    if (budget) {
      filter.priceRange = {
        $lte: Number(budget),
      };
    }

    const restaurants = await Restaurant.find(filter);

    res.status(200).json(restaurants);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// =========================
// GET RESTAURANT BY ID
// =========================

const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        message: "Restaurant Not Found",
      });
    }

    res.json(restaurant);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =========================
// UPDATE RESTAURANT
// =========================

const updateRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        message: "Restaurant Not Found",
      });
    }

    restaurant.name = req.body.name || restaurant.name;
    restaurant.cuisine = req.body.cuisine || restaurant.cuisine;
    restaurant.city = req.body.city || restaurant.city;
    restaurant.area = req.body.area || restaurant.area;
    restaurant.address = req.body.address || restaurant.address;
    restaurant.rating = req.body.rating || restaurant.rating;
    restaurant.priceRange =
      req.body.priceRange || restaurant.priceRange;
    restaurant.image = req.body.image || restaurant.image;
    restaurant.phone = req.body.phone || restaurant.phone;
    restaurant.hours = req.body.hours || restaurant.hours;
    restaurant.description =
      req.body.description || restaurant.description;

    const updatedRestaurant = await restaurant.save();

    res.json(updatedRestaurant);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =========================
// DELETE RESTAURANT
// =========================

const deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        message: "Restaurant Not Found",
      });
    }

    await restaurant.deleteOne();

    res.json({
      message: "Restaurant Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createRestaurant,
  getRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
};