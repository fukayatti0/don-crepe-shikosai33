// app/menu/page.jsx
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import { content } from '../../constants/content';

const MenuPage = () => {
  const [isClient, setIsClient] = useState(false);
  const { language } = useLanguage();
  const t = content[language].menu;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <main className="container mx-auto my-5 p-4">
        <h1 className="mb-8 text-3xl font-bold text-center">{t.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.items.map((item, index) => (
            <div key={index} className="col">
              <div className="card h-full bg-white shadow-md rounded-lg overflow-hidden">
                <Image 
                  src="/placeholder-image?width=200&height=300" 
                  alt="" 
                  width={300} 
                  height={200} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-4">
                  <h5 className="text-xl font-semibold">{item.name}</h5>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                  <h6 className="text-lg font-bold mt-4">{item.price}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MenuPage;