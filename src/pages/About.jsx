import PageHeader from '../components/PageHeader';
import AboutStory from '../components/AboutStory';
import Values from '../components/Values';
import Founder from '../components/Founder';
import CTABanner from '../components/CTABanner';
import '../styles/About.css';

function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="The people and the standards behind the work."
      />
      <AboutStory />
      <Values />
      <Founder />
      <CTABanner />
    </>
  );
}

export default About;