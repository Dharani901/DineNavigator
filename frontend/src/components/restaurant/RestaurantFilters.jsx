import { useState } from "react";

function RestaurantFilters({ onFilter }) {

  const [filters, setFilters] = useState({
    search: "",
    cuisine: "",
    city: "",
    rating: "",
    price: ""
  });

  const handleChange = (e) => {

    const updated = {
      ...filters,
      [e.target.name]: e.target.value
    };

    setFilters(updated);

    onFilter(updated);

  };

  const resetFilters = () => {

    const reset = {
      search: "",
      cuisine: "",
      city: "",
      rating: "",
      price: ""
    };

    setFilters(reset);

    onFilter(reset);

  };

  return (

    <div className="card shadow border-0 rounded-4 mb-4">

      <div className="card-body">

        <div className="row g-3">

          <div className="col-lg-3">

            <input

              type="text"

              className="form-control"

              placeholder="Search Restaurant"

              name="search"

              value={filters.search}

              onChange={handleChange}

            />

          </div>

          <div className="col-lg-2">

            <select

              className="form-select"

              name="cuisine"

              value={filters.cuisine}

              onChange={handleChange}

            >

              <option value="">Cuisine</option>

              <option value="Italian">Italian</option>

              <option value="Indian">Indian</option>

              <option value="Chinese">Chinese</option>

              <option value="Japanese">Japanese</option>

              <option value="Mexican">Mexican</option>

              <option value="Seafood">Seafood</option>

            </select>

          </div>

          <div className="col-lg-2">

            <select

              className="form-select"

              name="city"

              value={filters.city}

              onChange={handleChange}

            >

              <option value="">City</option>

              <option value="Vishakapatnam">Vishakapatnam</option>

              <option value="Hyderabad">Hyderabad</option>

              <option value="Bangalore">Bangalore</option>
              <option value="Vijayanagaram">Vijayanagaram</option>

            </select>

          </div>

          <div className="col-lg-2">

            <select

              className="form-select"

              name="rating"

              value={filters.rating}

              onChange={handleChange}

            >

              <option value="">Rating</option>

              <option value="4">4+ ⭐</option>

              <option value="4.5">4.5+ ⭐</option>

              <option value="4.8">4.8+ ⭐</option>

            </select>

          </div>

          <div className="col-lg-2">

            <select

              className="form-select"

              name="price"

              value={filters.price}

              onChange={handleChange}

            >

              <option value="">Budget</option>

              <option value="2000">₹2000 & Below</option>

               <option value="3000">₹3000 & Below</option>

                <option value="4000">₹4000 & Below</option>
            </select>

          </div>

          <div className="col-lg-1">

            <button

              className="btn btn-danger w-100"

              onClick={resetFilters}

            >

              Reset

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default RestaurantFilters;