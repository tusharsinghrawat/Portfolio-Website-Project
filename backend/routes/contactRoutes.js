const express = require("express");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");
const Contact = require("../models/Contact");
const router = express.Router();

/* ---------------- SPAM PROTECTION ---------------- */
// 1 IP → max 5 requests in 10 minutes
const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5,
  message: {
    message: "Too many requests. Please try again later ⏳",
  },
});

/* ---------------- EMAIL TRANSPORTER (ONCE) ---------------- */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ---------------- POST /api/contact ---------------- */
router.post("/", contactLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  /* -------- STRONG VALIDATION -------- */
  if (!name || !email || !message) {
    return res.status(400).json({
      message: "All fields are required ❌",
    });
  }

  if (name.length < 2) {
    return res.status(400).json({
      message: "Name must be at least 2 characters",
    });
  }

  if (!email.includes("@")) {
    return res.status(400).json({
      message: "Invalid email address",
    });
  }

  if (message.length < 10) {
    return res.status(400).json({
      message: "Message must be at least 10 characters",
    });
  }

  try {
    /* -------- SAVE TO DATABASE -------- */
    await Contact.create({ name, email, message });

    /* -------- SEND EMAIL -------- */
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Contact Message",
      html: `
        <h3>New Message Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    res.status(201).json({
      message: "Message sent successfully ✅",
    });
  } catch (err) {
    console.error("Contact Error:", err);
    res.status(500).json({
      message: "Server error ❌",
    });
  }
});

module.exports = router;
