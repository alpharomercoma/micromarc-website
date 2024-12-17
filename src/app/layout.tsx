import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Analytics } from "@vercel/analytics/react";
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MicroMarc Research Group',
  description: 'Interdisciplinary study of Computer Science and Psychology to combat Brain Rot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
