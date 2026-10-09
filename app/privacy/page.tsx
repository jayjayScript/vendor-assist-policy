import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Vendor Assist",
  description:
    "Privacy Policy for Vendor Assist, a WhatsApp messaging automation application for businesses.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Vendor Assist Privacy Policy</h1>
      <p className="text-sm text-[var(--muted)] mb-12">Last updated: October 6, 2026</p>

      <div className="space-y-10 text-[var(--foreground)]">

        {/* About */}
        <section>
          <h2 className="text-xl font-semibold mb-3">About Vendor Assist</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Vendor Assist is a messaging automation application that helps
            businesses manage customer requests, orders, complaints, and related
            communications through WhatsApp. This Privacy Policy explains what
            information may be processed when someone communicates with a
            business through Vendor Assist, and how that information is used.
          </p>
        </section>

        {/* Information Processed */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Information That May Be Processed</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            When you communicate with a business through WhatsApp using Vendor
            Assist, the following types of information may be processed:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[var(--muted)] leading-relaxed">
            <li>Your WhatsApp identifier (phone number or user ID)</li>
            <li>Your display name as set in your WhatsApp profile</li>
            <li>The content of messages you send and receive</li>
            <li>
              Any additional information you voluntarily provide during
              conversations (for example, order details, delivery addresses, or
              complaint descriptions)
            </li>
          </ul>
        </section>

        {/* How Information Is Used */}
        <section>
          <h2 className="text-xl font-semibold mb-3">How Information Is Used</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            Information processed through Vendor Assist is used to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[var(--muted)] leading-relaxed">
            <li>Process and route incoming messages</li>
            <li>Respond to customer requests</li>
            <li>Manage and track orders</li>
            <li>Log and resolve complaints</li>
            <li>Provide the core functionality of the Vendor Assist application</li>
          </ul>
        </section>

        {/* No Sale */}
        <section>
          <h2 className="text-xl font-semibold mb-3">We Do Not Sell Personal Information</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Vendor Assist does not sell, rent, or trade personal information to
            any third parties.
          </p>
        </section>

        {/* Third-Party Services */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Third-Party Infrastructure and Services</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            To operate, Vendor Assist relies on third-party infrastructure and
            service providers, including messaging platforms and automation
            providers. Information may be processed by these providers as
            necessary to deliver the application&apos;s functionality. These
            providers are engaged to support the operation of the service and
            are not authorised to use the information for their own unrelated
            purposes.
          </p>
        </section>

        {/* Data Deletion */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Data Deletion</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            You may request the deletion of information associated with your
            interactions through Vendor Assist. To submit a deletion request,
            please contact us using the details in the Contact section below.
            We will process your request in accordance with what is technically
            feasible and will confirm once the deletion has been carried out.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            For privacy-related enquiries or data deletion requests, please
            reach out to the business you are communicating with through Vendor
            Assist. If you have questions specifically about this policy or the
            Vendor Assist application itself, you may contact us directly. We
            will respond to reasonable requests in a timely manner.
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            This policy may be updated from time to time. When changes are
            made, the &ldquo;Last updated&rdquo; date at the top of this page
            will be revised. We encourage you to review this page periodically.
          </p>
        </section>

      </div>
    </div>
  );
}
