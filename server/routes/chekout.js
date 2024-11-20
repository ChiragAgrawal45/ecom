// routes/checkout.js
import { Router } from "express";
const router = Router();
import { createCheckoutSession } from "../controllers/checkoutController.js"; // Import the createCheckoutSession function

// Define the "/create-checkout-session" route
router.post("/create-checkout-session", createCheckoutSession);

export default router;
