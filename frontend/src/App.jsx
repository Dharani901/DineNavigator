import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import RestaurantList from "./pages/RestaurantList";
import RestaurantDetails from "./pages/RestaurantDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import AddRestaurant from "./admin/Addrest";
import ManageRestaurants from "./admin/ManageRest";
import EditRestaurant from "./admin/EditRest";
import ManageUsers from "./admin/ManageUsers";
import AdminLayout from "./admin/AdminLayout";
import ManageReviews from "./admin/ManageReviews";
function App() {
  return (
    <Routes>

      {/* Public */}

      <Route path="/" element={<Home />} />

      <Route
        path="/restaurants"
        element={<RestaurantList />}
      />

      <Route
        path="/restaurant/:id"
        element={<RestaurantDetails />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/favorites"
        element={<Favorites />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      {/* Admin */}

     <Route
        path="/admin/login"
        element={<AdminLogin />}
      />

      <Route
        path="/admin/dashboard"
        element={<Dashboard />}
      />
      <Route
  path="/admin/add-restaurant"
  element={<AddRestaurant/>}
    />
   <Route
  path="/admin/restaurants"
  element={<ManageRestaurants />}
    />
    <Route
  path="/admin/edit-restaurant/:id"
  element={<EditRestaurant />}
/>
<Route
    path="/admin/users"
    element={<ManageUsers />}
/>
<Route
  path="/admin/reviews"
  element={<ManageReviews />}
/>
      {/* 404 */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default App;