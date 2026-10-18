import type { Metadata } from 'next';
import { Oswald, Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArchitecturalChatbot from '@/components/ArchitecturalChatbot';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Renov8 | Architecture & Renovation Studio',
  description:
    'Renov8 (Architecture & Renovation Studio) is a multidisciplinary design-build firm crafting enduring spaces across Islamabad, Pakistan. 14 in-house specialist divisions under one accountable standard.',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/images/brand/logo-dark.png',
    apple: '/images/brand/logo.png',
  },
  openGraph: {
    title: 'Renov8 | Architecture & Renovation Studio',
    description:
      'Turnkey architectural design, construction and interior renovation studio in Islamabad & Rawalpindi. 14 specialist trades, itemized BOQ contracts, and 12-month warranty.',
    url: 'https://www.renov8.com.pk',
    siteName: 'Renov8',
    locale: 'en_PK',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${jakarta.variable} ${cormorant.variable}`}
    >
      <body className="font-sans antialiased bg-[#F6F5F2] text-[#141414] selection:bg-[#A8201A] selection:text-white">
        <Navbar />
        {children}
        <Footer />
        <ArchitecturalChatbot />
      </body>
    </html>
  );
}
