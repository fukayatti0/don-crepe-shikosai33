import { Zen_Old_Mincho, Noto_Sans_JP } from 'next/font/google';
import Image from 'next/image';

const zenOldMincho = Zen_Old_Mincho({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-zen-old-mincho',
  display: 'swap',
});

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: false,
  variable: '--font-noto-sans-jp',
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-500 to-indigo-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className={`contact-info mb-4 ${notoSansJp.variable}`}>
          〒312-8508<br />
          茨城県ひたちなか市中根866<br />
          茨城工業高等専門学校<br />
          8号館1年2組教室<br />
          (3階)
        </div>
        <hr className="border-gray-700 my-4" />
        <div className={`footer-bottom flex justify-between items-center ${zenOldMincho.variable}`}>
          <div className="footer-text">
            © ドン・クレープ - 第33回茨香祭1年2組
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