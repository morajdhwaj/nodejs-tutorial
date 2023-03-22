const http = require("http");
http
  .createServer((req, res) => {
    res.write("<h1> hello this is moraj </h1>");
    res.end();
  })
  .listen(4500);
