import { MAP_QUERY } from '../data/contact';

function ContactMap() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;

  return (
    <section className="section contact-map">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Find Us</span>
          <h2>Our Location</h2>
        </div>

        <div className="contact-map__frame">
          <iframe
            src={mapSrc}
            title="Map showing our location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactMap;