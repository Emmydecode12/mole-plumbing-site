import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/testimonials';
import '../styles/Testimonials.css';

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2>What Our Clients Say</h2>
          <p className="section-intro">
            Don't take our word for it. Here's what our customers say.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              area={item.area}
              rating={item.rating}
              quote={item.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;