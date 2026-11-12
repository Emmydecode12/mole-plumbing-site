import PageHeader from '../components/PageHeader';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import ContactMap from '../components/ContactMap';
import '../styles/Contact.css';

function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Tell us what you need and we will get back to you fast."
      />

      <section className="section contact">
        <div className="container contact__inner">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <ContactMap />
    </>
  );
}

export default Contact;