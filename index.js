import express from "express";

const app = express();

const port = 3030;

app.get("/", (req, res) => {
  res.send("server is live");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
