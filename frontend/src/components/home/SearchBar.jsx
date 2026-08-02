import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/restaurants?search=${search}`);
  };

  return (
    <div className="container my-5">
      <div className="input-group">

        <input
          type="text"
          className="form-control"
          placeholder="Search restaurants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={handleSearch}
        >
          Search
        </button>

      </div>
    </div>
  );
}

export default SearchBar;