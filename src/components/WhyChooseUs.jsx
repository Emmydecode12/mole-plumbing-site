import { reasons, stats } from '../data/whyUs';
import { whatsappLink } from '../data/contact';
import '../styles/WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <section className="section why">
      <div className="container">
        <div className="why__inner">
          <div className="why__image">
            <img src="public/moleplumbing.png" alt="Plumbing team at work" />
          </div>

          <div className="why__content">
            <span className="section-label">Why Choose Us</span>
            <h2>Plumbing Done Right</h2>
            <p className="section-intro">
              We combine skill, speed and honest pricing to keep your water
              flowing.
            </p>

            <ul className="why__list">
              {reasons.map((reason) => (
                <li key={reason.id} className="why__item">
                  <span className="why__tick">✔</span>
                  <div>
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Get a Quote
            </a>
          </div>
        </div>

        <div className="why__stats">
          {stats.map((stat) => (
            <div key={stat.id} className="why__stat">
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;