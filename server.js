const express = require("express");

app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello " });
});

app.listen(3000, () => {
  console.log("server is running");
});
