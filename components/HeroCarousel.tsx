"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/pic1.png", alt: "Hero Image 1" },
  { src: "/pic2.jpeg", alt: "Hero Image 2" },
  { src: "/pic3.jpeg", alt: "Hero Image 3" },
  { src: "/pic4.jpeg", alt: "Hero Image 4" },
  { src:"/hero/hero5.jpeg",alt:"hero image 5"}
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] xl:h-screen overflow-hidden -mt-2 sm:-mt-3.5 md:-mt-4 lg:-mt-5">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover object-center sm:object-cover"
            quality={100}
            sizes="100vw"
          />
        </div>
      ))}
      
      {/* Overlay gradient for better text visibility if needed */}
      <div className="absolute inset-0 bg-black/20 z-20"></div>
      
      {/* Indicator dots */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-6 sm:w-8"
                : "bg-white/50 hover:bg-white/75 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
