import { useEffect, useState } from 'react';
import { MessageCircle, Expand, X, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { FEATURED_PRODUCTS, FeaturedProduct } from '../data/products';
import { CategorySlug } from '../data/categories';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';
import { Reveal } from './Reveal';

interface FeaturedProductsProps {
  selectedCategory: 'all' | CategorySlug;
  onSelectCategory: (category: 'all' | CategorySlug) => void;
}

const FILTER_TABS: { id: 'all' | CategorySlug; label: string }[] = [
  { id: 'all', label: 'All Pieces' },
  { id: 'sofa-collections', label: 'Sofa Collections' },
  { id: 'beds', label: 'Beds' },
  { id: 'dining-sets', label: 'Dining Sets' },
  { id: 'home-furniture', label: 'Home Furniture' },
];

export function FeaturedProducts({
  selectedCategory,
  onSelectCategory,
}: FeaturedProductsProps) {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  const visibleProducts =
    selectedCategory === 'all'
      ? FEATURED_PRODUCTS
      : FEATURED_PRODUCTS.filter((item) => item.category === selectedCategory);

  const activeGalleryItem: FeaturedProduct | null =
    galleryIndex !== null ? visibleProducts[galleryIndex] ?? null : null;

  useEffect(() => {
    if (galleryIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setGalleryIndex(null);
      } else if (e.key === 'ArrowRight') {
        setGalleryIndex((prev) =>
          prev === null ? null : (prev + 1) % visibleProducts.length
        );
      } else if (e.key === 'ArrowLeft') {
        setGalleryIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + visibleProducts.length) % visibleProducts.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryIndex, visibleProducts.length]);

  const buildProductWhatsAppUrl = (product: FeaturedProduct) =>
    getWhatsAppUrl(
      `Hello Rajdhani Sofa & Furniture, I would like to enquire about the "${product.name}" (${product.categoryLabel}). Please share available options and showroom details.`
    );

  return (
    <section
      id="featured"
      className="bg-[#F3EDE2] py-20 sm:py-28 lg:py-32 border-t border-[#E2D8C7]"
      aria-labelledby="featured-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#B38B45] mb-3">
              Featured Collection
            </p>
            <h2
              id="featured-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-tight text-[#241B15]"
            >
              Signature showroom pieces.
            </h2>
          </div>

          {/* Editorial Category Filter Tabs */}
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter featured furniture by category"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    onSelectCategory(tab.id);
                    setGalleryIndex(null);
                  }}
                  className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-200 ${
                    isActive
                      ? 'bg-[#231A14] text-[#FBF8F3]'
                      : 'bg-[#FBF8F3] text-[#5C4D42] hover:text-[#241B15] hover:bg-[#EAE1D2]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {visibleProducts.map((product, index) => (
            <Reveal key={product.id} delay={(index % 3) * 0.08}>
              <article className="group flex flex-col h-full">
                <button
                  type="button"
                  onClick={() => setGalleryIndex(index)}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#EAE1D2] text-left focus:outline-none mb-5"
                  aria-label={`View ${product.name} in product gallery`}
                >
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-[#231A14]/90 text-[#FBF8F3] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    <Expand className="w-3 h-3" aria-hidden="true" />
                    <span>View</span>
                  </span>
                </button>

                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#B38B45] mb-1.5">
                      {product.categoryLabel}
                    </p>
                    <h3 className="font-serif text-2xl text-[#241B15] leading-snug mb-2.5">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#5C4D42] leading-relaxed mb-5">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2D8C7]">
                    <a
                      href={buildProductWhatsAppUrl(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#231A14] text-[#FBF8F3] px-6 py-2.5 text-xs font-medium uppercase tracking-[0.14em] hover:bg-[#B38B45] hover:text-[#231A14] transition-colors duration-300"
                    >
                      <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 pt-8 border-t border-[#E2D8C7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-[#5C4D42]">
            Looking for custom upholstery colours, seating configurations, or additional designs? Visit our Sangam Mahuli showroom to explore our full range.
          </p>
          <a
            href={BUSINESS_INFO.phoneHref}
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#241B15] hover:text-[#B38B45] transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Call {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </Reveal>
      </div>

      {/* Product Gallery Lightbox Modal */}
      {activeGalleryItem && (
        <div
          className="fixed inset-0 z-50 bg-[#211812]/90 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeGalleryItem.name}
          onClick={() => setGalleryIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-lg bg-[#FBF8F3] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setGalleryIndex(null)}
              className="absolute top-3.5 right-3.5 z-10 w-10 h-10 rounded-full bg-[#231A14] text-[#FBF8F3] flex items-center justify-center hover:bg-[#B38B45] hover:text-[#231A14] transition-colors"
              aria-label="Close gallery"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-7 relative bg-[#EAE1D2] aspect-[4/3]">
                <img
                  src={activeGalleryItem.image}
                  alt={activeGalleryItem.imageAlt}
                  className="w-full h-full object-cover"
                />

                {visibleProducts.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setGalleryIndex(
                          (galleryIndex! - 1 + visibleProducts.length) %
                            visibleProducts.length
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#FBF8F3]/95 text-[#241B15] shadow flex items-center justify-center hover:bg-[#231A14] hover:text-[#FBF8F3] transition-colors"
                      aria-label="Previous piece"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setGalleryIndex(
                          (galleryIndex! + 1) % visibleProducts.length
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#FBF8F3]/95 text-[#241B15] shadow flex items-center justify-center hover:bg-[#231A14] hover:text-[#FBF8F3] transition-colors"
                      aria-label="Next piece"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#B38B45] mb-2">
                    {activeGalleryItem.categoryLabel}
                  </p>
                  <h3 className="font-serif text-3xl text-[#241B15] leading-tight mb-4">
                    {activeGalleryItem.name}
                  </h3>
                  <p className="text-sm text-[#5C4D42] leading-relaxed mb-6">
                    {activeGalleryItem.description}
                  </p>
                  <p className="text-xs text-[#5C4D42]/80 border-t border-[#E2D8C7] pt-4">
                    Available for viewing and enquiry at our Sangam Mahuli, Satara showroom.
                  </p>
                </div>

                <div className="flex flex-col gap-3 mt-6">
                  <a
                    href={buildProductWhatsAppUrl(activeGalleryItem)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#231A14] text-[#FBF8F3] px-5 py-3.5 text-xs font-medium uppercase tracking-[0.16em] hover:bg-[#B38B45] hover:text-[#231A14] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#241B15]/25 text-[#241B15] px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] hover:border-[#241B15] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Call Showroom</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
