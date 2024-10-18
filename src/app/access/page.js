'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const AccessPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // または適切なローディング表示
  }
  
  return (
    <div>
      <Head>
        <title>SNSアカウント</title> 
      </Head>
      <main className="container my-5">
        <h1 className="mb-4">アクセス情報</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">店舗情報</h5>
                <h6 className="card-text">ドン・クレープは、第33回茨香祭の1年2組で出店しています！</h6>
                <ul className="list-unstyled">
                  <li><strong>場所：</strong> 茨城工業高等専門学校 8号館1年2組教室（3階）</li>
                  <li><strong>住所：</strong> 〒312-8508 茨城県ひたちなか市中根866</li>
                  <li><strong>最寄り駅：</strong> JR勝田駅から徒歩約40分</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">アクセスマップ</h5>
                        <div className="map-container modal-content">
                  <Image
                    src="/images/busmap01.jpg"
                    alt="バスマップ"
                    width={600}
                    height={600}
                    className="img-fluid modal-content"
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