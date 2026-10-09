import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vendor Assist",
  description:
    "Vendor Assist helps businesses manage customer requests, orders, and complaints through WhatsApp messaging automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body className="min-h-screen flex flex-col text-[var(--foreground)] bg-[var(--background)]">
        {/* Nav */}
        <header className="border-b border-[var(--border)] bg-white sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
            <Link
              href="/"
              className="font-semibold text-base tracking-tight hover:opacity-80 transition-opacity"
            >
              Vendor Assist
            </Link>
            <nav className="flex gap-6 text-sm text-[var(--muted)]">
              <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
                Home
              </Link>
              <Link href="/privacy" className="hover:text-[var(--foreground)] transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-[var(--border)] text-sm text-[var(--muted)]">
          <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>© {new Date().getFullYear()} Vendor Assist</span>
            <Link href="/privacy" className="hover:text-[var(--foreground)] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
