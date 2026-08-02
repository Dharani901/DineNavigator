import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {

    const token = localStorage.getItem("token");

    setLoggedIn(!!token);

  }, []);

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setLoggedIn(false);

    navigate("/login");

  };

  return (

    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">

      <div className="container">

        <NavLink
          className="navbar-brand fw-bold fs-3 text-primary"
          to="/"
        >
          🍽 DineNavigator
        </NavLink>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbar"
        >

          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item mx-2">

              <NavLink
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>

            </li>

            <li className="nav-item mx-2">

              <NavLink
                className="nav-link"
                to="/restaurants"
              >
                Restaurants
              </NavLink>

            </li>

            <li className="nav-item mx-2">

              <NavLink
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>

            </li>

            <li className="nav-item mx-2">

              <NavLink
                className="nav-link"
                to="/contact"
              >
                Contact
              </NavLink>

            </li>

            {

              loggedIn ?

              <>

                <li className="nav-item mx-2">

                  <NavLink
                    className="nav-link"
                    to="/favorites"
                  >
                    ❤️ Favorites
                  </NavLink>

                </li>

                <li className="nav-item mx-2">

                  <NavLink
                    className="nav-link"
                    to="/profile"
                  >
                    👤 Profile
                  </NavLink>

                </li>

                <li className="nav-item ms-3">

                  <button
                    onClick={logout}
                    className="btn btn-danger rounded-pill px-4"
                  >
                    Logout
                  </button>

                </li>

              </>

              :

              <>

                <li className="nav-item ms-3">

                  <NavLink
                    to="/login"
                    className="btn btn-outline-primary rounded-pill px-4"
                  >
                    Login
                  </NavLink>

                </li>

                <li className="nav-item ms-2">

                  <NavLink
                    to="/register"
                    className="btn btn-primary rounded-pill px-4"
                  >
                    Register
                  </NavLink>

                </li>

              </>

            }

          </ul>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;