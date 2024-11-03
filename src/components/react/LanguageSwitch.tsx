import { useLanguage } from '../../stores/useLanguage';
import { useCallback } from 'react';

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleClick = useCallback(() => {
    const newLanguage = language === 'ja' ? 'en' : 'ja';
    console.log('Switching to:', newLanguage);  // デバッグ用
    setLanguage(newLanguage);
  }, [language, setLanguage]);

  return (
    <button
      onClick={handleClick}
      className="bg-white/20 hover:bg-white text-gray-800 font-bold py-2 px-4 rounded-3xl shadow-lg transition-all flex flex-col items-center space-y-2"
    >
      <span>{language === 'ja' ? '🇺🇸' : '🇯🇵'}</span>
      <span>{language === 'ja' ? 'English' : '日本語'}</span>
    </button>
  );
}

export default LanguageSwitch;