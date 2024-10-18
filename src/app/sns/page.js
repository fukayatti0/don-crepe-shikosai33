'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Head from 'next/head'; // 追加
import InstagramEmbed from '../../components/InstagramEmbed';
import PostEmbed from '../../components/PostEmbed';

const SNSPage = () => {
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
      <h1 className="mb-4">SNSアカウント</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card social-card h-100">
            <div className="card-body">
              <div className="card-title">
                <Image
                  src="/images/sns-logo-instagram.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </div>
              <InstagramEmbed />
              <PostEmbed />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SNSPage;