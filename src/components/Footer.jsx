import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../constants/content';
import LanguageSwitch from './LanguageSwitch';


export default function Footer() {
  const { language } = useLanguage();
  const t = content[language].Footer;
  return (
    <footer className={`bg-gradient-to-r from-emerald-500 to-indigo-500 text-white py-8`}>
      <div className="container mx-auto px-4">
        <div className={`contact-info mb-4 flex justify-between`}>
          {t.address}
          <LanguageSwitch />
        </div>
        <hr className="border-white-700 my-4" />
        <div className="footer-bottom flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="footer-text text-xl">
              {t.copy}
            </div>
          </div>
          <div className="social-links flex space-x-4">
            <a href="https://x.com/don_crepe_nitic" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/sns-btn-x-white.png"
                alt="X（Twitter）"
                width={30}
                height={30}
              />
            </a>
            <a href="https://instagram.com/don_crepe.nitic" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/sns-btn-instagram-white.png"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}