import { sendEmailData } from "../controllers/portfolioController.js";
import express from "express";

const router = express.Router();

router.get("/sendEmail", sendEmailData);

export default router;
