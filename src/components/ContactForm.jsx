import { useState } from 'react';
import { services } from '../data/services';
import { buildWhatsappLink } from '../data/contact';

const emptyForm = {
  name: '',
  phone: '',
  service: '',
  location: '',
  message: '',
};

function ContactForm() {
  const [form, setForm] = useState(emptyForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = [
      `Hello, my name is ${form.name}.`,
      `I need help with: ${form.service}.`,
      form.location ? `Location: ${form.location}.` : '',
      `Message: ${form.message}`,
      `My number is ${form.phone}.`,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(buildWhatsappLink(text), '_blank', 'noopener,noreferrer');
    setForm(emptyForm);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Send Us a Message</h2>

      <div className="contact-form__field">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="e.g. 0803 000 0000"
          required
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="service">Service Needed</label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          required
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="contact-form__field">
        <label htmlFor="location">Your Location (optional)</label>
        <input
          type="text"
          id="location"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Area or street"
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about the problem"
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn--primary contact-form__btn">
        Send via WhatsApp
      </button>
      <p className="contact-form__note">
        This opens WhatsApp with your message ready to send.
      </p>
    </form>
  );
}

export default ContactForm;