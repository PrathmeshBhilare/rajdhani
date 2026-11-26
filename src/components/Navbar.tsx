import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, GENERAL_WHATSAPP_URL } from '../data/business';
import { BrandMark } from './BrandMark';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled || mobileOpen
          ? 'bg-[#FBF8F3] border-b border-[#E2D8C7]'
          : 'bg-[#FBF8F3]/95 border-b border-[#E2D8C7]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="focus:outline-none"
            aria-label={BUSINESS_INFO.name}
          >
            <BrandMark variant="light" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium uppercase tracking-[0.16em] text-[#241B15]/80 hover:text-[#B38B45] transition-colors duration-200 py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={GENERAL_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#231A14] text-[#FBF8F3] px-6 py-2.5 text-xs font-medium uppercase tracking-[0.14em] hover:bg-[#B38B45] hover:text-[#231A14] transition-colors duration-300"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[#E2D8C7] text-[#241B15] hover:border-[#B38B45] transition-colors"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FBF8F3] border-t border-[#E2D8C7]">
          <nav className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-[#241B15] border-b border-[#E2D8C7]/60 hover:text-[#B38B45] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-5 flex flex-col gap-3">
              <a
                href={GENERAL_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#231A14] text-[#FBF8F3] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.16em]"
              >
                <span>Enquire Now on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS_INFO.phoneHref}
                onClick={closeMenu}
                className="inline-flex items-center justify-center rounded-full border border-[#241B15]/25 text-[#241B15] px-6 py-3 text-xs font-medium uppercase tracking-[0.16em]"
              >
                Call {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
