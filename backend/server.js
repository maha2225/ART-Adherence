const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/index.js");  // your main router

const app = express();

// CORS middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// Preflight fix
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

// JSON parser
app.use(bodyParser.json());
app.use(express.json());

// Mount all routes under /api
app.use("/api", routes);

// Default test route
app.get("/", (req, res) => {
  res.send("ART Tracker API running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
