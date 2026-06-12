import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { StructuredData } from '@/components/StructuredData';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://tsrwheels.com'),
  title: {
    default: 'TSR Wheels | Premium Automotive Wheels',
    template: '%s | TSR Wheels'
  },
  description: 'Premium black and gunmetal automotive wheels backed by 37 years of industry experience and a modern dealer program.',
  keywords: ['TSR Wheels', 'premium wheels', 'automotive wheels', 'black wheels', 'gunmetal wheels', 'dealer wheel program'],
  openGraph: {
    title: 'TSR Wheels | Designed to Lead. Built to Dominate.',
    description: 'Explore premium wheels and apply for the TSR Wheels dealer program.',
    url: 'https://tsrwheels.com',
    siteName: 'TSR Wheels',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
