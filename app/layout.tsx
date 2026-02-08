import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DigiLock - Digital Solutions Portfolio",
  description: "Transform your business with cutting-edge digital solutions. Web development, mobile apps, and digital marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
