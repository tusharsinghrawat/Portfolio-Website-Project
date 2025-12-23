module.exports = function validateContact(req, res, next) {
  const { name, email, message } = req.body;

  if (name.length < 3) {
    return res.status(400).json({ message: "Name too short" });
  }

  if (!email.includes("@")) {
    return res.status(400).json({ message: "Invalid email" });
  }

  if (message.length < 10) {
    return res.status(400).json({ message: "Message too short" });
  }

  next();
};
