import InquiryForm from "@/components/InquiryForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact Us"
};

export default function ContactPage() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>Reach out for inquiries, quotes, or partnership opportunities.</p>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>{site.address.company}</h3>
          <p>{site.address.line1}</p>
          <p>
            {site.address.city} {site.address.postalCode}
          </p>
          <p>{site.address.country}</p>
          <p>Tel: {site.phone}</p>
          <p>
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>{site.businessHours}</p>
        </div>

        <InquiryForm />
      </div>
    </div>
  );
}
