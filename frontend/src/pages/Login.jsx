import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import Swal from "sweetalert2";
function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post(
        "/users/login",
        formData
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      Swal.fire({
        icon: "success",
        title: "Login Successful 🎉"
      });

      navigate("/");

      window.location.reload();

    } catch (error) {

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response?.data?.message || "An error occurred"
      });

    }

  };

  return (

    <div className="container mt-5">

      <div
        className="card shadow p-4 mx-auto"
        style={{ maxWidth: "450px" }}
      >

        <h2 className="text-center mb-4">

          Login

        </h2>

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

          <button className="btn btn-primary w-100">

            Login

          </button>

        </form>

        <p className="text-center mt-3">

          Don't have an account?

          <Link
            to="/register"
            className="ms-2"
          >
            Register
          </Link>
           <Link
            to="/admin/login"
            className="ms-2"
          >
            Admin Login
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;