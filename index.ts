const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = 5000; // TODO update from Docker env var
app.listen(PORT);
