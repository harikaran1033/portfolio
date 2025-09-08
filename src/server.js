import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "harikaran103345@gmail.com",
        pass: "xono yghi npdc wkqr",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: "harikaran103345@gmail.com",
      to: "harikaran103345@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
