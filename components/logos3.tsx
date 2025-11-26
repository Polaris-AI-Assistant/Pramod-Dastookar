"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Playfair_Display } from 'next/font/google';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
});

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by Leaders in Engineering & Education.",
  logos = [
    {
      id: "logo-1",
      description: "Accenture",
      image: "/Accenture.svg.webp",
      className: "h-12 w-auto",
    },
    {
      id: "logo-2",
      description: "Bosch",
      image: "/Bosch-logo.svg.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-3",
      description: "Capgemini",
      image: "/Capgemini_201x_logo.svg.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-4",
      description: "IBM",
      image: "/IBM_logo.svg.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-5",
      description: "Infosys",
      image: "/Infosys_logo.svg.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-6",
      description: "Larsen & Toubro",
      image: "/Larsen-Toubro-LT-Logo-Vector.svg-.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-7",
      description: "Persistent Systems",
      image: "/Persistent_Systems_Logo.svg.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-8",
      description: "Tata Consultancy Services",
      image: "/Tata_Consultancy_Services_old_logo.svg.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-9",
      description: "Tech Mahindra",
      image: "/Tech_Mahindra_New_Logo.svg.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-10",
      description: "Zensar Technologies",
      image: "/zensar-technologies-1200px-logo.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-11",
      description: "BVDU",
      image: "/BVDU logo_1 (1).jpg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-12",
      description: "MIT",
      image: "/MIT Logo.jpg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-13",
      description: "WPU MIT",
      image: "/wpu_mit_logo.webp",
      className: "h-12 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section className={`py-16 bg-[#FAF9F6] ${playfairDisplay.variable}`}>
      <div className="container flex flex-col items-center text-center">
        <div className="mb-8">
          <div className="w-48 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mx-auto mb-6" />
          <h1 className="text-2xl font-bold lg:text-3xl leading-tight" style={{
            color: '#A68229',
            fontFamily: 'var(--font-playfair)'
          }}>
            {heading}
          </h1>
          <div className="w-48 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mx-auto mt-6" />
        </div>
      </div>
      <div className="pt-8 md:pt-10 lg:pt-12 pb-4">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-6xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0 gap-1">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="px-8 flex shrink-0 items-center justify-center py-4 min-w-[120px]">
                    <div className="w-full flex items-center justify-center">
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-[#FAF9F6] to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-[#FAF9F6] to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
