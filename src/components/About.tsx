import { MessageCircle } from 'lucide-react';
import aboutShowroom from '../assets/about-showroom.jpg';
import { BUSINESS_INFO, GENERAL_WHATSAPP_URL } from '../data/business';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section
      id="about"
      className="bg-[#FBF8F3] py-20 sm:py-28 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Showroom Photograph */}
          <Reveal className="lg:col-span-6">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-[#EAE1D2]">
                <img
                  src={aboutShowroom}
                  alt="Handcrafted dark walnut furniture joinery and tailored upholstery detail at Rajdhani Sofa & Furniture"
                  loading="lazy"
                  width={900}
                  height={1200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-medium uppercase tracking-[0.18em] text-[#5C4D42]">
                <span>Showroom &amp; Manufacturer</span>
                <span className="text-[#B38B45]">{BUSINESS_INFO.cityRegion}</span>
              </div>
            </div>
          </Reveal>

          {/* Editorial Narrative */}
          <Reveal delay={0.12} className="lg:col-span-6">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#B38B45] mb-4">
              About Us
            </p>
            <h2
              id="about-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-tight text-[#241B15] leading-[1.14] mb-6"
            >
              A trusted destination for sofas and fine home furniture in Satara.
            </h2>

            <div className="space-y-5 text-[15px] sm:text-base text-[#5C4D42] leading-relaxed">
              <p>
                Located along the Satara – Koregaon Road in Sangam Mahuli,{' '}
                <strong className="font-medium text-[#241B15]">
                  Rajdhani Sofa &amp; Furniture
                </strong>{' '}
                is both a furniture showroom and manufacturer dedicated to bringing comfort, elegance, and reliable craftsmanship to homes across Satara.
              </p>
              <p>
                Our showroom is especially known for its curated sofa collection — spanning L-shaped sectionals, classic three-seaters, and practical sofa-cum-beds — alongside beds, dining sets, and essential home furniture selected to suit diverse family spaces and interiors.
              </p>
              <p>
                Whether you are furnishing a new residence or refreshing a beloved living room, our team takes pride in offering attentive guidance so every piece feels right at home.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-[#E2D8C7] flex flex-wrap items-center gap-3.5">
              <a
                href={GENERAL_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#231A14] text-[#FBF8F3] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] hover:bg-[#B38B45] hover:text-[#231A14] transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Speak With Our Showroom</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-[#241B15]/25 text-[#241B15] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] hover:border-[#241B15] transition-colors duration-300"
              >
                <span>Get Directions</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
