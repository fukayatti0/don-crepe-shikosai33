'use client';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../constants/content';
import { Monomaniac_One, Hachi_Maru_Pop } from 'next/font/google';
import Countdown from '../components/Countdown';

const monomaniacOne = Monomaniac_One({
  weight: '400',
  subsets: ['latin'],
});

const HachiMaruPop = Hachi_Maru_Pop({
  subsets: ['latin'],
  weight: '400',
  preload: false,
  variable: '--font-hachi-maru-pop',
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});

export default function HomePage() {
  const { language } = useLanguage();
  const t = content[language];
  
  // カウントダウンの目標日時を設定
  const targetDate = '2024-10-26T10:00:00';  // 例: 2024年12月31日23:59:59まで

  return (
    <div className="min-h-screen bg-white/30 rounded-lg">
      <div className="container mx-auto px-4 py-12 text-center">
        <title>{t.pagetitle}</title>
        <meta name="description" content={t.title} />
        <h1 className={`text-5xl mb-4 ${monomaniacOne.className}`}>
          {t.title}
        </h1>
        <p className="text-2xl text-gray-600 mb-8">{t.subtitle}</p>

        <div className="bg-red-50/0 p-6 rounded-lg mb-8">
          <ul className="space-y-2 text-lg text-xl">
            {t.greeting.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>

        <Countdown targetDate={targetDate} />
        
        <div className="max-w-lg mx-auto bg-yellow-50 p-6 rounded-lg shadow-lg">
          <div className="text-xl font-bold mb-4">{t.location.title}</div>
          <p className="text-3xl mb-6">{t.location.content}</p>
          
          <div className="text-xl font-bold mb-4">{t.hours.title}</div>
          <p className="text-xl">
            {t.hours.day1}
            <br />
            {t.hours.day2}
          </p>
        </div>
      </div>

<div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-red-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">{t.notices.title}</h2>
          <ul className="space-y-2 text-lg">
            {t.notices.items.map((item, index) => (
              <li key={index}>・{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">{t.orderProcess.title}</h2>
          <ol className="list-decimal list-inside space-y-3 text-lg">
            {t.orderProcess.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}