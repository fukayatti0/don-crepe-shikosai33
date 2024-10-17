            import Image from 'next/image';

            export default function Footer() {
              return (
                <footer className="footer">
                  <div className="footer-content">
                    <div className="footer-top">
                      <div className="footer-image">
                        <Image
                          src="/images/icon.png"
                          alt="ドン・クレープ ロゴ"
                          width={120}
                          height={120}
                          loading="lazy"
                        />
                      </div>
                      <div className="contact-info">
                        〒312-8508<br />
                        茨城県ひたちなか市中根866<br />
                        茨城工業高等専門学校<br />
                        8号館1年2組教室<br />
                        (3階)
                      </div>
                    </div>
                    <hr></hr>
                    <div className="footer-bottom">
                      <div className="footer-text">
                        © ドン・クレープ - 第33回茨香祭1年2組
                      </div>
                      <div className="social-links">
                        <a href="https://x.com/don_crepe_nitic" target="_blank" rel="noopener">
                          <Image
                            src="/images/sns-btn-x-white.png"
                            alt="X（Twitter）"
                            width={30}
                            height={30}
                          />
                        </a>
                        <a href="https://instagram.com/don_crepe.nitic" target="_blank" rel="noopener">
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