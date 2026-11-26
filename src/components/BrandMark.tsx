interface BrandMarkProps {
  variant?: 'light' | 'dark';
}

export function BrandMark({ variant = 'light' }: BrandMarkProps) {
  const isDarkSurface = variant === 'dark';

  return (
    <div className="group inline-flex items-center gap-3.5">
      {/* Architectural Arch & Sofa Crest Emblem */}
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 shrink-0 transition-transform duration-300 group-hover:scale-[1.03]"
        aria-hidden="true"
      >
        <path
          d="M8 35V20C8 12.268 14.268 6 22 6C29.732 6 36 12.268 36 20V35"
          stroke={isDarkSurface ? '#CCA969' : '#B38B45'}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M12.5 35V28.5C12.5 26.843 13.843 25.5 15.5 25.5H28.5C30.157 25.5 31.5 26.843 31.5 28.5V35"
          stroke={isDarkSurface ? '#FBF8F3' : '#241B15'}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M17.5 25.5V16.5H23.2C25.6 16.5 27.2 17.9 27.2 19.9C27.2 21.8 25.7 23.2 23.3 23.3H17.5M23.1 23.3L27.2 25.5"
          stroke={isDarkSurface ? '#FBF8F3' : '#241B15'}
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 35H38"
          stroke={isDarkSurface ? '#CCA969' : '#B38B45'}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <span
          className={`font-serif text-[1.4rem] sm:text-[1.55rem] font-medium tracking-tight ${
            isDarkSurface ? 'text-[#FBF8F3]' : 'text-[#241B15]'
          }`}
        >
          Rajdhani
        </span>
        <span
          className={`text-[9.5px] uppercase tracking-[0.26em] mt-1 font-medium ${
            isDarkSurface ? 'text-[#CCA969]' : 'text-[#5C4D42]'
          }`}
        >
          Sofa &amp; Furniture
        </span>
      </div>
    </div>
  );
}
