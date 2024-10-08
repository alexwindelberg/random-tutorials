import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "NextJS walk through",
    template: "%s | Testing Metadata",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <p>This is the header for the layout</p>
        </header>
        {children}
        <footer>This is the footer</footer>
      </body>
    </html>
  );
}
