import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

// Double-insurance inquiry handling:
// 1. Resend API sends the inquiry to the sales inbox in real time.
// 2. A runtime log entry is written as a backup in case the email is
//    intercepted or delayed, so no lead is silently lost.
//
// Configuration via environment variables (set in Vercel):
//   RESEND_API_KEY   – Resend API key (required to actually send mail)
//   INQUIRY_FROM     – verified sender, e.g. "Zhuxing Website <inquiries@yueyangzhuxing.com>"
//   INQUIRY_TO       – recipient inbox, defaults to site.email

export async function POST(req: Request) {
  const data = await req.json();

  const { company, name, email, phone, country, enquiryType, message, consent } = data;

  if (!company || !name || !email || !message || !consent) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Runtime log backup — visible in the hosting platform's function logs.
  console.log(
    JSON.stringify({
      type: "lead_backup",
      timestamp: new Date().toISOString(),
      company,
      name,
      email,
      phone,
      country,
      enquiryType,
      message
    })
  );

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.warn("RESEND_API_KEY not set — inquiry was only logged, not emailed.");
    return NextResponse.json({ ok: true, mailed: false });
  }

  // Sender must be on a domain verified in Resend. Falls back to the sales
  // email's domain rather than the vercel.app host (which cannot be verified).
  const fromDomain = site.email.split("@")[1] ?? site.domain;
  const from =
    process.env.INQUIRY_FROM ?? `${site.brand} Website <inquiries@${fromDomain}>`;
  const to = process.env.INQUIRY_TO ?? site.email;

  const rows = [
    ["Company", company],
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "-"],
    ["Country", country || "-"],
    ["Enquiry Type", enquiryType || "-"]
  ];

  const html = `
    <h2>New website inquiry</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="border:1px solid #ddd"><strong>${k}</strong></td><td style="border:1px solid #ddd">${String(
              v
            )}</td></tr>`
        )
        .join("")}
    </table>
    <h3>Message</h3>
    <p style="white-space:pre-wrap">${String(message)}</p>
  `;

  try {
    const resend = new Resend(resendApiKey);
    const result = await resend.emails.send({
      from,
      to,
      reply_to: email,
      subject: `New Inquiry from ${company} (${enquiryType ?? "General"})`,
      html,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMessage:\n${message}`
    });

    if (result.error) {
      console.error("Resend returned error", result.error);
      return NextResponse.json({ ok: true, mailed: false, warning: "email_failed" });
    }
    return NextResponse.json({ ok: true, mailed: true });
  } catch (err) {
    console.error("Resend send failed", err);
    // Email failed but the log backup above already captured the lead.
    return NextResponse.json({ ok: true, mailed: false, warning: "email_failed" });
  }
}
