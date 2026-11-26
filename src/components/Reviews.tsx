import { Star, ExternalLink, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { Reveal } from './Reveal';

export function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-[#F3EDE2] py-20 sm:py-28 lg:py-32 border-y border-[#E2D8C7]"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Rating Score Card */}
          <Reveal className="lg:col-span-5">
            <div className="rounded-lg bg-[#FBF8F3] p-8 sm:p-11 shadow-[0_12px_36px_-18px_rgba(36,27,21,0.12)]">
              <div className="flex items-center justify-between pb-6 border-b border-[#E2D8C7]">
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#5C4D42]">
                  Google Rating
                </span>
                <span className="text-xs uppercase tracking-[0.16em] text-[#B38B45] font-medium">
                  Verified Listing
                </span>
              </div>

              <div className="py-8 flex items-baseline gap-2.5">
                <span className="font-serif text-6xl sm:text-7xl font-normal text-[#241B15] leading-none">
                  {BUSINESS_INFO.googleRating}
                </span>
                <span className="font-serif text-2xl text-[#5C4D42]">/ 5</span>
              </div>

              <div className="flex items-center gap-1.5 mb-4" aria-label="4.9 out of 5 stars">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-[#B38B45] text-[#B38B45]"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="text-sm text-[#241B15] font-medium">
                Based on {BUSINESS_INFO.googleReviewCount} Google reviews
              </p>
              <p className="text-xs text-[#5C4D42] mt-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B38B45] shrink-0" aria-hidden="true" />
                <span>{BUSINESS_INFO.cityRegion}</span>
              </p>
            </div>
          </Reveal>

          {/* Editorial Context & Authentic Google Link */}
          <Reveal delay={0.12} className="lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#B38B45] mb-4">
              Customer Trust
            </p>
            <h2
              id="reviews-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-tight text-[#241B15] leading-[1.14] mb-6"
            >
              Trusted by homeowners across Satara, rated 4.9 out of 5 on Google.
            </h2>
            <p className="text-[15px] sm:text-base text-[#5C4D42] leading-relaxed mb-8 max-w-2xl">
              Our reputation has been built piece by piece inside real living rooms across Sangam Mahuli and Satara. Rather than displaying curated excerpts, we invite you to read all {BUSINESS_INFO.googleReviewCount} genuine customer reviews and showroom photos directly on our official Google Business listing.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#231A14] text-[#FBF8F3] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] hover:bg-[#B38B45] hover:text-[#231A14] transition-colors duration-300"
              >
                <span>Read {BUSINESS_INFO.googleReviewCount} Reviews on Google</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#241B15]/25 text-[#241B15] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] hover:border-[#241B15] transition-colors duration-300"
              >
                <span>Visit Our Showroom</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
