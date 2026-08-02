import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import API from "../../services/api";

function ReviewSection({ restaurantId }) {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  // ===============================
  // Fetch Reviews
  // ===============================
  const fetchReviews = async () => {
    try {
      const res = await API.get(`/reviews/${restaurantId}`);
      setReviews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [restaurantId]);

  // ===============================
  // Submit Review
  // ===============================
  const submitReview = async (e) => {
    e.preventDefault();

    try {
      await API.post("/reviews", {
        restaurant: restaurantId,
        rating: Number(rating),
        comment,
      });

      Swal.fire({
        icon: "success",
        title: "Review Added",
        text: "Thank you for your feedback!",
        timer: 1500,
        showConfirmButton: false,
      });

      setRating(5);
      setComment("");

      fetchReviews();

    } catch (error) {

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          error.response?.data?.message ||
          "Unable to submit review.",
      });

    }
  };

  return (
    <div className="mt-5">

      <h3 className="fw-bold mb-4">
        ⭐ Customer Reviews
      </h3>

      {/* Review Form */}

      <form
        onSubmit={submitReview}
        className="card shadow border-0 rounded-4 p-4 mb-5"
      >

        <div className="mb-3">

          <label className="form-label">
            Rating
          </label>

          <select
            className="form-select"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >

            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>

          </select>

        </div>

        <div className="mb-3">

          <label className="form-label">
            Comment
          </label>

          <textarea
            rows="4"
            className="form-control"
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />

        </div>

        <button
          className="btn btn-primary"
          type="submit"
        >
          Submit Review
        </button>

      </form>

      {/* Reviews */}

      {reviews.length === 0 ? (

        <div className="text-center">

          <h5>No Reviews Yet</h5>

        </div>

      ) : (

        reviews.map((review) => (

          <div
            className="card shadow-sm border-0 rounded-4 mb-3"
            key={review._id}
          >

            <div className="card-body">

              <div className="d-flex justify-content-between">

                <h5>{review.user?.name}</h5>

                <span className="badge bg-warning text-dark">

                  ⭐ {review.rating}

                </span>

              </div>

              <small className="text-muted">

                {new Date(
                  review.createdAt
                ).toLocaleDateString()}

              </small>

              <hr />

              <p>{review.comment}</p>

            </div>

          </div>

        ))

      )}

    </div>
  );
}

export default ReviewSection;