import {
  PHONE_DISPLAY,
  LOCATION_TEXT,
  HOURS_TEXT,
  whatsappLink,
  callLink,
} from '../data/contact';

const infoItems = [
  {
    id: 1,
    icon: '📞',
    title: 'Call Us',
    text: PHONE_DISPLAY,
    href: callLink,
  },
  {
    id: 2,
    icon: '💬',
    title: 'WhatsApp',
    text: 'Chat with us',
    href: whatsappLink,
    external: true,
  },
  {
    id: 3,
    icon: '📍',
    title: 'Location',
    text: LOCATION_TEXT,
  },
  {
    id: 4,
    icon: '🕐',
    title: 'Working Hours',
    text: HOURS_TEXT,
  },
];

function ContactInfo() {
  return (
    <div className="contact__info">
      {infoItems.map((item) => (
        <div key={item.id} className="info-card">
          <div className="info-card__icon">{item.icon}</div>
          <div>
            <h3>{item.title}</h3>
            {item.href ? (
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
              >
                {item.text}
              </a>
            ) : (
              <p>{item.text}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;