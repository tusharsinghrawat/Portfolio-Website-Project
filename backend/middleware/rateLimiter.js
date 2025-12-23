const rateLimit = require("express-rate-limit");

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // max 5 requests
  message: {
    message: "Too many requests ❌ Please try again later",
  },
});

module.exports = contactLimiter;
