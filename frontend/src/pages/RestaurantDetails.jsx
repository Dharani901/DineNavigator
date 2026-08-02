import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ReviewSection from "../components/restaurant/reviewcard";
function RestaurantDetails() {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/restaurants/${id}`
      );

      setRestaurant(res.data);

      const favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

      const exists = favorites.find(
        (item) => item._id === res.data._id
      );

      setFavorite(!!exists);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const toggleFavorite = () => {
    let favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorite) {
      favorites = favorites.filter(
        (item) => item._id !== restaurant._id
      );
    } else {
      favorites.push(restaurant);
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

    setFavorite(!favorite);
  };

  if (loading)
    return (
      <>
        <Navbar />
        <div className="container text-center mt-5">
          <h3>Loading...</h3>
        </div>
        <Footer />
      </>
    );

  return (
    <>
      <Navbar />

      <div className="container my-5">

        <Link
          to="/restaurants"
          className="btn btn-outline-primary mb-4"
        >
          ← Back
        </Link>

        <div className="card shadow-lg border-0 rounded-4">

          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="card-img-top"
            style={{
              height: "420px",
              objectFit: "cover"
            }}
          />

          <div className="card-body p-5">

            <div className="d-flex justify-content-between align-items-center">

              <h2 className="fw-bold">

                {restaurant.name}

              </h2>

              <span className="badge bg-success fs-5">

                ⭐ {restaurant.rating}

              </span>

            </div>

            <hr />

            <p>
              🍽 <strong>Cuisine:</strong> {restaurant.cuisine}
            </p>

            <p>
              📍 <strong>City:</strong> {restaurant.city}
            </p>

            <p>
              🏠 <strong>Address:</strong> {restaurant.address}
            </p>

            <p>
              💰 <strong>Price:</strong> ₹{restaurant.priceRange}
            </p>

            <p>
              🕒 <strong>Hours:</strong> {restaurant.hours}
            </p>

            <p>
              📞 <strong>Phone:</strong> {restaurant.phone}
            </p>

            <hr />

            <h4>Description</h4>

            <p className="text-muted">
              {restaurant.description}
            </p>

            <div className="d-flex gap-3 mt-4 flex-wrap">

              <button
                onClick={toggleFavorite}
                className={
                  favorite
                    ? "btn btn-danger"
                    : "btn btn-outline-danger"
                }
              >
                {favorite
                  ? "❤️ Remove Favorite"
                  : "🤍 Add Favorite"}
              </button>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${restaurant.location.coordinates[1]},${restaurant.location.coordinates[0]}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
              >
                📍 Open in Google Maps
              </a>

            </div>

          </div>

        </div>

      </div>
           <div className="container mb-5">
  <ReviewSection restaurantId={restaurant._id} />
</div>
      <Footer />
    </>
  );
}

export default RestaurantDetails;