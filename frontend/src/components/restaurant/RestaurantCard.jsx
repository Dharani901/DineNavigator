import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setIsFavorite(
      favorites.some(item => item._id === restaurant._id)
    );
  }, [restaurant]);

  const toggleFavorite = () => {

    let favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {

      favorites = favorites.filter(
        item => item._id !== restaurant._id
      );

      setIsFavorite(false);

    } else {

      favorites.push(restaurant);

      setIsFavorite(true);

    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

  };

  return (

    <div
      className="card border-0 shadow-lg rounded-4 h-100"
      style={{
        transition: "0.3s",
        overflow: "hidden"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >

      <div className="position-relative">

        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="card-img-top"
          style={{
            height: "230px",
            objectFit: "cover"
          }}
        />

        {/* Rating */}

        <span
          className="badge bg-success position-absolute"
          style={{
            top: "15px",
            left: "15px",
            fontSize: "15px"
          }}
        >
          ⭐ {restaurant.rating}
        </span>

        {/* Favorite */}

        <button
          onClick={toggleFavorite}
          className="btn position-absolute"
          style={{
            top: "10px",
            right: "10px",
            background: "white",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            fontSize: "22px",
            border: "none"
          }}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>

      </div>

      <div className="card-body">

        <h4 className="fw-bold">

          {restaurant.name}

        </h4>

        <span className="badge bg-primary mb-3">

          {restaurant.cuisine}

        </span>

        <p className="mb-2">

          📍 {restaurant.city}

        </p>

        <p className="mb-3">

          💰 ₹{restaurant.priceRange}

        </p>

        <div className="d-grid gap-2">

          <Link
            to={`/restaurant/${restaurant._id}`}
            className="btn btn-primary rounded-pill"
          >
            View Details
          </Link>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${restaurant.location.coordinates[1]},${restaurant.location.coordinates[0]}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-success rounded-pill"
          >
            Google Maps
          </a>

        </div>

      </div>

    </div>

  );
}

export default RestaurantCard;