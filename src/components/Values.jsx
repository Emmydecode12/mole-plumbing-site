import ServiceCard from './ServiceCard';
import { values } from '../data/values';
import '../styles/Services.css';

function Values() {
  return (
    <section className="section values">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Values</span>
          <h2>What We Stand For</h2>
          <p className="section-intro">
            The standards behind every job we take on.
          </p>
        </div>

        <div className="values__grid">
          {values.map((value) => (
            <ServiceCard
              key={value.id}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;