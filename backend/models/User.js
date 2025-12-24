const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,           // ✅ cleanup
      minlength: 2,         // ✅ safety
      maxlength: 50,        // ✅ safety
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,           // ✅ cleanup
      index: true,          // ✅ faster lookup
    },
    password: {
      type: String,
      required: true,
      minlength: 8,         // ✅ aligns with auth validation
      select: false,        // ✅ never return password by default
    },
  },
  {
    timestamps: true,
    versionKey: false,     // ✅ clean documents
  }
);

module.exports = mongoose.model("User", userSchema);
