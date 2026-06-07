import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";


export const metadata: Metadata = {
  title: "DWMI | Dutch Water Management International",
  description:
    "DWMI is a non-profit platform connecting independent Dutch water professionals and small specialist firms for international integrated water management projects.",
  keywords: [
    "Dutch water management",
    "DWMI",
    "international water experts",
    "integrated water resources management",
    "flood risk management",
    "water and soil-led planning",
    "hydro-informatics",
    "climate adaptation",
    "coastal resilience",
    "water consultancy network",
  ],
  metadataBase: new URL("https://www.dwmi.nl"),
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/dwmi-logo.svg", type: "image/svg+xml" }],
    shortcut: "/dwmi-logo.svg",
  },
  openGraph: {
    title: "DWMI | Dutch Water Management International",
    description:
      "Collective Dutch Expertise, Global Water Impact. A non-profit platform for independent Dutch water professionals working internationally.",
    url: "https://www.dwmi.nl",
    siteName: "DWMI",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
