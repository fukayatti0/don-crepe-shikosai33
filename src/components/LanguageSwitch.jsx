'use client';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'ja' ? 'en' : 'ja')}
      className="bg-white/20 hover:bg-white text-gray-800 font-bold py-2 px-4 rounded-3xl shadow-lg transition-all flex flex-col items-center space-y-2"
    >
      <span>{language === 'ja' ? '🇺🇸' : '🇯🇵'}</span>
      <span>{language === 'ja' ? 'English' : '日本語'}</span>
    </button>
  );
}