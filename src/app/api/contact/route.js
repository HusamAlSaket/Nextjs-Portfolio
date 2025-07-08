import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ message: 'Email and message are required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 20px; background-color: #0f0f15; font-family: Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #181a23 0%, #2a1a3a 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 8px 32px rgba(162, 89, 255, 0.3);">
          <!-- Header -->
          <div style="background: linear-gradient(90deg, #a259ff, #6b53ff); padding: 24px; text-align: center;">
            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
              🌟 New Message from Your Portfolio
            </h1>
          </div>
          
          <!-- Content -->
          <div style="padding: 32px; color: #ffffff;">
            <div style="margin-bottom: 24px;">
              <h2 style="margin: 0 0 16px 0; color: #a259ff; font-size: 22px; display: flex; align-items: center;">
                👤 Contact Details
              </h2>
              <div style="background: rgba(162, 89, 255, 0.1); border: 1px solid rgba(162, 89, 255, 0.3); border-radius: 12px; padding: 20px;">
                <p style="margin: 0 0 12px 0; font-size: 16px;">
                  <strong style="color: #a259ff;">Name:</strong> ${name}
                </p>
                <p style="margin: 0; font-size: 16px;">
                  <strong style="color: #a259ff;">Email:</strong> 
                  <a href="mailto:${email}" style="color: #6b53ff; text-decoration: none; border-bottom: 1px solid #6b53ff;">${email}</a>
                </p>
              </div>
            </div>
            
            <div style="margin-bottom: 24px;">
              <h2 style="margin: 0 0 16px 0; color: #a259ff; font-size: 22px; display: flex; align-items: center;">
                💬 Message
              </h2>
              <div style="background: rgba(255, 255, 255, 0.05); border-left: 4px solid #a259ff; border-radius: 8px; padding: 20px; font-size: 16px; line-height: 1.6; white-space: pre-line;">
                ${message}
              </div>
            </div>
            
            <!-- Footer -->
            <div style="border-top: 1px solid rgba(162, 89, 255, 0.3); padding-top: 20px; text-align: center;">
              <p style="margin: 0; font-size: 14px; color: #888; font-style: italic;">
                📧 This message was sent from your portfolio contact form
              </p>
              <p style="margin: 8px 0 0 0; font-size: 12px; color: #666;">
                ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `${name} <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,  // or your preferred receiver email
      replyTo: email,
      subject: `🌟 New Contact Form Submission from ${name}`,
      html: htmlTemplate,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // Fallback plain text
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
