const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {

  try {

    // Get Authorization Header
    const authHeader = req.headers.authorization;

    if (!authHeader) {

      return res.status(401).json({
        success: false,
        message: "Access Denied. No Token Provided."
      });

    }

    // Extract Bearer Token
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    if (!token) {

      return res.status(401).json({
        success: false,
        message: "Invalid Token."
      });

    }

    // Verify JWT
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Debug (remove later if you want)
    console.log("Decoded Token:", decoded);

    // Attach user/admin payload
    req.user = decoded;

    next();

  } catch (error) {

    console.log("JWT Error:", error.message);

    return res.status(401).json({
      success: false,
      message: "Token Expired or Invalid."
    });

  }

};

module.exports = auth;