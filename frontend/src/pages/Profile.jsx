import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Swal from "sweetalert2";
function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  useEffect(() => {
    const savedUser =
      JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      navigate("/login");
    } else {
      setUser(savedUser);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    Swal.fire({
      icon: "success",
      title: "Logged out successfully"
    });
    navigate("/login");

    window.location.reload();
  };

  return (
    <>
      <Navbar />

      <div className="container my-5">

        <div
          className="card shadow-lg border-0 rounded-4 mx-auto"
          style={{ maxWidth: "700px" }}
        >

          <div
            className="card-header text-center text-white"
            style={{
              background:
                "linear-gradient(135deg,#0d6efd,#4facfe)"
            }}
          >
            <h2 className="fw-bold my-3">
              👤 My Profile
            </h2>
          </div>

          <div className="card-body p-5">

            <div className="text-center mb-4">

              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Profile"
                width="130"
              />

            </div>

            <table className="table">

              <tbody>

                <tr>
                  <th>Name</th>
                  <td>{user.name}</td>
                </tr>

                <tr>
                  <th>Email</th>
                  <td>{user.email}</td>
                </tr>

                <tr>
                  <th>Status</th>
                  <td>
                    <span className="badge bg-success">
                      Logged In
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

            <div className="text-center mt-4">

              <button
                className="btn btn-danger btn-lg px-5"
                onClick={logout}
              >
                Logout
              </button>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Profile;