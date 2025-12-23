const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");

// 🛡️ SPAM PROTECTION (Rate Limiter)
// 1 IP → max 5 requests in 10 minutes
const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: "Too many requests. Please try again after some time ⏳",
  },
});

// ✅ Create transporter ONCE
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 📩 POST /api/contact
router.post("/", contactLimiter, async (req, res) => {
  try {
    console.log("REQ BODY =>", req.body); // 🔍 DEBUG (important)

    const { name, email, message } = req.body;

    // 🛡️ STRONG VALIDATION
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required ❌",
      });
    }

    if (name.trim().length < 2) {
      return res.status(400).json({
        message: "Name must be at least 2 characters",
      });
    }

    if (!email.includes("@")) {
      return res.status(400).json({
        message: "Invalid email address",
      });
    }

    if (message.trim().length < 10) {
      return res.status(400).json({
        message: "Message should be at least 10 characters",
      });
    }

    // ✅ Save message to MongoDB
    await Contact.create({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    // ✅ Email content
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Contact Message - Portfolio",
      html: `
        <h2>New Message Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: "Message saved & email sent successfully ✅",
    });
  } catch (error) {
    console.error("Contact Error:", error);
    res.status(500).json({
      message: "Something went wrong ❌",
    });
  }
});

module.exports = router;
