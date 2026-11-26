import catSofas from '../assets/cat-sofas.jpg';
import catBeds from '../assets/cat-beds.jpg';
import catDining from '../assets/cat-dining.jpg';
import catHome from '../assets/cat-home.jpg';

export type CategorySlug = 'sofa-collections' | 'beds' | 'dining-sets' | 'home-furniture';

export interface FurnitureCategory {
  id: CategorySlug;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}

export const FURNITURE_CATEGORIES: FurnitureCategory[] = [
  {
    id: 'sofa-collections',
    title: 'Sofa Collections',
    subtitle: 'Bespoke L-sectionals, three-seaters, and sofa-cum-beds tailored for everyday comfort.',
    image: catSofas,
    imageAlt: 'Bespoke warm cream linen sofa with dark walnut framing in a sunlit showroom',
  },
  {
    id: 'beds',
    title: 'Beds',
    subtitle: 'Restful wooden and upholstered bed frames crafted for serene bedrooms.',
    image: catBeds,
    imageAlt: 'Sculptural dark walnut king platform bed with upholstered linen headboard',
  },
  {
    id: 'dining-sets',
    title: 'Dining Sets',
    subtitle: 'Warm, inviting dining tables and chairs made for unhurried family gatherings.',
    image: catDining,
    imageAlt: 'Solid dark walnut dining table paired with upholstered stone-fabric chairs',
  },
  {
    id: 'home-furniture',
    title: 'Home Furniture',
    subtitle: 'Console tables, lounge chairs, and accent pieces that complete your living spaces.',
    image: catHome,
    imageAlt: 'Refined dark walnut console credenza and sculpted accent armchair',
  },
];
