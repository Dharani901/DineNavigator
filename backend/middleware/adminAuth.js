const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    // Get Authorization Header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Access Denied. No Token Provided.",
      });
    }

    // Remove "Bearer " from token
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    if (!token) {
      return res.status(401).json({
        message: "Invalid Token.",
      });
    }

    // Verify Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Save User Info
    req.user = decoded;

    next();

  } catch (error) {

    return res.status(401).json({
      message: "Token Expired or Invalid.",
    });

  }
};

module.exports = auth;const adminAuth = (req, res, next) => {

  if (!req.user) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Admin Access Only",
    });
  }

  next();
};

module.exports = adminAuth;