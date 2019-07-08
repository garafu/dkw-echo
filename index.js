var ascii = require("cool-ascii-faces");
var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("content-language", "ja");
  res.end(`[${(new Date()).toISOString()}] ${ascii()}`);
});

app.listen(3000);