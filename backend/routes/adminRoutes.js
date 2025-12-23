const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// GET /api/admin/messages
router.get("/messages", async (req, res) => {
  const adminKey = req.headers["x-admin-key"];

  if (adminKey !== process.env.ADMIN_KEY) {
    return res.status(401).json({ message: "Unauthorized ❌" });
  }

  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
