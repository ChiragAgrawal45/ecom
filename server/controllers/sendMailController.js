// controllers/sendMailController.js
import nodemailer from "nodemailer";

const sendMailController = async (req, res) => {
  try {
    // Create a Nodemailer transporter with your email service provider's SMTP settings
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mlprjrocks@gmail.com",
        pass: "eidp zavl dbqj jfav",
      },
    });

    // Extract email details from the request body
    const { to, subject, text, attachments } = req.body;

    // Define the email message
    const mailOptions = {
      from: "Prj_Rocks_shopify2023@gmail.com",
      to,
      subject,
      text,
      attachments,
    };

    console.log(mailOptions);

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);

    res.status(500).json({ success: false, message: "Failed to send email" });
  }
};

export default sendMailController;
