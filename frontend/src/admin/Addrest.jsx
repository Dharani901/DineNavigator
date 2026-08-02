import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminBackButton from "./Backbutton";
import Swal from "sweetalert2";
function AddRestaurant() {

  const navigate = useNavigate();

  const [restaurant, setRestaurant] = useState({
    name: "",
    cuisine: "",
    city: "",
    area: "",
    address: "",
    rating: "",
    priceRange: "",
    image: "",
    phone: "",
    hours: "",
    description: "",
    latitude: "",
    longitude: ""
  });

  const handleChange = (e) => {

    setRestaurant({
      ...restaurant,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("adminToken");

      await axios.post(
        "http://localhost:5000/api/restaurants",
        {
          ...restaurant,
          location: {
            type: "Point",
            coordinates: [
              Number(restaurant.longitude),
              Number(restaurant.latitude)
            ]
          }
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
       Swal.fire({
    icon: "success",
    title: "Success",
    text: "Restaurant Added Successfully"
});

      navigate("/admin/dashboard");

    } catch (error) {

      Swal.fire({
        icon: "error",
        title: "Failed to Add Restaurant",
        text: error.response?.data?.message || "An error occurred"
      });

    }

  };

  return (

    <div className="container py-5">
        <AdminBackButton />

      <div className="card shadow-lg border-0 rounded-4">

        <div className="card-body p-5">

          <h2 className="fw-bold text-center text-primary mb-4">

            🍽 Add Restaurant

          </h2>

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Cuisine</label>
                <input
                  type="text"
                  name="cuisine"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Area</label>
                <input
                  type="text"
                  name="area"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 mb-3">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4 mb-3">
                <label>Rating</label>
                <input
                  type="number"
                  step="0.1"
                  name="rating"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label>Budget (₹)</label>
                <input
                  type="number"
                  name="priceRange"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-12 mb-3">
                <label>Image URL</label>
                <input
                  type="text"
                  name="image"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-12 mb-3">
                <label>Opening Hours</label>
                <input
                  type="text"
                  name="hours"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-12 mb-3">
                <label>Description</label>
                <textarea
                  rows="4"
                  name="description"
                  className="form-control"
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col-md-6 mb-3">
                <label>Latitude</label>
                <input
                  type="number"
                  step="0.000001"
                  name="latitude"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Longitude</label>
                <input
                  type="number"
                  step="0.000001"
                  name="longitude"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

            </div>

            <button
              className="btn btn-success w-100 mt-3"
            >
              Add Restaurant
            </button>

          </form>

        </div>

      </div>

    </div>

  );

}

export default AddRestaurant;