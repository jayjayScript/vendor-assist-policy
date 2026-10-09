import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vendor Assist – WhatsApp Messaging Automation for Businesses",
  description:
    "Vendor Assist helps businesses manage customer requests, orders, and complaints through WhatsApp messaging automation.",
};

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6">
          Customer communication,{" "}
          <span className="text-[var(--accent-dark)]">simplified.</span>
        </h1>
        <p className="text-lg sm:text-xl text-[var(--muted)] max-w-2xl mb-8 leading-relaxed">
          Vendor Assist is a messaging automation application that helps
          businesses manage customer requests, orders, complaints, and related
          communications through WhatsApp.
        </p>
        <Link
          href="/privacy"
          className="inline-block text-sm text-[var(--muted)] underline underline-offset-4 hover:text-[var(--foreground)] transition-colors"
        >
          View our Privacy Policy →
        </Link>
      </section>

      {/* Features */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">What Vendor Assist does</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: "Customer Requests",
              description:
                "Receive and respond to customer inquiries quickly and consistently via WhatsApp.",
            },
            {
              title: "Order Management",
              description:
                "Track and manage orders through structured WhatsApp conversations.",
            },
            {
              title: "Complaint Handling",
              description:
                "Log and resolve customer complaints in an organised, auditable way.",
            },
            {
              title: "Messaging Automation",
              description:
                "Automate routine responses so your team can focus on what matters.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="border border-[var(--border)] rounded-xl p-6"
            >
              <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp note */}
      <section className="border border-[var(--border)] rounded-xl p-8 bg-gray-50">
        <p className="text-sm text-[var(--muted)] leading-relaxed">
          Vendor Assist operates through the{" "}
          <strong className="text-[var(--foreground)]">
            WhatsApp Business Platform
          </strong>
          . By interacting with a business using Vendor Assist via WhatsApp, your
          messages are processed to deliver the service. Please see our{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-2 hover:text-[var(--foreground)] transition-colors"
          >
            Privacy Policy
          </Link>{" "}
          for information on how data is handled.
        </p>
      </section>
    </div>
  );
}
