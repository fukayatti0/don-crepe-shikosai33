'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const AccessPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <main className="container mx-auto my-5 px-4 ">
        <h1 className="mb-8 text-3xl font-bold text-center">アクセス情報</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-4">
                <h5 className="text-lg font-bold mb-2">店舗情報</h5>
                <h6 className="text-base mb-4">ドン・クレープは、第33回茨香祭の1年2組で出店しています！</h6>
                <ul className="list-none space-y-2">
                  <li><strong>場所：</strong> 茨城工業高等専門学校 8号館1年2組教室（3階）</li>
                  <li><strong>住所：</strong> 〒312-8508 茨城県ひたちなか市中根866</li>
                  <li><strong>最寄り駅：</strong> JR勝田駅から徒歩約40分</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-4">
                <h5 className="text-lg font-bold mb-2">アクセスマップ</h5>
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