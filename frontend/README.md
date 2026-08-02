# 🍽️ DineNavigator

DineNavigator is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application that helps users discover restaurants, explore restaurant details, add reviews, manage favorites, and locate restaurants using Google Maps. It also includes a secure Admin Panel for managing restaurants, users, and reviews.

---

## 🚀 Live Demo

### 🌐 Frontend
https://dine-navigator.vercel.app

### ⚙️ Backend
https://dinenavigator.onrender.com/api

---

## 📌 Features

### 👤 User Features

- User Registration & Login
- JWT Authentication
- Browse Restaurants
- Search Restaurants
- Filter by
  - Cuisine
  - City
  - Rating
  - Budget
- Restaurant Details
- Add & View Reviews
- Add to Favorites
- Google Maps Integration
- User Profile

---

### 👨‍💼 Admin Features

- Secure Admin Login
- Dashboard
- Add Restaurant
- Edit Restaurant
- Delete Restaurant
- Manage Users
- Manage Reviews

---

## 🛠 Tech Stack

### Frontend

- React.js
- React Router DOM
- Bootstrap 5
- Axios
- SweetAlert2

### Backend

- Node.js
- Express.js
- JWT Authentication
- bcrypt.js
- Mongoose

### Database

- MongoDB Atlas

### Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

## 📁 Project Structure

```
DineNavigator
│
├── backend
│   ├── config
│   ├── Controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── admin
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   └── services
│   └── public
│
└── README.md
```

---

## 📷 Screenshots

### 🏠 Home Page

(Add Screenshot)

### 🍴 Restaurants

(Add Screenshot)

### 📍 Restaurant Details

(Add Screenshot)

### ⭐ Reviews

(Add Screenshot)

### ❤️ Favorites

(Add Screenshot)

### 👨‍💼 Admin Dashboard

(Add Screenshot)

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Dharani901/DineNavigator.git
```

---

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

Run backend:

```bash
npm start
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

Backend requires:

```
PORT

MONGO_URI

JWT_SECRET
```

---

## 📡 API Endpoints

### User

```
POST /api/users/register

POST /api/users/login

GET /api/users/profile
```

### Restaurants

```
GET /api/restaurants

GET /api/restaurants/:id

POST /api/restaurants

PUT /api/restaurants/:id

DELETE /api/restaurants/:id
```

### Reviews

```
POST /api/reviews

GET /api/reviews/:restaurantId

DELETE /api/reviews/:id
```

### Admin

```
POST /api/admin/login

GET /api/admin/dashboard

GET /api/admin/users
```

---

## 🎯 Future Enhancements

- Restaurant Booking
- Payment Integration
- Email Notifications
- Restaurant Images Upload
- User Profile Editing
- Dark Mode
- Restaurant Recommendations using AI

---

## 👩‍💻 Author

**Dharani**

GitHub:
https://github.com/Dharani901

---

## 📜 License

This project is developed for educational purposes as part of a MERN Stack project.