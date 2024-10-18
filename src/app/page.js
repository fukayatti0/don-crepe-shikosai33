'use client';
import { Monomaniac_One } from 'next/font/google';
import { useEffect, useState } from 'react';

const monomaniacOne = Monomaniac_One({
  weight: '400',
  subsets: ['latin'],
});

const HomePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // または適切なローディング表示
  }

  return (
    <div className="container mt-5">
      <h1 className={`menu-title ${monomaniacOne.className}`}>
        DON CREPE
      </h1>
    </div>
  );
};

export default HomePage;