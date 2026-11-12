import { founder } from '../data/founder';
import { whatsappLink } from '../data/contact';

function Founder() {
  return (
    <section className="section">
      <div className="container founder__inner">
        <div className="founder__image">
          <img src={founder.image} alt={founder.name} />
        </div>

        <div className="founder__content">
          <span className="section-label">Meet the Founder</span>
          <h2>{founder.name}</h2>
          <p className="founder__role">{founder.role}</p>
          <p className="founder__bio">{founder.bio}</p>

          <blockquote className="founder__quote">{founder.quote}</blockquote>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Work With Moses
          </a>
        </div>
      </div>
    </section>
  );
}

export default Founder;