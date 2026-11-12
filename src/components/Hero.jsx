import { whatsappLink, callLink } from '../data/contact';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">Trusted Local Plumbers</span>

          <h1>
            Reliable Plumbing <span>You Can Trust</span>
          </h1>

          <p>
            Leak repairs, pipe installation and bathroom fittings, all
            plumbing maintenance done fast and done right.
             Our team of experienced plumbers is available 
             24/7 to handle any emergency plumbing needs you may have.
          </p>

          <div className="hero__buttons">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Get a Quote
            </a>
            <a href={callLink} className="btn btn--outline">
              Call Now
            </a>
          </div>

          <ul className="hero__points">
            <li>24/7 Emergency</li>
            <li>Fast Response</li>
            <li>Fair Pricing</li>
          </ul>
        </div>

        <div className="hero__image">
          <img src="public/heroplumbing.jpg" alt="Plumber fixing a pipe" />
        </div>
      </div>
    </section>
  );
}

export default Hero;