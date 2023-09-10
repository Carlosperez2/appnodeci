const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hi world!",
  });
});

app.listen(port, `Server listening from http://localhost:${port}`);
