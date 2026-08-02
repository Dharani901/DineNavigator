import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import Swal from "sweetalert2";
function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
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

    if (formData.password !== formData.confirmPassword) {

      Swal.fire({
        icon: "error",
        title: "Passwords do not match!"
      });

      return;

    }

    try {

      setLoading(true);

      const response = await API.post(
        "/users/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password
        }
      );

      // Save JWT Token
      localStorage.setItem(
        "token",
        response.data.token
      );

      // Save User Details
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      Swal.fire({
        icon: "success",
        title: "Registration Successful 🎉"
      });

      navigate("/");

      window.location.reload();

    } catch (error) {

      Swal.fire({
        icon: "error",
        title: "Registration Failed",
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
        style={{ width: "450px" }}
      >

        <h2 className="text-center fw-bold mb-4">

          🍽 Create Account

        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">

            <label className="form-label">

              Full Name

            </label>

            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>

          <div className="mb-3">

            <label className="form-label">

              Email

            </label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="mb-3">

            <label className="form-label">

              Password

            </label>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>

          <div className="mb-4">

            <label className="form-label">

              Confirm Password

            </label>

            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

          </div>

          <button
            className="btn btn-primary w-100 py-2 rounded-pill"
            disabled={loading}
          >

            {loading ? "Creating Account..." : "Register"}

          </button>

        </form>

        <hr />

        <p className="text-center">

          Already have an account?

          <Link
            to="/login"
            className="ms-2 fw-bold text-decoration-none"
          >

            Login

          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;