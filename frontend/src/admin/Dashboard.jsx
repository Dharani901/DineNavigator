import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Dashboard() {

  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login");
    }

  }, []);

  const logout = () => {

    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    navigate("/admin/login");

  };

  return (

    <div className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-5">

        <h1 className="fw-bold">
          👨‍💼 Admin Dashboard
        </h1>

        <button
          className="btn btn-danger"
          onClick={logout}
        >
          Logout
        </button>

      </div>

      <div className="row g-4">

        {/* Manage Restaurants */}

        <div className="col-lg-4">

          <div className="card shadow border-0 rounded-4 h-100">

            <div className="card-body text-center p-5">

              <h1>🍽</h1>

              <h2 className="mt-3">

                Restaurants

              </h2>

              <Link
                to="/admin/restaurants"
                className="btn btn-primary w-100 mt-4"
              >
                Manage
              </Link>
              <Link
                 to="/admin/reviews"
                  className="btn btn-warning"
                style={{ marginTop: "10px" }}
              >
               ⭐ Manage Reviews
                </Link>

            </div>

          </div>

        </div>

        {/* Add Restaurant */}

        <div className="col-lg-4">

          <div className="card shadow border-0 rounded-4 h-100">

            <div className="card-body text-center p-5">

              <h1>➕</h1>

              <h2 className="mt-3">

                Add Restaurant

              </h2>

              <Link
                to="/admin/add-restaurant"
                className="btn btn-success w-100 mt-4"
              >
                Add
              </Link>

            </div>

          </div>

        </div>

        {/* Manage Users */}

        <div className="col-lg-4">

          <div className="card shadow border-0 rounded-4 h-100">

            <div className="card-body text-center p-5">

              <h1>👥</h1>

              <h2 className="mt-3">

                Users

              </h2>

              <Link
                to="/admin/users"
                className="btn btn-warning w-100 mt-4"
              >
                Manage
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;