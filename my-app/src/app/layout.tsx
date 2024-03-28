import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "dialog-react-library-bd/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HRnet",
  description: "HRnet is a human resources management system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
