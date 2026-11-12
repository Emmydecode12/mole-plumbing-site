import { whatsappLink, callLink } from '../data/contact';
import '../styles/CTABanner.css';

function CTABanner() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__box">
          <div className="cta__text">
            <h2>Got a Leak or a Plumbing Problem?</h2>
            <p>Call or message us today. We respond fast, day or night.</p>
          </div>

          <div className="cta__buttons">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--white"
            >
              Chat on WhatsApp
            </a>
            <a href={callLink} className="btn btn--outline-white">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;