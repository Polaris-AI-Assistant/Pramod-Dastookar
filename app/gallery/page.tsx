"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Berkshire_Swash, Playfair_Display } from 'next/font/google';
import Navbar from "@/components/navbar";

// Font configurations matching the website theme
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

const galleryImages = [
  { src: "/WhatsApp Image 2025-12-01 at 11.54.16 AM.jpeg", alt: "Gallery Image 1" },
  { src: "/WhatsApp Image 2025-12-01 at 11.57.55 AM.jpeg", alt: "Gallery Image 2" },
  { src: "/WhatsApp Image 2025-12-01 at 12.06.31 PM.jpeg", alt: "Gallery Image 3" },
  { src: "/WhatsApp Image 2025-12-01 at 12.06.46 PM.jpeg", alt: "Gallery Image 4" },
  { src: "/WhatsApp Image 2025-12-01 at 12.14.29 PM.jpeg", alt: "Gallery Image 5" },
  { src: "/WhatsApp Image 2025-12-01 at 12.17.07 PM.jpeg", alt: "Gallery Image 6" },
  { src: "/WhatsApp Image 2025-12-01 at 12.17.51 PM.jpeg", alt: "Gallery Image 7" },
  { src: "/WhatsApp Image 2025-12-01 at 12.18.40 PM.jpeg", alt: "Gallery Image 8" },
  { src: "/WhatsApp Image 2025-12-01 at 12.19.56 PM.jpeg", alt: "Gallery Image 9" },
  { src: "/534548287_10233845399930053_8755739575493353612_n.jpg", alt: "Gallery Image 10" },
  { src: "/WhatsApp Image 2025-12-01 at 12.21.25 PM.jpeg", alt: "Gallery Image 11" },
  { src: "/WhatsApp Image 2025-12-01 at 12.22.04 PM.jpeg", alt: "Gallery Image 12" },
  { src: "/WhatsApp Image 2025-12-01 at 12.23.04 PM.jpeg", alt: "Gallery Image 13" },
  { src: "/WhatsApp Image 2025-12-01 at 12.23.50 PM.jpeg", alt: "Gallery Image 14" },
  { src: "/WhatsApp Image 2025-12-01 at 12.24.55 PM.jpeg", alt: "Gallery Image 15" },
  { src: "/WhatsApp Image 2025-12-01 at 12.25.42 PM.jpeg", alt: "Gallery Image 16" },
  { src: "/WhatsApp Image 2025-12-01 at 12.26.32 PM.jpeg", alt: "Gallery Image 17" },
  { src: "/WhatsApp Image 2025-12-01 at 12.26.46 PM.jpeg", alt: "Gallery Image 18" },
  { src: "/WhatsApp Image 2025-12-01 at 12.27.42 PM.jpeg", alt: "Gallery Image 19" },
  { src: "/WhatsApp Image 2025-12-01 at 12.30.02 PM.jpeg", alt: "Gallery Image 20" },
  { src: "/WhatsApp Image 2025-12-01 at 12.30.53 PM.jpeg", alt: "Gallery Image 21" },
  { src: "/535490238_10233845401330088_5325813885231810051_n.jpg", alt: "Gallery Image 22" },
];

export default function GalleryPage() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <Navbar />
      <div className={`min-h-screen bg-[#FAF9F6] ${berkshireSwash.variable} ${playfairDisplay.variable}`}>
        {/* Hero Section */}
        <div className="relative pt-24 pb-8">
          <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Header section matching other pages */}
            <div className="text-center mb-12">
              <span 
                className="text-xl tracking-[0.3em] uppercase font-semibold"
                style={{ color: '#A68229' }}
              >
                Photo Gallery
              </span>
              <div className="w-48 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mx-auto mt-4 mb-8" />
              
              <h1 
                className="text-5xl md:text-7xl mb-6"
                style={{ 
                  color: '#A68229',
                  fontFamily: 'var(--font-berkshire)'
                }}
              >
                Moments & Memories
              </h1>
              <p 
                className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                A visual journey through milestones, achievements, and cherished moments from 25 years of excellence
              </p>
            </div>
          </div>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="px-4 pb-20 md:px-6 max-w-7xl mx-auto">
          <div className="columns-1 gap-4 space-y-4 transition-all sm:columns-2 md:columns-3 lg:columns-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => openModal(index)}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer break-inside-avoid"
                style={{
                  border: hovered === index ? '3px solid #A68229' : '3px solid transparent'
                }}
              >
                <motion.div
                  className={`relative w-full transition-all duration-300 ease-in-out ${
                    hovered === null
                      ? 'blur-0 scale-100'
                      : hovered === index
                        ? 'blur-0 scale-105'
                        : 'blur-[2px]'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </motion.div>
                
                {/* Hover Overlay */}
                <div 
                  className={`absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300 rounded-lg ${
                    hovered === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Simple Image Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
              onClick={closeModal}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ 
                  backgroundColor: 'rgba(166, 130, 41, 0.9)',
                  border: '2px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative max-w-[90vw] max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  style={{
                    border: '4px solid #A68229'
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}