import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Warung Nasi Bu Sari | Masakan Rumahan Otentik Semarang",
  description: "Warung Nasi Bu Sari — masakan rumahan khas Jawa Tengah sejak 1998. Nasi campur, gudeg, ayam bakar. Pesan online via WhatsApp atau GoFood.",
  keywords: ["warung nasi", "masakan rumahan", "Semarang", "gudeg", "nasi campur", "Bu Sari"],
  openGraph: {
    title: "Warung Nasi Bu Sari",
    description: "Masakan Rumahan Otentik Sejak 1998",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
