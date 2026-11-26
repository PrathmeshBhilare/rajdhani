import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import heroSofa from '../assets/hero-sofa.jpg';
import { BUSINESS_INFO } from '../data/business';

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#FBF8F3] pt-28 sm:pt-32 pb-16 sm:pb-24 lg:pb-28 border-b border-[#E2D8C7]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Editorial Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-10 sm:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-[#B38B45] mb-5">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Sangam Mahuli, Satara</span>
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.85rem] font-normal tracking-[-0.015em] leading-[1.08] text-[#241B15]">
              Designed for Comfort.
              <br />
              Made for Your Home.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-start gap-6"
          >
            <p className="text-[15px] sm:text-base text-[#5C4D42] leading-relaxed">
              Showroom &amp; manufacturer of crafted sofas, beds, dining sets, and bespoke home furniture — built for enduring comfort and everyday elegance.
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#featured"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#231A14] text-[#FBF8F3] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] hover:bg-[#B38B45] hover:text-[#231A14] transition-colors duration-300"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#241B15]/25 text-[#241B15] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] hover:border-[#241B15] transition-colors duration-300"
              >
                <span>Visit Showroom</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Large Editorial Hero Photograph */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-lg bg-[#EAE1D2] shadow-[0_20px_50px_-20px_rgba(36,27,21,0.18)]"
        >
          <div className="aspect-[16/10] sm:aspect-[16/9] w-full">
            <img
              src={heroSofa}
              alt="Luxury upholstered sofa in warm ivory tones on a dark walnut base inside a sunlit living room"
              width={1600}
              height={900}
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Subtle Editorial Caption Strip */}
          <div className="bg-[#231A14] text-[#FBF8F3] px-6 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <span className="uppercase tracking-[0.2em] font-medium text-[#CCA969]">
              {BUSINESS_INFO.name}
            </span>
            <span className="text-[#FBF8F3]/80">
              Rated {BUSINESS_INFO.googleRating}/5 across {BUSINESS_INFO.googleReviewCount} Google Reviews &middot; Open {BUSINESS_INFO.openingHours}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
