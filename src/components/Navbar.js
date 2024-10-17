import Link from 'next/link';
import { Monomaniac_One } from 'next/font/google';

const monomaniacOne = Monomaniac_One({
  weight: '400',
  subsets: ['latin'],
});

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link href="/" className={`navbar-brand ${monomaniacOne.className}`}>
          ドン・クレープ
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">・Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/menu" className="nav-link">・Menu</Link>
            </li>
            <li className="nav-item">
              <Link href="/sns" className="nav-link">・SNS</Link>
            </li>
            <li className="nav-item">
              <Link href="/access" className="nav-link">・Access</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;