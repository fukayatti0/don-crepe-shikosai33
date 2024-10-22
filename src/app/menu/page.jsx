"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

const MenuPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <main className="container mx-auto my-5 p-4 ">
        <h1 className="mb-8 text-3xl font-bold text-center">人気メニュー</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col">
            <div className="card h-full bg-white shadow-md rounded-lg overflow-hidden">
              <Image src="/placeholder-image?width=300&height=200" alt="" width="300" height="200" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-semibold">いちごチョコ🍓</h5>
                <p className="text-gray-700 mt-2">甘酸っぱいイチゴと濃厚クリームの絶妙なハーモニー</p>
                <h6 className="text-lg font-bold mt-4">¥400</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-full bg-white shadow-md rounded-lg overflow-hidden">
              <Image src="/placeholder-image?width=300&height=200" alt="" width="300" height="200" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-semibold">クッキーアンドクリーム🍪</h5>
                <p className="text-gray-700 mt-2">サクサクのクッキーと濃厚なクリームの絶妙なコンビネーション</p>
                <h6 className="text-lg font-bold mt-4">¥450</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-full bg-white shadow-md rounded-lg overflow-hidden">
              <Image src="/placeholder-image?width=300&height=200" alt="" width="300" height="200" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-semibold">抹茶あんこ🍵</h5>
                <p className="text-gray-700 mt-2">濃厚な抹茶と甘さ控えめのあんこの絶妙なバランス</p>
                <h6 className="text-lg font-bold mt-4">¥450</h6>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenuPage;