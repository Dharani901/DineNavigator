const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./models/Admin");

mongoose.connect(process.env.MONGO_URI);

async function createAdmin() {
  const exists = await Admin.findOne({
    email: "jayanth@121@gmail.com",
  });

  if (exists) {
    console.log("Admin already exists");
    process.exit();
  }

  const password = await bcrypt.hash("123456", 10);

  await Admin.create({
    name: "Admin",
    email: "jayanth@121@gmail.com",
    password,
  });

  console.log("Admin Created Successfully");
  process.exit();
}

createAdmin();