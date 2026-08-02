import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import API from "../services/api";

function ManageReviews() {

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {

    try {

      const res = await API.get("/reviews");

      setReviews(res.data);

    } catch (error) {

      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Unable to load reviews",
      });

    }

    setLoading(false);

  };

  const deleteReview = async (id) => {

    const result = await Swal.fire({
      title: "Delete Review?",
      text: "This review will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    });

    if (!result.isConfirmed) return;

    try {

      await API.delete(`/reviews/${id}`);

      Swal.fire({
        icon: "success",
        title: "Deleted",
        text: "Review deleted successfully.",
        timer: 1500,
        showConfirmButton: false,
      });

      fetchReviews();

    } catch (error) {

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Unable to delete review.",
      });

    }

  };

  if (loading) {

    return (

      <div className="container mt-5 text-center">

        <div className="spinner-border text-primary"></div>

      </div>

    );

  }

  return (

    <div className="container mt-5">

      <h2 className="fw-bold mb-4">
        ⭐ Manage Reviews
      </h2>

      {
        reviews.length === 0 ? (

          <div className="alert alert-info">

            No Reviews Found

          </div>

        ) : (

          <div className="table-responsive">

            <table className="table table-bordered table-hover align-middle">

              <thead className="table-dark">

                <tr>

                  <th>#</th>

                  <th>User</th>

                  <th>Restaurant</th>

                  <th>Rating</th>

                  <th>Comment</th>

                  <th>Date</th>

                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {

                  reviews.map((review, index) => (

                    <tr key={review._id}>

                      <td>{index + 1}</td>

                      <td>{review.name}</td>

                      <td>

                        {review.restaurant?.name || "N/A"}

                      </td>

                      <td>

                        ⭐ {review.rating}

                      </td>

                      <td>

                        {review.comment}

                      </td>

                      <td>

                        {new Date(
                          review.createdAt
                        ).toLocaleDateString()}

                      </td>

                      <td>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() =>
                            deleteReview(review._id)
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

        )

      }

    </div>

  );

}

export default ManageReviews;