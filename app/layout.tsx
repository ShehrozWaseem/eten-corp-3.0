import React from 'react';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import StructuredData from '@/components/StructuredData';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://eten-corp.com'),
  title: {
    default: 'Eten Corporation - Premium Meat Distributor',
    template: '%s | Eten Corporation',
  },
  description: 'Leading North American meat distributor specializing in premium beef, chicken, and turkey. Certified halal and non-halal options.',
  keywords: 'meat distributor, halal meat, beef supplier, chicken, turkey, wholesale meat, Canada, USA',
  authors: [{ name: 'Eten Corporation' }],
  creator: 'Eten Corporation',
  publisher: 'Eten Corporation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" type="image/jpeg" href="/images/icon.jpg" />
        <StructuredData />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                emailjs.init({
                  publicKey: "2p2xNRMc5EToZpbe3",
                });
              })();
            `,
          }}
        />
      </head>
      <body>
        <div className="flex flex-col min-h-screen bg-brand-light text-brand-secondary">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}