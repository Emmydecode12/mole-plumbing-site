export const PHONE_DISPLAY = '0801 234 5678';
export const PHONE_INTL = '2348012345678'; // country code 234, no leading 0, no +

export const LOCATION_TEXT = 'Calabar, Nigeria';
export const MAP_QUERY = 'Calabar, Nigeria'; // change to your street or area for a precise pin
export const HOURS_TEXT = 'Open 24/7';

export const WHATSAPP_MESSAGE =
  'Hello, I would like to make an inquiry about your plumbing services.';

export const buildWhatsappLink = (message) =>
  `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(message)}`;

export const whatsappLink = buildWhatsappLink(WHATSAPP_MESSAGE);
export const callLink = `tel:+${PHONE_INTL}`;