import { useNavigate } from "react-router-dom";

function AdminBackButton() {

  const navigate = useNavigate();

  return (
    <button
      className="btn btn-secondary mb-4"
      onClick={() => navigate(-1)}
    >
      ← Back
    </button>
  );

}

export default AdminBackButton;