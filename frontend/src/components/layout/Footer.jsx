function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-5">
      <div className="container">

        <div className="row">

          <div className="col-md-4">

            <h3 className="fw-bold">
              🍽️ DineNavigator
            </h3>

            <p className="text-light">
              Discover the best restaurants around you
              based on ratings, reviews and location.
            </p>

          </div>

          <div className="col-md-4">

            <h5>Quick Links</h5>

            <ul className="list-unstyled">

              <li>Home</li>

              <li>Restaurants</li>

              <li>About</li>

              <li>Contact</li>

            </ul>

          </div>

          <div className="col-md-4">

            <h5>Contact</h5>

            <p>📧 support@dinenavigator.com</p>

            <p>📞 +91 9876543210</p>

          </div>

        </div>

        <hr />

        <p className="text-center mb-0">
          © 2026 DineNavigator. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;