import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OmniFlow AI — Social Automation & Digital Store SaaS",
  description: "Automate Instagram, WhatsApp, Facebook & YouTube DMs, sell digital products, and capture leads with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen bg-background text-foreground selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
