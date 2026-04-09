const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blog");

app.use("/api/auth", authRoutes);
app.use("/api/blog", blogRoutes);

// DB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// test route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});