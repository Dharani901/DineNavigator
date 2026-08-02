import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
function AdminLogin() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        formData
      );

      localStorage.setItem(
        "adminToken",
        res.data.token
      );

      localStorage.setItem(
        "admin",
        JSON.stringify(res.data.admin)
      );

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have been logged in as an admin."
      });

      navigate("/admin/dashboard");

    } catch (error) {

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response?.data?.message || "An error occurred"
      });

    } finally {

      setLoading(false);

    }

  };

  return (

    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >

      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{ width: "420px" }}
      >

        <div className="text-center mb-4">

          <h2 className="fw-bold text-primary">

            👨‍💼 Admin Login

          </h2>

          <p className="text-muted">

            DineNavigator Admin Panel

          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">

            <label>Email</label>

            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="mb-4">

            <label>Password</label>

            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>

          <button
            className="btn btn-primary w-100"
            disabled={loading}
          >

            {
              loading
                ? "Logging In..."
                : "Login"
            }

          </button>

        </form>

      </div>

    </div>

  );

}

export default AdminLogin;