const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
.then(async () => {

    const hashedPassword = await bcrypt.hash("123456",10);

    await Admin.create({
        name:"Admin",
        email:"jayanth@121@gmail.com",
        password:hashedPassword
    });

    console.log("Admin Created Successfully");

    process.exit();

})
.catch(console.error);