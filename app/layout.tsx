import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aptis - Candidate Report | British Council",
  description: "British Council Aptis Candidate Report",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
