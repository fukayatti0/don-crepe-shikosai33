'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LanguageProvider } from '../contexts/LanguageContext';
import { Hachi_Maru_Pop } from 'next/font/google';
import '../styles/globals.css';
import GoogleAnalytics from '../components/GoogleAnalytics';

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
      <GoogleAnalytics /> 
        <LanguageProvider>
          <Navbar />
          <main className="px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="navbar-offset ">
              {children}
            </div>
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}