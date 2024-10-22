import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={`bg-gradient-to-r from-emerald-500 to-indigo-500 text-white py-8`}>
      <div className="container mx-auto px-4">
        <div className={`contact-info mb-4`}>
          〒312-8508<br />
          茨城県ひたちなか市中根866<br />
          茨城工業高等専門学校<br />
          8号館1年2組教室<br />
          (3階)
        </div>
        <hr className="border-white-700 my-4" />
        <div className={"footer-bottom flex justify-between items-center"}>
          <div className="footer-text text-xl">
            © ドン・クレープ 
            <br></br>
            第33回茨香祭1年2組
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