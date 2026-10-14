import { FaChevronDown, FaPhoneAlt } from 'react-icons/fa';
import '../scss/Header.scss';

const menuItems = [
  { label: 'Company', href: '#why' },
  { label: 'Group Tours', href: '#trending' },
  { label: 'Domestic', href: '#popular' },
  { label: 'International', href: '#popular' },
  { label: 'Luxury Tours', href: '#packages' },
  { label: 'VISA', href: '#search' },
  { label: 'Giftcards & Offers', href: '#packages' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="topbar page-width">
        <a className="brand" href="#top" aria-label="LogoIpsum home">
          logoipsum<span className="brand-domain">.com</span>
        </a>
        <div className="top-actions">
          <a className="contact-button" href="tel:+910000000000">
            <FaPhoneAlt /> Contact Us
          </a>
          <a className="quick-button" href="#search">
            Quick Enquiry
          </a>
        </div>
      </div>
      <nav className="navigation" aria-label="Main navigation">
        {menuItems.map((item) => (
          <a href={item.href} key={item.label}>
            {item.label}
            <FaChevronDown className="menu-arrow" />
          </a>
        ))}
      </nav>
    </header>
  );
}
