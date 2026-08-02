import RestaurantCard from "./RestaurantCard";

function RestaurantGrid({ restaurants = [] }) {
  return (
    <div className="container mb-5">
      <div className="row g-4">
        {restaurants.map((restaurant) => (
          <div
            className="col-lg-4 col-md-6"
            key={restaurant._id}
          >
            <RestaurantCard restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantGrid;