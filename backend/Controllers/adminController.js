const Admin = require("../models/Admin");
const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// =======================
// Admin Login
// =======================

exports.adminLogin = async (req, res) => {

  try {

    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {

      return res.status(401).json({

        success: false,

        message: "Invalid Email or Password"

      });

    }

    const isMatch = await bcrypt.compare(

      password,

      admin.password

    );

    if (!isMatch) {

      return res.status(401).json({

        success: false,

        message: "Invalid Email or Password"

      });

    }

    const token = jwt.sign(

      {

        id: admin._id,

        role: "admin"

      },

      process.env.JWT_SECRET,

      {

        expiresIn: "7d"

      }

    );

    res.status(200).json({

      success: true,

      token,

      admin: {

        id: admin._id,

        name: admin.name,

        email: admin.email

      }

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

// =======================
// Dashboard
// =======================

exports.dashboard = async (req, res) => {

  res.json({

    success: true,

    message: "Welcome Admin"

  });

};

// =======================
// Get All Users
// =======================

exports.getUsers = async (req, res) => {

  try {

    const users = await User.find()

      .select("-password")

      .sort({ createdAt: -1 });

    res.status(200).json(users);

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

// =======================
// Delete User
// =======================

exports.deleteUser = async (req, res) => {

  try {

    await User.findByIdAndDelete(req.params.id);

    res.json({

      success: true,

      message: "User Deleted Successfully"

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};