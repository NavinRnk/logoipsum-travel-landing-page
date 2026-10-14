import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaChevronRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import '../scss/Footer.scss';

const quickLinks = ['About Us', 'Careers', 'Contact', 'FAQs', 'Blogs', 'Terms & Conditions'];
const packageLinks = ['Group Tours', 'Domestic', 'International', 'Honeymoon', 'Weekend Getaways'];

function FooterLinks({ links }: { links: string[] }) {
  return (
    <ul className="footer-links">
      {links.map((link) => (
        <li key={link}>
          <a href="#top">
            <FaChevronRight />
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main page-width">
        <div className="footer-brand-column">
          <a className="brand" href="#top">
             logoipsum<span className="brand-domain">.com</span>
          </a>
          <p>
            Discover the world with thoughtfully planned journeys and memorable travel experiences.
          </p>
          <div className="social-links">
            <a href="#top" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#top" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#top" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <FooterLinks links={quickLinks} />
        </div>
        <div>
          <h3>Packages</h3>
          <FooterLinks links={packageLinks} />
        </div>
        <div className="contact-column">
          <h3>Get In Touch</h3>
          <p>
            <FaPhoneAlt /> +91 98XXX XXXXX
          </p>
          <p>
            <FaEnvelope /> hello@logoipsum.com
          </p>
          <p>
            <FaMapMarkerAlt /> Coimbatore, India
          </p>
        </div>
      </div>
      <div className="copyright">© 2026 LogoIpsum. All rights reserved.</div>
    </footer>
  );
}
