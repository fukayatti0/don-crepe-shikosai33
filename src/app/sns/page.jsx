'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import InstagramEmbed from '../../components/InstagramEmbed';
import PostEmbed from '../../components/PostEmbed';

export default function AccessPage() {
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) {
      return null;
    }
  
  return (
    <div>
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
                  className="me-2"
                />
                Instagram
                <div>
                  <p>最新のクレープ写真やメニューをチェック！</p>
                  <InstagramEmbed postUrl="https://www.instagram.com/p/DAV6PBeyhci/" />
                </div>
              </div>
              <a
                href="https://www.instagram.com/don_crepe.nitic"
                className="btn btn-primary mt-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                @don_crepe.nitic をフォロー
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card social-card h-100">
            <div className="card-body">
              <h5 className="card-title">
                <Image
                  src="/images/sns-logo-x.png"
                  alt="X"
                  width={30}
                  height={30}
                  className="me-2"
                />
                X（旧Twitter）
              </h5>
              <p>お得な情報や最新情報をお届け！</p>
              <PostEmbed tweetUrl="https://twitter.com/don_crepe_nitic/status/1842417121198010618" />
              <a
                href="https://twitter.com/don_crepe_nitic"
                className="btn btn-primary mt-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                @don_crepe_nitic をフォロー
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
