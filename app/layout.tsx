import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DigiLock - Automatizare, Design & Video Marketing",
  description: "Salvez sute de ore prin automatizări inteligente cu n8n și AI, creez experiențe digitale premium și captez atenția prin video marketing strategic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
