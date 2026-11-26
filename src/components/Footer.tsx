import { ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, GENERAL_WHATSAPP_URL } from '../data/business';
import { BrandMark } from './BrandMark';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#211812] text-[#FBF8F3] pt-16 pb-24 md:pb-12 border-t border-[#FBF8F3]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FBF8F3]/12">
          <div className="md:col-span-5">
            <div className="mb-4">
              <BrandMark variant="dark" />
            </div>
            <p className="text-sm text-[#FBF8F3]/70 max-w-sm leading-relaxed">
              Showroom &amp; manufacturer of fine sofa collections, beds, dining sets, and home furniture in Sangam Mahuli, Satara.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#CCA969] mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm text-[#FBF8F3]/75">
              <li>
                <a href="#home" className="hover:text-[#FBF8F3] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#FBF8F3] transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FBF8F3] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FBF8F3] transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FBF8F3] transition-colors">
                  Contact &amp; Map
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#CCA969] mb-4">
              Showroom
            </p>
            <p className="text-sm text-[#FBF8F3]/75 leading-relaxed mb-3">
              {BUSINESS_INFO.address}
            </p>
            <p className="text-sm text-[#FBF8F3]/90 mb-4">
              <a href={BUSINESS_INFO.phoneHref} className="hover:text-[#CCA969] transition-colors">
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </p>
            <a
              href={GENERAL_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-[#CCA969] hover:text-[#FBF8F3] transition-colors"
            >
              <span>Message on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#FBF8F3]/55">
          <p>
            &copy; {year} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p>Sangam Mahuli, Satara, Maharashtra 415003</p>
        </div>
      </div>
    </footer>
  );
}
