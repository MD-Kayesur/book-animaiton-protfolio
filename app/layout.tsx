import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Morgan — Frontend & MERN Stack Developer | Portfolio",
  description:
    "An interactive book-style portfolio of Alex Morgan, Frontend & MERN Stack Developer. Flip through experience, projects, and skills like a real hardcover book.",
  keywords: [
    "Frontend Developer",
    "MERN Stack Developer",
    "Portfolio",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Alex Morgan" }],
  openGraph: {
    title: "Alex Morgan — Frontend & MERN Stack Developer",
    description:
      "An interactive book-style portfolio. Flip through experience, projects, and skills like a real hardcover book.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
