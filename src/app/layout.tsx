// import type { Metadata } from "next";
// import "./globals.css";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "aos/dist/aos.css";
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: "masunvibe",
//   description: "Portfolio website",
//   icons: {
//     icon: "/assets/icon/dp2.png",
//   },
//   keywords: 'UI designer, UX designer, portfolio, Figma, Next.js, Tailwind CSS, web developer, Lagos Nigeria',
//    authors: [{ name: 'SamurAI' }],
//    openGraph: {
//      title: 'SamurAI Portfolio',
//      description: 'Modern portfolio showcasing UI/UX projects and experience.',
//      images: '/og-image.jpg',
//      type: 'website',
//    },
//    robots: 'index, follow',
//    verification: { google: 'your-google-site-verification' },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }





import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://umohmarvelous.dev'),
  title: {
    default: 'Umoh Marvelous | Fullstack Developer',
    template: '%s | Umoh Marvelous',
  },
  description:
    'Umoh Marvelous Sunday — Fullstack developer based in Nigeria specialising in React, Next.js, and Node.js. Available for freelance projects and full-time roles.',
  keywords: [
    'Umoh Marvelous',
    'Fullstack Developer Nigeria',
    'React Developer',
    'Next.js Developer',
    'Frontend Developer Warri',
    'Web Developer Delta State',
    'Portfolio',
  ],
  authors: [{ name: 'Umoh Marvelous Sunday', url: 'https://umohmarvelous.dev' }],
  creator: 'Umoh Marvelous Sunday',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://umohmarvelous.dev',
    siteName: 'Umoh Marvelous Portfolio',
    title: 'Umoh Marvelous | Fullstack Developer',
    description: 'Crafting fast, accessible, and memorable digital products. 4 years building things people actually use.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Umoh Marvelous Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umoh Marvelous | Fullstack Developer',
    description: 'Crafting fast, accessible digital products with React & Next.js.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  alternates: { canonical: 'https://umohmarvelous.dev' },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Umoh Marvelous Sunday',
    url: 'https://umohmarvelous.dev',
    jobTitle: 'Fullstack Developer',
    worksFor: { '@type': 'Organization', name: 'Freelance' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Warri',
      addressRegion: 'Delta State',
      addressCountry: 'NG',
    },
    email: 'umohm450@gmail.com',
    telephone: '+2349065424346',
    sameAs: [
      'https://github.com/Umohmarvelous',
      'https://www.instagram.com/marvelstainlex',
    ],
    knowsAbout: ['Next.js', 'React', 'TypeScript', 'Node.js', 'TailwindCSS'],
  }

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#050505] text-white selection:bg-[#00ff00]/20 selection:text-[#00ff00]">
        {children}
      </body>
    </html>
  )
}