import Link from "next/link";
import { customerNotice } from "@/lib/home";

export default function CustomerNotice() {
  return (
    <section className="customer-notice">
      <div className="container">
        <h3>{customerNotice.title}</h3>
        <p>
          {customerNotice.body}{" "}
          <Link href={customerNotice.link.href}>
            <strong>{customerNotice.link.label}</strong>
          </Link>
        </p>
      </div>
    </section>
  );
}
