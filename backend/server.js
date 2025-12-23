const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoutes"); // ✅ ADD

const app = express();

// ================= Middleware =================
app.use(cors());
app.use(express.json());

// ================= Routes =================
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes); // ✅ ADD

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// ================= MongoDB Connection =================
// ✅ NO deprecated options (mongoose v7+ compatible)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.error("MongoDB Error:", err));

// ================= Server =================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
