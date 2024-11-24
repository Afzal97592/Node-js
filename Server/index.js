const http = require("http");
const fs = require("fs");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from Home page");
});

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: /${
    req.url
  } request  from serevre at this time\n `;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("Aboutpage");
        break;
      case "/contact":
        res.end("contact page");
        break;
      default:
        res.end("404 not found ");
    }
  });
});

// myServer.listen(8000, () => console.log("Server started!"));

app.listen(8000, () => console.log("Server started!"));
