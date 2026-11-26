import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO, GENERAL_WHATSAPP_URL } from '../data/business';

export function WhatsAppButton() {
  return (
    <>
      {/* Mobile Sticky Enquiry Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#231A14] border-t border-[#CCA969]/30 px-4 py-3 flex items-center gap-3">
        <a
          href={BUSINESS_INFO.phoneHref}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-[#FBF8F3]/25 text-[#FBF8F3] py-2.5 text-xs font-medium uppercase tracking-[0.14em]"
        >
          <Phone className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Call Now</span>
        </a>
        <a
          href={GENERAL_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.35] inline-flex items-center justify-center gap-2 rounded-full bg-[#CCA969] text-[#231A14] font-medium py-2.5 text-xs uppercase tracking-[0.14em]"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          <span>Enquire on WhatsApp</span>
        </a>
      </div>

      {/* Desktop Floating WhatsApp Pill */}
      <a
        href={GENERAL_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
        className="hidden md:inline-flex fixed bottom-6 right-6 z-30 items-center gap-2.5 rounded-full bg-[#231A14] text-[#FBF8F3] border border-[#CCA969]/45 px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] shadow-[0_10px_30px_-8px_rgba(33,24,18,0.45)] hover:bg-[#B38B45] hover:text-[#231A14] hover:border-[#B38B45] transition-colors duration-300"
      >
        <MessageCircle className="w-4 h-4" aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </>
  );
}
