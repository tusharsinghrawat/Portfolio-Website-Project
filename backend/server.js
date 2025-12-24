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

/* ---------------- MIDDLEWARE ---------------- */

/* ✅ SIMPLE LOCALHOST CORS ONLY */
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

/* ---------------- API ROUTES ---------------- */
app.get("/", (req, res) => {
  res.send("Backend running 🚀 (LOCAL MODE)");
});

app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

/* ---------------- DATABASE ---------------- */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected (LOCAL)"))
  .catch((err) => {
    console.error("❌ MongoDB error:", err.message);
    process.exit(1);
  });

/* ---------------- SERVER ---------------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
