import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Monomaniac_One } from 'next/font/google';
import Link from 'next/link';

const monomaniacOne = Monomaniac_One({
  weight: '400',
  subsets: ['latin'],
});

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/sns', label: 'SNS' },
    { href: '/access', label: 'Access' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const MobileNavbar = () => (
    <nav className="fixed top-0 left-0 w-full z-50 rounded-3xl overflow-hidden bg-slate-950/80 h-20 font-Dela text-2xl mt-2 pt-4">
      <div className="container mx-auto px-6">
        <div className={`flex justify-between items-center py-0 ${monomaniacOne.className}`}>
          <ul className="flex justify-center items-center pt-1.0">
            <li className="flex flex-col items-center ml-0">
              <Link href="/">
                <Image src="/images/icon.png" alt="第33回茨香祭のロゴ" width={45} height={45} />
              </Link>
            </li>
          </ul>
          {navItems.map((item, index) => (
            <ul key={item.href} className={`flex justify-center items-center relative ${index === 0 ? 'right-[0%]' : index === 1 ? 'right-[0%] transform translate-x-[10%]' : index === 2 ? 'left-[0%] transform translate-x-[37%]' : 'left-[0%] transform translate-x-[30%]'}`}>
              <li className="flex flex-col items-center">
                <Link href={item.href} className="text-white">
                  {item.label}
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-transparent flex">
        <div className="w-1/5 border-b-8 border-yellow-400/80"></div>
        <div className="w-1/5 border-b-8 border-red-400/80"></div>
        <div className="w-1/5 border-b-8 border-blue-400/80"></div>
        <div className="w-1/5 border-b-8 border-green-400/80"></div>
        <div className="w-1/5 border-b-8 border-purple-400/80"></div>
      </div>
    </nav>
  );

  const DesktopNavbar = () => (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 h-24 font-Dela">
      <div className="container mx-auto px-6 h-full">
        <div className={`flex justify-between items-center h-full ${monomaniacOne.className}`}>
          <Link href="/" className="flex text-white text-4xl transition duration-10000 ease-in-out">
            ドン・クレープ
          </Link>
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none relative w-8 h-8 z-50 transition duration-10000 ease-in-out"
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <span className={`block absolute h-1 w-8 bg-white transform transition duration-10000 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
            <span className={`block absolute h-1 w-8 bg-white transform transition duration-10000 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block absolute h-1 w-8 bg-white transform transition duration-10000 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
          </button>
        </div>
      </div>
      <div className={`fixed top-0 right-0 w-64 h-full bg-slate-950/80 shadow-lg transform transition-transform duration-10000 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="mt-24 px-4">
          {navItems.map((item) => (
            <li key={item.href} className="mb-4">
              <Link 
                href={item.href} 
                className="text-white text-xl hover:text-yellow-400 transition-colors block py-2 transition duration-10000 ease-in-out" 
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
  
  return isDesktop ? <DesktopNavbar /> : <MobileNavbar />;
};

export default Navbar;