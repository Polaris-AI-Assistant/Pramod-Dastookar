"use client";

import { useState, useRef, useEffect } from 'react';

interface LazyVideoEmbedProps {
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  duration?: string;
  views?: string;
  className?: string;
}

export function LazyVideoEmbed({
  videoUrl,
  thumbnailUrl,
  title,
  duration,
  views,
  className = ""
}: LazyVideoEmbedProps) {
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Once in view, we can disconnect the observer
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden ${className}`}
    >
      {!isPlaying ? (
        // Thumbnail view with play button
        <div className="relative w-full h-full group cursor-pointer" onClick={handlePlayClick}>
          {isInView ? (
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            // Placeholder before thumbnail loads
            <div className="w-full h-full bg-gray-800 animate-pulse" />
          )}
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </div>

          {/* Duration badge */}
          {duration && (
            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-semibold">
              {duration}
            </div>
          )}

          {/* Views badge */}
          {views && (
            <div className="absolute top-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
              {views}
            </div>
          )}
        </div>
      ) : (
        // YouTube iframe - only loads when user clicks play
        <iframe
          src={`${videoUrl}?autoplay=1`}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
