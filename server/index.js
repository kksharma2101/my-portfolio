import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();

const port = process.env.PORT || 8080;

// middleware
app.use(cors());
app.use(express.json());

// routers
app.get("/", (req, res) => {
  res.send("server is live");
});

// app listen
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
