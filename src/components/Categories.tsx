import { ArrowUpRight } from 'lucide-react';
import { FURNITURE_CATEGORIES, CategorySlug } from '../data/categories';
import { Reveal } from './Reveal';

interface CategoriesProps {
  onSelectCategory: (category: CategorySlug) => void;
}

export function Categories({ onSelectCategory }: CategoriesProps) {
  const handleCategoryClick = (slug: CategorySlug) => {
    onSelectCategory(slug);
    const featuredEl = document.getElementById('featured');
    if (featuredEl) {
      featuredEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="collections"
      className="bg-[#FBF8F3] py-20 sm:py-28 lg:py-32"
      aria-labelledby="categories-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#B38B45] mb-3">
              Curated Categories
            </p>
            <h2
              id="categories-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-tight text-[#241B15]"
            >
              Furniture for every room.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5C4D42] max-w-md leading-relaxed">
            Explore our core showroom collections — thoughtfully designed for living spaces, restful bedrooms, and welcoming dining rooms.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8">
          {FURNITURE_CATEGORIES.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.08}>
              <button
                type="button"
                onClick={() => handleCategoryClick(category.id)}
                className="group w-full text-left focus:outline-none"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#EAE1D2] mb-5">
                  <img
                    src={category.image}
                    alt={category.imageAlt}
                    loading="lazy"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-2xl text-[#241B15] group-hover:text-[#B38B45] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-[#5C4D42] mt-1.5 leading-relaxed">
                      {category.subtitle}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#B38B45] shrink-0 mt-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
