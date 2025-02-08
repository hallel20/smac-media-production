import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  // Validate input
  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // SMTP host (e.g., mail.smacmedia.com.ng)
    port: parseInt(process.env.SMTP_PORT || "465"), // SMTP port (e.g., 465 for SSL)
    secure: true, // Use SSL (true for port 465, false for port 587)
    auth: {
      user: process.env.SMTP_USER, // Your email address (e.g., admin@smacmedia.com.ng)
      pass: process.env.SMTP_PASS, // Your email password
    },
    // tls: {
    //   rejectUnauthorized: false, // TEMPORARY - for testing only
    // },
  });

  // Email options
  const mailOptions = {
    from: process.env.SMTP_USER, // Sender address
    to: process.env.EMAIL_TO, // Recipient address (admin@smacmedia.com.ng)
    subject: `New Contact Form Submission from ${name}`, // Email subject
    text: `You have a new contact form submission:
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `, // Plain text body
    html: `<p>You have a new contact form submission:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Message:</strong> ${message}</li>
      </ul>
    `, // HTML body
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
