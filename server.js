const express = require("express");

app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello " });
});

app.get("/ibrahim", (req, res) => {
  res.json({ message: "hello ibrahim" });
});

app.get("/khanjar", (req, res) => {
  res.json({ message: "hello khanjar" });
});

app.get("/kawtar", (req, res) => {
  res.json({ message: "i'm kawtar " });
});

app.listen(3000, () => {
  console.log("server is running");
});