// server.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

dotenv.config();

/* ---------------- APP INIT ---------------- */
const app = express();

/* ---------------- ROUTES ---------------- */
const contactRoutes = require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");

/* ---------------- CORS CONFIG ---------------- */
const allowedOrigins = [
  "http://localhost:5173",
  "https://tusharsinghrawat.github.io",
];

const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (Postman, curl)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

/* ---------------- MIDDLEWARE ---------------- */
app.use(cors(corsOptions));

// ✅ IMPORTANT: handle preflight requests
app.options("*", cors(corsOptions));

app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

/* ---------------- API ROUTES ---------------- */
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

/* ---------------- DATABASE ---------------- */
mongoose
  .connect(process.env.MONGO_URI, {
    autoIndex: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB error:", err.message);
    process.exit(1);
  });

/* ---------------- SERVER ---------------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

/* ---------------- GRACEFUL SHUTDOWN ---------------- */
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("🛑 MongoDB connection closed");
  process.exit(0);
});
