import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeFi Lending | @samdevrel",
  description: "Supply assets and borrow against collateral. Real-time APY, utilization, and pool metrics.",
  keywords: ["defi", "lending", "supply", "borrow", "apy", "collateral", "ltv"],
  authors: [{ name: "Sam", url: "https://x.com/samdevrel" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
