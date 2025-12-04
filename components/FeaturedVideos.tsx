"use client";

import { Playfair_Display } from 'next/font/google';
import { VideoPlayer } from "@/components/ui/video-thumbnail-player";

const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
});

interface FeaturedVideo {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
}

// Helper: Extract YouTube video ID from various URL formats
function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/live\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

// Helper: Convert YouTube URL to embed URL
function toEmbedUrl(url: string): string {
  const id = getYouTubeId(url);
  if (id) return `https://www.youtube.com/embed/${id}`;
  return url;
}

// Helper: Get YouTube thumbnail from video ID
function getThumbnailUrl(url: string): string {
  const id = getYouTubeId(url);
  if (id) return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  return '';
}

const defaultVideos: FeaturedVideo[] = [
  {
    id: 'XwNpy_vw2tQ',
    title: 'Hon Kamal Kishore Kadam Ex Education Minister Praises PG Dastoorkar',
    description: 'Hon Kamal Kishore Kadam, Ex Education Minister, praises the remarkable work of PG Dastoorkar on the Chattopadhyay Commission.',
    videoUrl: 'https://youtu.be/XwNpy_vw2tQ',
  },
  {
    id: 'EcaMcbQkOsc',
    title: 'Condolence Message by Prakash Javadekar',
    description: 'Condolence message to P G Dastoorkar by Prakash Javadekar, honoring his contributions and legacy.',
    videoUrl: 'https://youtu.be/EcaMcbQkOsc',
  },
  {
    id: '8Dl7Fuxt4Rs',
    title: 'SAAM TV - Pramod Dastoorkar',
    description: 'Pramod Dastoorkar featured on SAAM TV discussing important topics and sharing his insights.',
    videoUrl: 'https://youtu.be/8Dl7Fuxt4Rs',
  },
];

interface FeaturedVideosProps {
  heading?: string;
  videos?: FeaturedVideo[];
}

const FeaturedVideos = ({
  heading = "Featured Videos",
  videos = defaultVideos,
}: FeaturedVideosProps) => {
  return (
    <section className={`py-12 sm:py-14 md:py-16 bg-[#FAF9F6] ${playfairDisplay.variable}`}>
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        <div className="mb-6 sm:mb-8 w-full max-w-4xl mx-auto">
          <div className="w-32 sm:w-40 md:w-48 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mx-auto mb-4 sm:mb-5 md:mb-6" />
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight px-4" style={{
            color: '#A68229',
            fontFamily: 'var(--font-playfair)'
          }}>
            {heading}
          </h1>
          <div className="w-32 sm:w-40 md:w-48 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mx-auto mt-4 sm:mt-5 md:mt-6" />
        </div>
      </div>
      <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-md border-2 border-[#A68229]/10 overflow-hidden">
                <div className="p-4">
                  <div className="w-full h-52 sm:h-56 md:h-64">
                    <VideoPlayer
                      thumbnailUrl={getThumbnailUrl(video.videoUrl)}
                      videoUrl={toEmbedUrl(video.videoUrl)}
                      title=""
                      description=""
                      className="w-full h-full rounded-md"
                    />
                  </div>

                  <div className="mt-4 px-1 pb-4">
                    <h4 className="text-base font-semibold text-gray-900 line-clamp-2" style={{ fontFamily: 'Georgia, serif' }}>
                      {video.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeaturedVideos };
