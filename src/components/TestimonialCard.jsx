function getInitials(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ name, area, rating, quote }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__stars" aria-label={`${rating} out of 5 stars`}>
        {'★'.repeat(rating)}
      </div>

      <p className="testimonial-card__quote">{quote}</p>

      <div className="testimonial-card__client">
        <div className="testimonial-card__avatar">{getInitials(name)}</div>
        <div>
          <strong>{name}</strong>
          <span>{area}</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;