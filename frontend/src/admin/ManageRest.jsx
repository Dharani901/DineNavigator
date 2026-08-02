import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminBackButton from "./Backbutton";
import Swal from "sweetalert2";
function ManageRestaurants() {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    loadRestaurants();
  }, []);

  const loadRestaurants = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/restaurants"
      );

      setRestaurants(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  const deleteRestaurant = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this restaurant?"
    );

    if (!confirmDelete) return;

    try {

      const token = localStorage.getItem("adminToken");

      await axios.delete(
        `http://localhost:5000/api/restaurants/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Restaurant Deleted Successfully"
      });

      loadRestaurants();

    } catch (error) {

      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: error.response?.data?.message || "An error occurred"
      });

    }

  };

  return (

    <div className="container py-5">
         <AdminBackButton />

      <div className="d-flex justify-content-between align-items-center mb-4">
       
        <h2 className="fw-bold">

          🍽 Manage Restaurants

        </h2>

        <Link
          to="/admin/add-restaurant"
          className="btn btn-success"
        >
          + Add Restaurant
        </Link>

      </div>

      <div className="table-responsive">

        <table className="table table-bordered table-hover align-middle">

          <thead className="table-dark">

            <tr>

              <th>Image</th>

              <th>Name</th>

              <th>Cuisine</th>

              <th>City</th>

              <th>Rating</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {

              restaurants.map((restaurant) => (

                <tr key={restaurant._id}>

                  <td>

                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      width="90"
                      height="70"
                      style={{
                        objectFit: "cover",
                        borderRadius: "8px"
                      }}
                    />

                  </td>

                  <td>

                    {restaurant.name}

                  </td>

                  <td>

                    {restaurant.cuisine}

                  </td>

                  <td>

                    {restaurant.city}

                  </td>

                  <td>

                    ⭐ {restaurant.rating}

                  </td>

                  <td>

                    <Link
                      to={`/admin/edit-restaurant/${restaurant._id}`}
                      className="btn btn-primary btn-sm me-2"
                    >
                      Edit
                    </Link>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        deleteRestaurant(
                          restaurant._id
                        )
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            }

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default ManageRestaurants;