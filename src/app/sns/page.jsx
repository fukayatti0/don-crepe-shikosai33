'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import InstagramEmbed from '../../components/InstagramEmbed';
import PostEmbed from '../../components/PostEmbed';

const SNSPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="container mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center">SNSアカウント</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col h-full">
          <div className="bg-white shadow-md rounded-lg flex-grow w-full mr-0.5 flex justify-center">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/sns-logo-instagram.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                  className="mr-3"
                />
                <h2 className="text-xl font-bold text-black">Instagram</h2>
              </div>
              <p className="mb-4 text-black">最新のクレープ写真やメニューをチェック！</p>
              <div className="mb-4 aspect-square max-w-sm mx-auto">
                <InstagramEmbed 
                  postUrl="https://www.instagram.com/p/DAV6PBeyhci/"
                  className="w-full h-full"
                />
              </div>
              <a
                href="https://www.instagram.com/don_crepe.nitic"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:from-purple-600 hover:to-pink-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                @don_crepe.nitic をフォロー
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full">
          <div className="bg-white shadow-md rounded-lg flex-grow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/sns-logo-x.png"
                  alt="X"
                  width={30}
                  height={30}
                  className="mr-3"
                />
                <h2 className="text-xl font-bold text-black">X（旧Twitter）</h2>
              </div>
              <p className="mb-4 text-black">お得な情報や最新情報をお届け！</p>
              <div className="mb-4 w-full max-w-lg mx-auto">
                <PostEmbed 
                  tweetUrl="https://twitter.com/don_crepe_nitic/status/1842417121198010618"
                  className="w-full"
                />
              </div>
              <a
                href="https://twitter.com/don_crepe_nitic"
                className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-blue-600"
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

export default SNSPage;