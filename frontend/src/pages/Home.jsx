import { useEffect, useState } from "react";
import API from "../services/api";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/hero";
import SearchBar from "../components/home/SearchBar";
import PopularCuisine from "../components/home/PopularCuisine";
import RestaurantGrid from "../components/restaurant/RestaurantGrid";
import Footer from "../components/layout/Footer";

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await API.get("/restaurants");
      setRestaurants(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <Hero />

      <SearchBar />

      <PopularCuisine />

      <RestaurantGrid restaurants={restaurants} />

      <Footer />
    </>
  );
}

export default Home;