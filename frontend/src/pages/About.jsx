import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <div className="bg-primary text-white py-5">
        <div className="container text-center">

          <h1 className="display-4 fw-bold">
            About Dine Navigator
          </h1>

          <p className="lead mt-3">
            Discover the best restaurants near you with
            personalized recommendations, ratings, and
            location-based search.
          </p>

        </div>
      </div>

      {/* About */}

      <div className="container my-5">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900"
              className="img-fluid rounded-4 shadow"
              alt="Restaurant"
            />

          </div>

          <div className="col-lg-6">

            <h2 className="fw-bold mb-4">

              🍽 Who We Are

            </h2>

            <p className="text-muted">

              Dine Navigator is a Restaurant Recommendation
              System designed to help users discover the best
              restaurants based on cuisine, city, ratings,
              and preferences.

            </p>

            <p className="text-muted">

              Whether you're looking for Italian, Chinese,
              Indian, Japanese, or Seafood restaurants,
              Dine Navigator makes finding great places easy
              and enjoyable.

            </p>

            <p className="text-muted">

              Users can browse restaurants, view detailed
              information, save favorites, and open locations
              directly in Google Maps.

            </p>

          </div>

        </div>

      </div>

      {/* Features */}

      <div className="container my-5">

        <h2 className="text-center fw-bold mb-5">

          Why Choose Dine Navigator?

        </h2>

        <div className="row g-4">

          <div className="col-md-4">

            <div className="card shadow border-0 h-100 text-center p-4">

              <div className="display-3">
                🍽
              </div>

              <h4 className="mt-3">
                Restaurant Discovery
              </h4>

              <p className="text-muted">

                Find restaurants based on cuisine,
                ratings and location.

              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card shadow border-0 h-100 text-center p-4">

              <div className="display-3">
                ❤️
              </div>

              <h4 className="mt-3">

                Favorites

              </h4>

              <p className="text-muted">

                Save your favorite restaurants
                and access them anytime.

              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card shadow border-0 h-100 text-center p-4">

              <div className="display-3">
                📍
              </div>

              <h4 className="mt-3">

                Google Maps

              </h4>

              <p className="text-muted">

                Navigate directly to your
                favorite restaurant.

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Statistics */}

      <div className="bg-light py-5">

        <div className="container">

          <div className="row text-center">

            <div className="col-md-3">

              <h1 className="fw-bold text-primary">

                18+

              </h1>

              <h5>

                Restaurants

              </h5>

            </div>

            <div className="col-md-3">

              <h1 className="fw-bold text-success">

                5+

              </h1>

              <h5>

                Cuisines

              </h5>

            </div>

            <div className="col-md-3">

              <h1 className="fw-bold text-danger">

                3+

              </h1>

              <h5>

                Cities

              </h5>

            </div>

            <div className="col-md-3">

              <h1 className="fw-bold text-warning">

                4.8★

              </h1>

              <h5>

                Average Rating

              </h5>

            </div>

          </div>

        </div>

      </div>

      {/* Mission */}

      <div className="container my-5 text-center">

        <h2 className="fw-bold">

          🎯 Our Mission

        </h2>

        <p className="lead text-muted mt-3">

          Our mission is to simplify restaurant discovery
          by providing users with reliable recommendations,
          intuitive search, and an enjoyable dining
          experience through a modern web application.

        </p>

      </div>

      <Footer />

    </>
  );
}

export default About;