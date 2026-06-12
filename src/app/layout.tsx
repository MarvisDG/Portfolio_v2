import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "masunvibe",
  description: "Portfolio website",
  icons: {
    icon: "/assets/icon/dp2.png",
  },
  keywords: 'UI designer, UX designer, portfolio, Figma, Next.js, Tailwind CSS, web developer, Lagos Nigeria',
   authors: [{ name: 'SamurAI' }],
   openGraph: {
     title: 'SamurAI Portfolio',
     description: 'Modern portfolio showcasing UI/UX projects and experience.',
     images: '/og-image.jpg',
     type: 'website',
   },
   robots: 'index, follow',
   verification: { google: 'your-google-site-verification' },
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

