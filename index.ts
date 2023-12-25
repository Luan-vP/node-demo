const express = require("express");
const app = express();

app.get("/", (req: any, res: any) => {
  res.send({ hi: "there" });
});

app.get("/healthcheck", (req: any, res: any) => {
  res.send({ status: "ok" });
});

const PORT = process.env.PORT || 5100; // TODO update from Docker env var
console.log(`Server started on port ${PORT}`);
app.listen(PORT);
