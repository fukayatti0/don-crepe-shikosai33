'use client';
import { Noto_Sans_JP } from "next/font/google";
import { Raleway } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/globals.css';

const raleway = Raleway({ subsets: ['latin'], weight: '700' });

export default function Layout({ children }) {
  return (
    <html lang="ja">
      <body className={`${raleway.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="navbar-offset">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}