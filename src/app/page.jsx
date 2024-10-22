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
    return null;
  }

  return (
    <div className="min-h-screen bg-white/30 rounded-lg">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className={`text-5xl mb-4 ${monomaniacOne.className}`}>
          DON CREPE
        </h1>
        <p className="text-2xl text-gray-600 mb-8">第33回茨香祭</p>
        
        <div className="max-w-lg mx-auto bg-yellow-50 p-6 rounded-lg shadow-lg">
          <div className="text-xl font-bold mb-4">📍 場所</div>
          <p className="text-3xl mb-6">8号館3F 1-2教室</p>
          
          <div className="text-xl font-bold mb-4">⏰ 営業時間</div>
          <p className="text-3xl">
            1日目:10:00 - 16:00
            <br />
            2日目:10:00 - 17:00
            </p>
        </div>
      </div>

      {/* Information Section */}
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-red-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">⚠️ お知らせ</h2>
          <ul className="space-y-2 text-lg">
            <li>・材料がなくなり次第、営業終了となります</li>
            <li>・アレルギー情報は店頭でお尋ねください</li>
            <li>・お支払いは現金のみとなります</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">💡 ご注文の流れ</h2>
          <ol className="list-decimal list-inside space-y-3 text-lg">
            <li>店頭でご注文ください</li>
            <li>お会計をお願いします</li>
            <li>お呼びしましたらクレープをお受け取りください</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HomePage;