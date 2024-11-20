// routes/sendmail.js
import express from "express";
import sendMailController from "../controllers/sendMailController.js";

const router = express.Router();

// Define the "/sendmail" route and attach the controller function
router.post("/sendmail", sendMailController);

export default router;
