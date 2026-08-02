import { useEffect, useState } from "react";
import axios from "axios";
import AdminBackButton from "./Backbutton";
import Swal from "sweetalert2";
function ManageUsers() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {

    try {

      const token = localStorage.getItem("adminToken");

      const res = await axios.get(
        "http://localhost:5000/api/admin/users",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setUsers(res.data);

    } catch (error) {

      Swal.fire({
        icon: "error",
        title: "Failed to Load Users",
        text: error.response?.data?.message || "An error occurred"
      });

      console.log(error);

    }

  };

  const deleteUser = async (id) => {

    if (!window.confirm("Delete this user?")) return;

    try {

      const token = localStorage.getItem("adminToken");

      await axios.delete(
        `http://localhost:5000/api/admin/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "User Deleted Successfully"
      });

      loadUsers();

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

      <h2 className="fw-bold mb-4">

        👥 Manage Users

      </h2>

      <div className="table-responsive">

        <table className="table table-bordered table-hover">

          <thead className="table-dark">

            <tr>

              <th>Name</th>

              <th>Email</th>

              <th>Role</th>

              <th>Joined</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {

              users.map((user) => (

                <tr key={user._id}>

                  <td>

                    {user.name}

                  </td>

                  <td>

                    {user.email}

                  </td>

                  <td>

                    <span className="badge bg-primary">

                      {user.role}

                    </span>

                  </td>

                  <td>

                    {

                      new Date(
                        user.createdAt
                      ).toLocaleDateString()

                    }

                  </td>

                  <td>

                    {

                      user.role !== "admin" && (

                        <button

                          className="btn btn-danger btn-sm"

                          onClick={() =>
                            deleteUser(user._id)
                          }

                        >

                          Delete

                        </button>

                      )

                    }

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

export default ManageUsers;