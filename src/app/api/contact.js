// Next.js API route for contact form (fancy HTML email example)
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Configure your SMTP transport (use real credentials in production)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <div style="font-family: Arial, sans-serif; background: #181a23; color: #fff; padding: 24px; border-radius: 12px; max-width: 480px; margin: auto;">
      <h2 style="color: #a259ff; margin-bottom: 16px;">New Message from ${name}</h2>
      <p style="margin: 0 0 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #a259ff; text-decoration: underline;">${email}</a></p>
      <div style="background: #222; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
        <strong>Message:</strong><br />
        <span style="white-space: pre-line;">${message}</span>
      </div>
      <p style="font-size: 13px; color: #aaa;">Sent from your portfolio contact form.</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `Portfolio Contact <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html,
    });
    return res.status(200).json({ message: 'Message sent!' });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to send email.' });
  }
}
