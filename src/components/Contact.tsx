import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, GENERAL_WHATSAPP_URL } from '../data/business';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#FBF8F3] py-20 sm:py-28 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#B38B45] mb-4">
            Visit The Showroom
          </p>
          <h2
            id="contact-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-tight text-[#241B15] leading-[1.15]"
          >
            Experience the comfort in person at Sangam Mahuli, Satara.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Open Editorial Showroom Information (no clunky outer box) */}
          <Reveal className="lg:col-span-5 flex flex-col justify-between">
            <div className="divide-y divide-[#E2D8C7] border-t border-b border-[#E2D8C7]">
              <div className="py-6">
                <div className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-[#B38B45] mb-2.5">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>Showroom Address</span>
                </div>
                <p className="font-serif text-2xl text-[#241B15] leading-snug">
                  {BUSINESS_INFO.name}
                </p>
                <p className="text-[15px] text-[#5C4D42] mt-2 leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
              </div>

              <div className="py-6">
                <div className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-[#B38B45] mb-2.5">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Direct Telephone</span>
                </div>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="font-sans text-xl sm:text-2xl font-medium tracking-tight text-[#241B15] hover:text-[#B38B45] transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="py-6">
                <div className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-[#B38B45] mb-2.5">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span>Opening Hours</span>
                </div>
                <p className="text-base text-[#241B15] font-medium">
                  {BUSINESS_INFO.openingHours}
                </p>
                <p className="text-xs text-[#5C4D42] mt-1">
                  {BUSINESS_INFO.openingHoursNote}
                </p>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="pt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 rounded-full bg-[#231A14] text-[#FBF8F3] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.16em] hover:bg-[#B38B45] hover:text-[#231A14] transition-colors duration-300"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call Now</span>
              </a>

              <a
                href={GENERAL_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 rounded-full border border-[#241B15]/30 text-[#241B15] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.16em] hover:bg-[#231A14] hover:text-[#FBF8F3] hover:border-[#231A14] transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </Reveal>

          {/* Google Maps Integration */}
          <Reveal delay={0.12} className="lg:col-span-7 flex flex-col">
            <div className="relative overflow-hidden rounded-lg min-h-[380px] sm:min-h-[450px] bg-[#EAE1D2] shadow-[0_12px_36px_-18px_rgba(36,27,21,0.16)]">
              <iframe
                title="Rajdhani Sofa & Furniture Showroom Location Map"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                className="w-full h-full min-h-[380px] sm:min-h-[450px] border-0 grayscale-[20%] contrast-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
              <p className="text-xs text-[#5C4D42]">
                Located along Satara – Koregaon Road, Sangam Mahuli, Satara 415003.
              </p>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-[#241B15] hover:text-[#B38B45] transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
