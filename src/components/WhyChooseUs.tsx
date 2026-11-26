import { Sparkles, ShieldCheck, HeartHandshake, BadgeIndianRupee } from 'lucide-react';
import { Reveal } from './Reveal';

const PILLARS = [
  {
    number: '01',
    title: 'Beautiful Designs',
    description:
      'Timeless silhouettes and refined proportions tailored to complement both contemporary and classic Indian homes.',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Quality-Focused Furniture',
    description:
      'Carefully constructed frames, supportive cushioning, and durable finishes built for everyday family living.',
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Customer-First Service',
    description:
      'Personalised guidance at our Sangam Mahuli showroom — helping you select styles, fabrics, and layouts with ease.',
    icon: HeartHandshake,
  },
  {
    number: '04',
    title: 'Value for Money',
    description:
      'Direct showroom and manufacturing expertise ensuring honest pricing and lasting comfort for your home.',
    icon: BadgeIndianRupee,
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-[#231A14] text-[#FBF8F3] py-20 sm:py-28 lg:py-32"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#CCA969] mb-4">
              The Rajdhani Standard
            </p>
            <h2
              id="why-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-tight text-[#FBF8F3] leading-[1.15]"
            >
              Crafted with care, chosen for lasting comfort.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#FBF8F3]/75 max-w-md leading-relaxed">
            Every sofa, bed, and dining piece in our showroom reflects our commitment to thoughtful design and dependable everyday comfort.
          </p>
        </Reveal>

        {/* Open architectural pillars — no cramped closed wireframe boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-9 pt-2">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal
                key={pillar.number}
                delay={index * 0.08}
                className="border-t border-[#CCA969]/35 pt-7 flex flex-col justify-start"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-xl tracking-wide text-[#CCA969]">
                    {pillar.number}
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FBF8F3]/6 text-[#CCA969]">
                    <Icon className="w-4 h-4 stroke-[1.6]" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="font-serif text-[1.45rem] leading-snug text-[#FBF8F3] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#FBF8F3]/72 leading-relaxed">
                  {pillar.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
