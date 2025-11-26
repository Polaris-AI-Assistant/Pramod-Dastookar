'use client';

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Berkshire_Swash, Playfair_Display } from 'next/font/google';

// Font configurations matching awards section
const berkshireSwash = Berkshire_Swash({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-berkshire',
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
});

// Animated Counter Component
function AnimatedCounter({ target, duration = 3000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const startTime = Date.now();
            const animate = () => {
              const currentTime = Date.now();
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Smoother easing function - easeOutCubic
              const easeOutCubic = 1 - Math.pow(1 - progress, 3);
              const currentCount = Math.floor(easeOutCubic * target);
              
              setCount(currentCount);
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(target);
              }
            };
            
            animate();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={elementRef}>
      {count}
    </span>
  );
}

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface TabStats {
  number: number;
  suffix: string;
  text: string;
  description: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  stats?: TabStats;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "shadcnblocks.com",
  heading = "A Collection of Components Built With Shadcn & Tailwind",
  description = "Join us to build flawless web solutions.",
  tabs = [],
}: Feature108Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tabs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [tabs.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + tabs.length) % tabs.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tabs.length);
  };

  const currentTab = tabs[currentIndex];

  return (
    <section className={`min-h-screen flex items-center py-8 sm:py-12 md:py-16 bg-[#FAF9F6] ${berkshireSwash.variable} ${playfairDisplay.variable}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 sm:gap-3 text-center mb-6 sm:mb-8">
          <span className="text-amber-700 text-sm sm:text-base md:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase font-semibold">
            {badge}
          </span>
          <div className="w-32 sm:w-48 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent" />
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl px-4" style={{
            fontFamily: 'system-ui, sans-serif'
          }}>{description}</p>
        </div>

        {/* Carousel Container */}
        <div className="relative mx-auto mt-4 sm:mt-6 max-w-7xl">{/* Navigation Arrows */}
          {/* <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10  rounded-full p-3 hover:bg-amber-50 hover:border-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10  rounded-full p-3 hover:bg-amber-50 hover:border-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button> */}

          {/* Content */}
          <div className="grid place-items-center gap-6 grid-cols-1 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col gap-3 sm:gap-4 order-2 lg:order-1 w-full">
              <div className="inline-block w-fit mb-1 sm:mb-2">
                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-amber-100 text-amber-800 rounded-full text-xs sm:text-sm font-semibold border border-amber-300" style={{
                  fontFamily: 'var(--font-playfair)'
                }}>
                  {currentTab?.content.badge}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <div style={{ color: '#A68229' }} className="shrink-0">
                  {currentTab?.icon}
                </div>
                <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold leading-tight" style={{
                  color: '#A68229',
                  fontFamily: 'var(--font-playfair)'
                }}>
                  {currentTab?.content.title}
                </h3>
              </div>
              <div className="w-32 sm:w-48 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mb-2 sm:mb-4 md:mb-6" />
              <p className="text-gray-700 text-sm sm:text-base lg:text-md leading-relaxed" style={{
                fontFamily: 'system-ui, sans-serif'
              }}>
                {currentTab?.content.description}
              </p>
              <button className="mt-2 w-fit px-4 sm:px-5 py-2 sm:py-2.5 bg-linear-to-r from-amber-600 to-amber-500 text-white text-sm sm:text-base font-semibold rounded-lg hover:from-amber-700 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl" style={{
                fontFamily: 'var(--font-playfair)'
              }}>
                {currentTab?.content.buttonText}
              </button>
            </div>
            <div className="flex items-center justify-center order-1 lg:order-2 mb-4 lg:mb-0 w-full">
              <div className="relative w-60 h-60 sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full bg-linear-to-br from-amber-400/20 via-amber-300/10 to-amber-500/20 p-[3px] shadow-2xl">
                <div className="w-full h-full rounded-full bg-[#FAF9F6] flex flex-col items-center justify-center text-center gap-2 sm:gap-3 px-6 sm:px-8">
                  <div>
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none" style={{
                      color: '#A68229',
                      fontFamily: 'var(--font-berkshire)'
                    }}>
                      {currentTab?.stats ? (
                        <>
                          {currentTab.stats.number.toLocaleString()}
                          {currentTab.stats.suffix}
                        </>
                      ) : (
                        <>
                          25+
                        </>
                      )}
                    </span>
                    <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight mt-2 sm:mt-3" style={{
                      color: '#A68229',
                      fontFamily: 'var(--font-playfair)'
                    }}>
                      {currentTab?.stats ? currentTab.stats.text : "Years of Transforming Futures"}
                    </h2>
                  </div>
                  <div className="w-12 sm:w-16 h-0.5 bg-linear-to-r from-amber-600 to-amber-400" />
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed max-w-60 sm:max-w-[280px]" style={{
                    fontFamily: 'system-ui, sans-serif'
                  }}>
                    {currentTab?.stats ? currentTab.stats.description : "From engineering classrooms to top corporate boardrooms — a career dedicated to shaping students, strengthening institutions, and powering talent for tomorrow."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
            {tabs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-6 sm:w-8 bg-amber-600' 
                    : 'w-1.5 sm:w-2 bg-amber-300 hover:bg-amber-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature108 };
