import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🏔️ Anuj",
  description: "Portfolio Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}
      <Analytics />
      </body>
    </html>
  );
}
