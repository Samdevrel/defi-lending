import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeFi Lending | @samdevrel",
  description: "Deposit collateral and borrow against it in DeFi lending markets.",
  keywords: ["defi", "lending", "borrowing", "collateral", "apy", "defi-borrow"],
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
