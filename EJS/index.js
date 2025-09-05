const express = require("express");
const path = require("path");
const products = require("./products");

const app = express();

// set view engine as ejs
app.set("view engine", "ejs");

// set the view directory
app.set("views", path.join(__dirname, "views"));

// routes

app.get("/", (req, res) => {
  res.render();
});
