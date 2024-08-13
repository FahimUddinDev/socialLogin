const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: "http://127.0.0.1:5500", // Your frontend URL
      credentials: true, // Allow cookies to be sent
    })
  );

  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
};
