'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Raleway, Monomaniac_One, Noto_Serif_JP } from 'next/font/google';
import { useEffect } from 'react';

const raleway = Raleway({ subsets: ['latin'], weight: '700' });
const monomaniacOne = Monomaniac_One({ subsets: ['latin'], weight: '400' });
const notoSerifJP = Noto_Serif_JP({ subsets: ['latin'], weight: '700' });

export default function RootLayout({ children }) {
  useEffect(() => {
    // Bootstrap JSは既にインポートされているため、ここでのrequireは不要です。
  }, []);

  return (
    <html lang="ja">
      <body className={raleway.className}>
        <Navbar />
        <main className="container my-5">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}