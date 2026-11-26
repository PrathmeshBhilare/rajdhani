import { CategorySlug } from './categories';
import prodSectional from '../assets/prod-sectional.jpg';
import prodSofaCumBed from '../assets/prod-sofacumbed.jpg';
import prodChester from '../assets/prod-chester.jpg';
import prodBed from '../assets/prod-bed.jpg';
import prodDining from '../assets/prod-dining.jpg';
import prodLounge from '../assets/prod-lounge.jpg';

export interface FeaturedProduct {
  id: string;
  name: string;
  category: CategorySlug;
  categoryLabel: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    id: 'aurelia-sectional',
    name: 'Aurelia L-Shaped Sectional',
    category: 'sofa-collections',
    categoryLabel: 'Sofa Collections',
    description:
      'Generously proportioned corner seating with plush tailored cushions and a warm wooden plinth base, crafted for relaxed family living rooms.',
    image: prodSectional,
    imageAlt: 'Aurelia L-Shaped Sectional sofa in warm ivory upholstery on a dark walnut base',
  },
  {
    id: 'meridian-sofacumbed',
    name: 'Meridian Sofa-Cum-Bed',
    category: 'sofa-collections',
    categoryLabel: 'Sofa Collections',
    description:
      'Effortlessly transitions from refined daytime seating into a welcoming guest bed, balancing clean lines with everyday practicality.',
    image: prodSofaCumBed,
    imageAlt: 'Meridian upholstered sofa-cum-bed in warm taupe fabric with walnut armrests',
  },
  {
    id: 'heritage-tufted-sofa',
    name: 'Heritage Tufted Three-Seater',
    category: 'sofa-collections',
    categoryLabel: 'Sofa Collections',
    description:
      'Classic deep-tufted upholstery paired with sculpted wooden legs — an enduring centerpiece for formal living and reception spaces.',
    image: prodChester,
    imageAlt: 'Heritage hand-tufted three-seater sofa in warm cognac upholstery',
  },
  {
    id: 'imperial-platform-bed',
    name: 'Imperial Upholstered Bed',
    category: 'beds',
    categoryLabel: 'Beds',
    description:
      'Architectural dark wood framing anchored by a softly padded vertical-channel headboard for tranquil, restorative bedrooms.',
    image: prodBed,
    imageAlt: 'Imperial dark wood platform bed with tailored ivory upholstered headboard',
  },
  {
    id: 'veranda-dining-set',
    name: 'Veranda Six-Seater Dining Set',
    category: 'dining-sets',
    categoryLabel: 'Dining Sets',
    description:
      'A rich wooden dining table complemented by gently curved upholstered chairs, designed to bring warmth to every meal.',
    image: prodDining,
    imageAlt: 'Veranda dark walnut dining table with ivory upholstered dining chairs',
  },
  {
    id: 'atelier-lounge-chair',
    name: 'Atelier Lounge Chair & Side Table',
    category: 'home-furniture',
    categoryLabel: 'Home Furniture',
    description:
      'Sculpted timber contours and tactile upholstery paired with an accent side table for quiet reading corners and bedrooms.',
    image: prodLounge,
    imageAlt: 'Atelier sculpted dark walnut and ivory lounge chair with matching round side table',
  },
];
