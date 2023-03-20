const express = require("express");

const app = express();

app.get("", (req, res) => {
  console.log("heeey", req.query);
  res.send("Hello , This is Home page");
});

app.get("/about", (req, res) => {
  res.send("Hello, this is About page");
});
app.get("/help", (req, res) => {
  res.send("Hello, this is Help page");
});

app.listen(2000);
