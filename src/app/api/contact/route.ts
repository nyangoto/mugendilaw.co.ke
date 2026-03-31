import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name:    z.string().min(2),
  company: z.string().optional(),
  email:   z.string().email(),
  phone:   z.string().min(7),
  service: z.string().min(1),
  message: z.string().min(20),
});

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "info@mugendilaw.co.ke";

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }
  const resend = new Resend(apiKey);
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 422 });
  }

  const { name, company, email, phone, service, message } = parsed.data;

  try {
    await resend.emails.send({
      from:    "Mugendi Law Website <onboarding@resend.dev>",
      to:      TO_EMAIL,
      replyTo: email,
      subject: `New Enquiry: ${service} — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #0A0A0A; padding: 32px; text-align: center;">
            <p style="color: #C9A84C; font-size: 11px; letter-spacing: 4px; text-transform: uppercase; margin: 0;">
              New Website Enquiry
            </p>
          </div>
          <div style="padding: 32px; background: #f9f9f7;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 13px; color: #666; width: 130px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 13px;">${name}</td>
              </tr>
              ${company ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 13px; color: #666;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 13px;">${company}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 13px; color: #666;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 13px;">
                  <a href="mailto:${email}" style="color: #C9A84C;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 13px; color: #666;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 13px;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 13px; color: #666;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 13px;">${service}</td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #999; margin-bottom: 8px;">Message</p>
              <p style="font-size: 14px; line-height: 1.7; color: #333; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding: 20px 32px; background: #f0ede4; text-align: center;">
            <p style="font-size: 11px; color: #999; margin: 0;">
              Mugendi Law Advocates LLP · Heri Plaza, Karen, Ngong Road, Nairobi
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
