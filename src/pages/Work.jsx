import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import CTABanner from '../components/CTABanner';
import { projects } from '../data/projects';
import '../styles/Work.css';

const categories = ['All', ...new Set(projects.map((p) => p.category))];

function Work() {
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <PageHeader
        title="Our Work"
        subtitle="A look at some of the plumbing jobs we have completed."
      />

      <section className="section work">
        <div className="container">
          <div className="work__filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`work__filter ${
                  activeCategory === category ? 'active' : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="work__grid">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

export default Work;