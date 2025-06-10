import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lastdrop",
  description: "Lastdrop Retro and lounge",
  icons: {
    icon: [
      // {
      //   media: '(prefers-color-scheme: light)',
      //   url: '/images/icon-light.png',
      //   href: '/images/icon-light.png',
      // },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon.ico',
        href: 'http://localhost:3000/_next/static/media/Last%20Drop%20Logo.4f54cf3c.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
