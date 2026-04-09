const router = require("express").Router();

// simple login (demo)
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "test@gmail.com" && password === "1234") {
    return res.json({
      message: "Login success",
      token: "abc123"
    });
  }

  res.status(400).json({ message: "Invalid credentials" });
});

module.exports = router;