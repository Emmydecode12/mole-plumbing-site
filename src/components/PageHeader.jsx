import { Link } from 'react-router-dom';
import '../styles/PageHeader.css';

function PageHeader({ title, subtitle }) {
  return (
    <section className="page-header">
      <span className="page-header__dots" aria-hidden="true"></span>

      <div className="container page-header__content">
        <nav className="page-header__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="current">{title}</span>
        </nav>

        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <svg
        className="page-header__wave"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,40 C240,80 480,0 720,30 C960,60 1200,70 1440,30 L1440,80 L0,80 Z"
        />
      </svg>
    </section>
  );
}

export default PageHeader;