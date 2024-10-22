'use client';
import { Noto_Sans_JP } from "next/font/google";
import { Raleway } from 'next/font/google';
import { Hachi_Maru_Pop } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/globals.css';

const raleway = Raleway({ 
  subsets: ['latin'], 
  weight: '700' 
});

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: false,
  variable: '--font-noto-sans-jp',
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});

const HachiMaruPop = Hachi_Maru_Pop({
  subsets: ['latin'],
  weight: '400',
  preload: false,
  variable: '--font-hachi-maru-pop',
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});

export default function Layout({ children }) {
  return (
    <html lang="ja">
      <body className={`${HachiMaruPop.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="navbar-offset">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}