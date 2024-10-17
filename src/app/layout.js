'use client';

import { useEffect } from 'react';
import { Raleway, Monomaniac_One, Noto_Serif_JP } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

const raleway = Raleway({ subsets: ['latin'], weight: '700' });
const monomaniacOne = Monomaniac_One({ subsets: ['latin'], weight: '400' });
const notoSerifJP = Noto_Serif_JP({ subsets: ['latin'], weight: '700' });

export default function RootLayout({ children }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log('Bootstrap JS loaded');
      })
      .catch((err) => {
        console.error('Failed to load Bootstrap JS', err);
      });
  }, []);

  return (
    <html lang="ja">
      <body className={raleway.className}>
        <Navbar />
        <main className="container my-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}