const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hello , This is Home page");
});

app.get("/about", (req, res) => {
  res.send("Hello, this isAbout page");
});

app.listen(2000);
