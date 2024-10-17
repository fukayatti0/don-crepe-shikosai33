// src/app/sns/page.jsx
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const MenuPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // または適切なローディング表示
  }

  return (
    <div>
      <main className="container my-5">
        <h1 className="mb-4">人気メニュー</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <div className="card h-100 menu-item">
              <Image src="/placeholder-image?width=200&height=300" alt="" width="200" height="300" />
              <div className="card-body">
                <h5 className="card-title">いちごチョコ</h5>
                <p className="card-text">甘酸っぱいイチゴと濃厚クリームの絶妙なハーモニー</p>
                <h6 className="card-text"><strong>¥400</strong></h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 menu-item">
              <Image src="/placeholder-image?width=200&height=300" alt="" width="200" height="300" />
              <div className="card-body">
                <h5 className="card-title">クッキーアンドクリーム</h5>
                <p className="card-text">サクサクのクッキーと濃厚なクリームの絶妙なコンビネーション</p>
                <h6 className="card-text"><strong>¥450</strong></h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 menu-item">
              <Image src="/placeholder-image?width=200&height=300" alt="" width="200" height="300" />
              <div className="card-body">
                <h5 className="card-title">抹茶あんこ</h5>
                <p className="card-text">濃厚な抹茶と甘さ控えめのあんこの絶妙なバランス</p>
                <h6 className="card-text"><strong>¥450</strong></h6>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenuPage;