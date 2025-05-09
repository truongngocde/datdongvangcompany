const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const compression = require("compression");
require("dotenv").config();

const newsCategoriesRouter = require("./routers/newsCategoriesRouter");
const newsPostRouter = require("./routers/newsPostsRouters.js");

const app = express();

// 1. GLOBAL MIDDLEWARES

// Set security headers
app.use(helmet({ contentSecurityPolicy: false }));

// Limit repeated requests to public APIs (100 requests/hour)
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

// Body parser
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection & XSS
app.use(mongoSanitize());
app.use(xss());

// Prevent HTTP parameter pollution
app.use(hpp());

// Enable compression
app.use(compression());

// CORS config
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Serve static files
app.use("/uploads", express.static(path.join(__dirname, "public", "uploads")));

// 2. ROUTES
app.use("/api/news-categories", newsCategoriesRouter);
app.use("/api/news-posts", newsPostRouter);

const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
// Kết nối MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
// 4. SERVER START
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});

module.exports = app;
