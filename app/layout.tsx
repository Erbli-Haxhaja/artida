import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aptis General - Ardita Kadija - British Council",
  description: "British Council Aptis Candidate Report",
  icons: {
    icon: "/favicon.svg",
  },
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
