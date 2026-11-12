import { Link } from 'react-router-dom';
import { services } from '../data/services';
import {
  PHONE_DISPLAY,
  LOCATION_TEXT,
  HOURS_TEXT,
  whatsappLink,
  callLink,
} from '../data/contact';
import '../styles/Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              MolePlumbing
            </Link>
            <p>Reliable plumbing you can trust. Fast, fair and done right.</p>
          </div>

          <div className="footer__col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/work">Our Work</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>


          <div className="footer__col">
            <h3>Our Services</h3>
            <ul>
              {services.map((service) => (
                <li key={service.id}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3>Contact Us</h3>
            <ul>
              <li>
                📞 <a href={callLink}>{PHONE_DISPLAY}</a>
              </li>
              <li>
                💬{' '}
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  WhatsApp us
                </a>
              </li>
             <li>📍 {LOCATION_TEXT}</li>
             <li>🕐 {HOURS_TEXT}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} Mole Plumbing Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;