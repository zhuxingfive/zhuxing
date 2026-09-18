"use client";

import { useState } from "react";
import { inquiryIntents, enquiryTypes } from "@/lib/inquiry-intents";

type Status = "idle" | "submitting" | "success" | "error";

export default function InquiryForm({
  defaultProduct
}: {
  defaultProduct?: string;
}) {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function applyIntent(id: string) {
    const intent = inquiryIntents.find((i) => i.id === id);
    if (!intent) return;
    const productSuffix = defaultProduct ? `${defaultProduct}. ` : "";
    setMessage(`${intent.presetMessage}${productSuffix}`);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setMessage("");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="intent-buttons">
        {inquiryIntents.map((intent) => (
          <button
            key={intent.id}
            type="button"
            className="intent-btn"
            onClick={() => applyIntent(intent.id)}
          >
            {intent.label}
          </button>
        ))}
      </div>

      <div className="form-grid">
        <input name="company" placeholder="Company" required />
        <input name="name" placeholder="Full Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="phone" placeholder="Phone / WhatsApp" />
        <input name="country" placeholder="Country" />
        <select name="enquiryType" defaultValue="">
          <option value="" disabled>
            Type of Enquiry
          </option>
          {enquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <textarea
        name="message"
        placeholder="Your Message"
        rows={6}
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <label className="consent-checkbox">
        <input type="checkbox" required name="consent" />
        <span>I agree to the processing of my data as per the Privacy Policy.</span>
      </label>

      <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>

      {status === "success" && (
        <p className="form-status success">Thank you. Your message has been sent.</p>
      )}
      {status === "error" && (
        <p className="form-status error">
          There was an error sending your message. Please try again later.
        </p>
      )}
    </form>
  );
}
