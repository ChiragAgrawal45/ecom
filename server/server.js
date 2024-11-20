// src/app.js
import express from "express";
import cors from "cors";
import sendmailRouter from "./routes/sendmail.js";
import checkoutRouter from "./routes/chekout.js";

const app = express();

app.use(express.json());
app.use(cors());

// Use the sendmail and checkout routes
app.use("/api/mail", sendmailRouter);
app.use("/api", checkoutRouter);

app.listen(7000, () => {
  console.log("Server started on port 7000");
});
