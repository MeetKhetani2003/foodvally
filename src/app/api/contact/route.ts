import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    // Create a Nodemailer transporter using SMTP credentials from .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === 'true' || true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Send via authenticated user to avoid spam filters
      replyTo: email,
      to: process.env.SMTP_USER, // Send to yourself
      subject: `New Inquiry from ${name} ${service ? `[${service}]` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #090909; color: #f5f0e8; padding: 40px; border: 1px solid #c9a96e;">
          <h2 style="color: #c9a96e; font-weight: normal; margin-bottom: 24px; border-bottom: 1px solid rgba(201,169,110,0.3); padding-bottom: 16px;">New Booking Inquiry</h2>
          
          <div style="margin-bottom: 16px;">
            <strong style="color: #c9a96e; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Name</strong>
            <p style="margin: 4px 0 0; font-size: 16px;">${name}</p>
          </div>
          
          <div style="margin-bottom: 16px;">
            <strong style="color: #c9a96e; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Email</strong>
            <p style="margin: 4px 0 0; font-size: 16px;">
              <a href="mailto:${email}" style="color: #f5f0e8; text-decoration: none;">${email}</a>
            </p>
          </div>
          
          <div style="margin-bottom: 16px;">
            <strong style="color: #c9a96e; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Phone Number</strong>
            <p style="margin: 4px 0 0; font-size: 16px;">${phone || 'Not provided'}</p>
          </div>
          
          ${service ? `
          <div style="margin-bottom: 16px;">
            <strong style="color: #c9a96e; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Service Interested In</strong>
            <p style="margin: 4px 0 0; font-size: 16px;">${service}</p>
          </div>
          ` : ''}
          
          <div style="margin-bottom: 32px;">
            <strong style="color: #c9a96e; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Message</strong>
            <p style="margin: 8px 0 0; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="border-top: 1px solid rgba(201,169,110,0.3); padding-top: 16px; font-size: 12px; color: #9e9082;">
            This email was automatically generated from the Food Valley website inquiry form.
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Inquiry sent successfully.' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send inquiry. Please try again later.' }, { status: 500 });
  }
}
