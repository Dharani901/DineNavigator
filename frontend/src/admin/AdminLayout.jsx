import { Link, Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    navigate("/admin/login");

  };

  return (

    <div className="d-flex">

      {/* Sidebar */}

      <div
        className="bg-dark text-white p-4"
        style={{
          width: "260px",
          minHeight: "100vh"
        }}
      >

        <h3 className="fw-bold mb-5">

          🍽 DineNavigator

        </h3>

        <div className="d-grid gap-3">

          <Link
            className="btn btn-outline-light"
            to="/admin/dashboard"
          >
            📊 Dashboard
          </Link>

          <Link
            className="btn btn-outline-light"
            to="/admin/restaurants"
          >
            🍴 Restaurants
          </Link>

          <Link
            className="btn btn-outline-light"
            to="/admin/add-restaurant"
          >
            ➕ Add Restaurant
          </Link>

          <Link
            className="btn btn-outline-light"
            to="/admin/users"
          >
            👥 Users
          </Link>

          <button
            className="btn btn-danger mt-5"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </div>

      {/* Content */}

      <div
        className="flex-grow-1 p-5 bg-light"
        style={{
          minHeight: "100vh"
        }}
      >

        <Outlet />

      </div>

    </div>

  );

}

export default AdminLayout;