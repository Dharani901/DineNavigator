import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AdminBackButton from "./Backbutton";
import Swal from "sweetalert2";
function EditRestaurant() {

  const { id } = useParams();

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

    description: ""

  });

  useEffect(() => {

    fetchRestaurant();

  }, []);

  const fetchRestaurant = async () => {

    try {

      const res = await axios.get(

        `http://localhost:5000/api/restaurants/${id}`

      );

      setRestaurant(res.data);

    }

    catch (err) {

      Swal.fire({
        icon: "error",
        title: "Failed to load restaurant",
        text: err.response?.data?.message || "An error occurred"
      });

    }

  };

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

      await axios.put(

        `http://localhost:5000/api/restaurants/${id}`,

        restaurant,

        {

          headers: {

            Authorization: `Bearer ${token}`

          }

        }

      );

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Restaurant Updated Successfully"
      });

      navigate("/admin/restaurants");

    }

    catch (err) {

      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: err.response?.data?.message || "An error occurred"
      });

    }

  };

  return (

    <div className="container py-5">
        <AdminBackButton />

      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div className="card shadow">

            <div className="card-body">

              <h2 className="text-center mb-4">

                ✏ Edit Restaurant

              </h2>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">

                  <label>Name</label>

                  <input

                    type="text"

                    className="form-control"

                    name="name"

                    value={restaurant.name}

                    onChange={handleChange}

                    required

                  />

                </div>

                <div className="mb-3">

                  <label>Cuisine</label>

                  <input

                    type="text"

                    className="form-control"

                    name="cuisine"

                    value={restaurant.cuisine}

                    onChange={handleChange}

                    required

                  />

                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label>City</label>

                    <input

                      type="text"

                      className="form-control"

                      name="city"

                      value={restaurant.city}

                      onChange={handleChange}

                      required

                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label>Area</label>

                    <input

                      type="text"

                      className="form-control"

                      name="area"

                      value={restaurant.area}

                      onChange={handleChange}

                      required

                    />

                  </div>

                </div>

                <div className="mb-3">

                  <label>Address</label>

                  <input

                    type="text"

                    className="form-control"

                    name="address"

                    value={restaurant.address}

                    onChange={handleChange}

                  />

                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label>Rating</label>

                    <input

                      type="number"

                      step="0.1"

                      className="form-control"

                      name="rating"

                      value={restaurant.rating}

                      onChange={handleChange}

                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label>Price</label>

                    <input

                      type="number"

                      className="form-control"

                      name="priceRange"

                      value={restaurant.priceRange}

                      onChange={handleChange}

                    />

                  </div>

                </div>

                <div className="mb-3">

                  <label>Image URL</label>

                  <input

                    type="text"

                    className="form-control"

                    name="image"

                    value={restaurant.image}

                    onChange={handleChange}

                  />

                </div>

                <div className="mb-3">

                  <label>Phone</label>

                  <input

                    type="text"

                    className="form-control"

                    name="phone"

                    value={restaurant.phone}

                    onChange={handleChange}

                  />

                </div>

                <div className="mb-3">

                  <label>Opening Hours</label>

                  <input

                    type="text"

                    className="form-control"

                    name="hours"

                    value={restaurant.hours}

                    onChange={handleChange}

                  />

                </div>

                <div className="mb-3">

                  <label>Description</label>

                  <textarea

                    rows="4"

                    className="form-control"

                    name="description"

                    value={restaurant.description}

                    onChange={handleChange}

                  ></textarea>

                </div>

                <button

                  className="btn btn-primary w-100"

                >

                  Update Restaurant

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default EditRestaurant;