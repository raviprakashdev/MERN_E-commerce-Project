const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  return res.send("Hello Ravi Prakash  !!!");
});

app.listen(port, () => console.log(`port no. ${port}`));
