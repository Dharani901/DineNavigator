import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container py-5">

      <div className="row align-items-center">

        {/* LEFT */}

        <div className="col-lg-6">

          <span className="badge bg-primary px-3 py-2 fs-6 rounded-pill">
            📍 Find Restaurants Near You
          </span>

          <h1
            className="display-2 fw-bold mt-4"
            style={{ lineHeight: "1.2" }}
          >
            Discover
            <span className="text-primary">
              {" "}Amazing{" "}
            </span>
            Restaurants
          </h1>

          <p className="text-secondary fs-3 mt-4">
            Search nearby restaurants,
            compare ratings,
            explore cuisines,
            and discover the perfect place
            for your next meal.
          </p>

          <div className="d-flex gap-3 mt-5">

            <Link
              to="/restaurants"
              className="btn btn-primary btn-lg rounded-pill px-5"
            >
              Explore Restaurants
            </Link>

            <button
              className="btn btn-outline-primary btn-lg rounded-pill px-5"
            >
              📍 Use My Location
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="col-lg-6 text-center">

          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900"
            className="img-fluid rounded-5 shadow-lg"
            alt="restaurant"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;