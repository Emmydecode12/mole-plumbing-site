function ProjectCard({ title, category, description, image }) {
  return (
    <article className="project-card">
      <div className="project-card__image">
        <img src={image} alt={title} />
        <span className="project-card__tag">{category}</span>
      </div>
      <div className="project-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;