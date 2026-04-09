const router = require("express").Router();

let blogs = [];

// create blog
router.post("/", (req, res) => {
  blogs.push(req.body);
  res.json({ message: "Blog created" });
});

// get all blogs
router.get("/", (req, res) => {
  res.json(blogs);
});

module.exports = router;