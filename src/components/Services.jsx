import ServiceCard from './ServiceCard';
import { services } from '../data/services';
import '../styles/Services.css';

function Services() {
  return (
    <section className="section services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2>What We Do Best</h2>
          <p className="section-intro">
            From small leaks to full installations, we handle it all.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;