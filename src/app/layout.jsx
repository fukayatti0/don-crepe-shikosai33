'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LanguageProvider } from '../contexts/LanguageContext';
import { Kiwi_Maru } from 'next/font/google';
import '../styles/globals.css';

const GoogleAnalytics = dynamic(() => import('../components/GoogleAnalytics'), { ssr: false });

const KiwiMaru = Kiwi_Maru({
  subsets: ['latin'],
  weight: '400',
  preload: false,
  variable: '--kiwi-maru-pop',
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});

export default function Layout({ children }) {
  return (
    <html lang="ja">
      <body className={`${KiwiMaru.className} min-h-screen flex flex-col`}>
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