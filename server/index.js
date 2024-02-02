import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./routers/portfolioRoutes.js";

const app = express();

const port = process.env.PORT || 8080;

// middleware
app.use(cors());
app.use(express.json());

// routers
app.use("/api/v1/protfolio", router);

// app listen
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
