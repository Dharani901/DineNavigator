import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Favorites() {

  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = () => {

    const data =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(data);

  };

  const removeFavorite = (id) => {

    const updated = favorites.filter(
      restaurant => restaurant._id !== id
    );

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );

    setFavorites(updated);

  };

  const filteredFavorites = favorites.filter((restaurant) => {

    return (
      restaurant.name.toLowerCase().includes(search.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(search.toLowerCase()) ||
      restaurant.city.toLowerCase().includes(search.toLowerCase())
    );

  });

  return (

    <>
      <Navbar />

      <div className="container my-5">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h2 className="fw-bold">
            ❤️ My Favorite Restaurants
          </h2>

          <span className="badge bg-danger fs-5">
            {filteredFavorites.length} Favorites
          </span>

        </div>

        <div className="mb-4">

          <input

            type="text"

            className="form-control form-control-lg"

            placeholder="🔍 Search Favorites..."

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

          />

        </div>

        {

          filteredFavorites.length===0 ?

          (

            <div className="text-center py-5">

              <img

                src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"

                width="120"

                alt="No Favorites"

              />

              <h3 className="mt-4">

                No Favorite Restaurants

              </h3>

              <p className="text-muted">

                Add restaurants from the Restaurants page.

              </p>

              <Link

                to="/restaurants"

                className="btn btn-primary rounded-pill"

              >

                Explore Restaurants

              </Link>

            </div>

          )

          :

          (

            <div className="row g-4">

              {

                filteredFavorites.map((restaurant)=>(

                  <div

                    className="col-lg-4 col-md-6"

                    key={restaurant._id}

                  >

                    <div
                      className="card border-0 shadow-lg rounded-4 h-100"
                      style={{
                        transition:"0.3s",
                        overflow:"hidden"
                      }}
                    >

                      <img

                        src={restaurant.image}

                        alt={restaurant.name}

                        className="card-img-top"

                        style={{
                          height:"220px",
                          objectFit:"cover"
                        }}

                      />

                      <div className="card-body">

                        <div className="d-flex justify-content-between">

                          <h4 className="fw-bold">

                            {restaurant.name}

                          </h4>

                          <span className="badge bg-success">

                            ⭐ {restaurant.rating}

                          </span>

                        </div>

                        <span className="badge bg-primary my-2">

                          {restaurant.cuisine}

                        </span>

                        <p>

                          📍 {restaurant.city}

                        </p>

                        <p>

                          💰 ₹{restaurant.priceRange}

                        </p>

                      </div>

                      <div className="card-footer bg-white border-0">

                        <div className="d-grid gap-2">

                          <Link

                            to={`/restaurant/${restaurant._id}`}

                            className="btn btn-primary rounded-pill"

                          >

                            View Details

                          </Link>

                          <a

                            href={`https://www.google.com/maps/search/?api=1&query=${restaurant.location.coordinates[1]},${restaurant.location.coordinates[0]}`}

                            target="_blank"

                            rel="noreferrer"

                            className="btn btn-outline-success rounded-pill"

                          >

                            Google Maps

                          </a>

                          <button

                            className="btn btn-danger rounded-pill"

                            onClick={()=>removeFavorite(restaurant._id)}

                          >

                            ❤️ Remove Favorite

                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                ))

              }

            </div>

          )

        }

      </div>

      <Footer/>

    </>

  );

}

export default Favorites;