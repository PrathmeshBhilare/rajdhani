export const BUSINESS_INFO = {
  name: 'Rajdhani Sofa & Furniture',
  shortName: 'Rajdhani',
  tagline: 'Designed for Comfort. Made for Your Home.',
  address: 'Satara - Koregaon Road, Sangam Mahuli, Satara, Maharashtra 415003',
  cityRegion: 'Sangam Mahuli, Satara',
  phoneDisplay: '+91 91305 72661',
  phoneHref: 'tel:+919130572661',
  whatsappNumber: '919130572661',
  openingHours: '9:00 AM – 8:00 PM',
  openingHoursNote: 'All days, subject to confirmation',
  googleRating: '4.9',
  googleReviewCount: 139,
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rajdhani+Sofa+%26+Furniture+Satara+Koregaon+Road+Sangam+Mahuli+Satara+415003',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Rajdhani%20Sofa%20%26%20Furniture%2C%20Sangam%20Mahuli%2C%20Satara%2C%20Maharashtra%20415003&t=&z=15&ie=UTF8&iwloc=&output=embed',
} as const;

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_WHATSAPP_URL = getWhatsAppUrl(
  'Hello Rajdhani Sofa & Furniture, I would like to enquire about your furniture collection and showroom availability in Sangam Mahuli, Satara.'
);
