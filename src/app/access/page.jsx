// app/access/page.jsx
'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { content } from '../../constants/content';

const AccessPage = () => {
  const [isClient, setIsClient] = useState(false);
  const { language } = useLanguage();
  const t = content[language].access;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <main className="container mx-auto my-5 px-4">
        <h1 className="mb-8 text-3xl font-bold text-center">{t.title}</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-4">
                <h5 className="text-lg font-bold mb-2">{t.storeInfo.title}</h5>
                <h6 className="text-base mb-4">{t.storeInfo.description}</h6>
                <ul className="list-none space-y-2">
                  {t.storeInfo.details.map((detail, index) => (
                    <li key={index}>
                      <strong>{detail.label}：</strong> {detail.content}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-4">
                <h5 className="text-lg font-bold mb-2">{t.map.title}</h5>
                <div className="map-container">
                  <Image
                    src="/images/busmap01.jpg"
                    alt="バスマップ"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccessPage;