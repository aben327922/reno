import type { Metadata } from 'next';
import { Oswald, Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  title: 'Renov8 | Architecture & Renovation Syndicate',
  description:
    'Renov8 (Architecture & Renovation Syndicate) is a multidisciplinary design-build studio crafting enduring spaces across Islamabad, Pakistan. 14 in-house specialist divisions under one accountable standard.',
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
      </body>
    </html>
  );
}
