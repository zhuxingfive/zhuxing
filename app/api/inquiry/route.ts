import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

// Double-insurance inquiry handling, per the handbook (section 4.2):
// 1. Resend API sends the inquiry to the sales inbox in real time.
// 2. A runtime log entry is written as a backup in case the email is
//    intercepted or delayed, so no lead is silently lost.

export async function POST(req: Request) {
  const data = await req.json();

  const {
    company,
    name,
    email,
    phone,
    country,
    enquiryType,
    message,
    consent
  } = data;

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
    // Log-only fallback when Resend is not yet configured (e.g. local dev).
    console.warn("RESEND_API_KEY not set — inquiry was only logged, not emailed.");
    return NextResponse.json({ ok: true, mailed: false });
  }

  try {
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: `${site.brand} Website <inquiries@${site.domain}>`, // TODO: verify sending domain in Resend
      to: site.email,
      reply_to: email,
      subject: `New Inquiry from ${company} (${enquiryType ?? "General"})`,
      text: `Company: ${company}\nName: ${name}\nEmail: ${email}\nPhone: ${phone ?? "-"}\nCountry: ${country ?? "-"}\nType: ${enquiryType ?? "-"}\n\nMessage:\n${message}`
    });
    return NextResponse.json({ ok: true, mailed: true });
  } catch (err) {
    console.error("Resend send failed", err);
    // Email failed but the log backup above already captured the lead.
    return NextResponse.json({ ok: true, mailed: false, warning: "email_failed" });
  }
}
