import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanju M",
  description:
    "Portfolio of Sanju M — SRE & DevSecOps Engineer specializing in Cloud Security, Platform Engineering, AWS, Kubernetes, and Terraform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-surface text-[var(--text-primary)] antialiased">{children}</body>
    </html>
  );
}
