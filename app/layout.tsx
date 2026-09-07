import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design Orbit — Interactive 3D Visualization Services",
  description: "Custom browser-based 3D stories for medical education, scientific research, and product communication.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
