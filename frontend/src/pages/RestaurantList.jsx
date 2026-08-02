import { useEffect, useState } from "react";

import API from "../services/api";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import RestaurantCard from "../components/restaurant/RestaurantCard";
import RestaurantFilters from "../components/restaurant/RestaurantFilters";

function RestaurantList() {

  const [restaurants, setRestaurants] = useState([]);

  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({

    search: "",

    cuisine: "",

    city: "",

    rating: "",

    price: ""

  });

  useEffect(() => {

    fetchRestaurants();

  }, [filters]);



  const fetchRestaurants = async () => {

    try {

      setLoading(true);

      const response = await API.get("/restaurants", {

        params: {

          search: filters.search,

          cuisine: filters.cuisine,

          city: filters.city,

          rating: filters.rating

        }

      });

      let data = response.data;

      // Price Filter (Frontend)

      if (filters.price) {

        data = data.filter(

          (restaurant) =>

            restaurant.priceRange <= Number(filters.price)

        );

      }

      setRestaurants(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };



  return (

    <>

      <Navbar />



      <div className="container mt-5">



        <h2 className="fw-bold mb-4">

          🍽 Explore Restaurants

        </h2>



        <RestaurantFilters

          onFilter={setFilters}

        />



        <p className="text-secondary">

          Showing

          <span className="fw-bold">

            {" "}

            {restaurants.length}

            {" "}

          </span>

          Restaurants

        </p>



        {

          loading ? (

            <div className="text-center py-5">

              <div

                className="spinner-border text-primary"

              ></div>

            </div>

          ) : restaurants.length === 0 ? (

            <div className="text-center py-5">

              <h3>

                No Restaurants Found 😔

              </h3>

            </div>

          ) : (

            <div className="row g-4">

              {

                restaurants.map(

                  (restaurant) => (

                    <div

                      key={restaurant._id}

                      className="col-lg-4 col-md-6"

                    >

                      <RestaurantCard

                        restaurant={restaurant}

                      />

                    </div>

                  )

                )

              }

            </div>

          )

        }



      </div>



      <Footer />



    </>

  );

}

export default RestaurantList;