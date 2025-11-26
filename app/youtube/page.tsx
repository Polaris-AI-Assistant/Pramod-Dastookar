"use client";
import { useState, useEffect, useRef } from 'react';
import { VideoPlayer } from "@/components/ui/video-thumbnail-player";
import useSWRInfinite from 'swr/infinite';
import Navbar from '@/components/navbar';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  category: string;
  views?: string;
  duration?: string;
  publishedAt?: string;
}

// Helper function to convert ISO 8601 duration to readable format
function formatDuration(isoDuration: string): string {
  if (!isoDuration) return '';
  
  const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return '';
  
  const hours = (match[1] || '').replace('H', '');
  const minutes = (match[2] || '').replace('M', '');
  const seconds = (match[3] || '').replace('S', '');
  
  const parts = [];
  if (hours) parts.push(hours.padStart(2, '0'));
  parts.push((minutes || '0').padStart(2, '0'));
  parts.push((seconds || '0').padStart(2, '0'));
  
  return parts.join(':');
}

// Helper function to format view count
function formatViews(viewCount: string): string {
  if (!viewCount) return '';
  const num = parseInt(viewCount);
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M views`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K views`;
  return `${num} views`;
}

// Category-keyword mapping for filtering videos
// Categories are checked in order, so more specific categories should come first
const CATEGORY_KEYWORDS: Record<string, string[]> = {
  // Company-specific placement/recruitment videos - MOST SPECIFIC FIRST
  "Company Placements & Processes": [
    "tcs", "infosys", "wipro", "accenture", "cognizant", "tech mahindra", "capgemini",
    "bmc", "zensar", "persistent", "ltimindtree", "l&t infotech", "mindtree",
    "paytm", "phonepe", "amazon", "google", "microsoft", "cisco", "avaya",
    "veritas", "quantiphi", "nice limited", "eq technologic", "eqtechnologies",
    "syntel", "yardi", "kpit", "fiserv", "michelin", "varroc", "miniorange",
    "motifworks", "evosys", "blaze clan", "dealermatix", "paychex", "alfa laval",
    "zs associates", "ion groups", "nvidia", "data fortune", "webtech developers",
    "kantar", "successive technologies", "j.p. morgan", "jpmorgan",
    "placement process", "recruitment drive", "pre-placement talk", "ppt session",
    "selection process", "package", "lpa", "salary", "offer", "hired", "placed at"
  ],
  
  // Ayurveda & Health - Very distinctive keywords
  "Ayurveda & Health": [
    "ayruved", "ayruveda", "ayurved", "dr santosh chavan", "dr. santosh chavan",
    "panchakarma", "panchkarma", "shirodhara", "nasya", "rasayan", "rasayana",
    "giloy", "gulvel", "trifala", "haritaki", "gokshura", "arjun", "ashwagandha",
    "kidney care", "heart attack", "creatinine", "blood pressure", "diabetes",
    "hair care", "bone care", "anti ageing", "anti aging", "mouth health", "dental",
    "castor oil", "mustard oil", "erande", "sarso", "til", "sesame oil",
    "bilva tail", "balashwandhadi", "oil massage", "tail", "kadha", "arishta", "asav",
    "vaidya", "औषध", "आयुर्वेद", "health remedy", "natural remedy", "herbal"
  ],
  
  // Food & Restaurants - Location + food keywords
  "Food & Restaurants": [
    "hotel", "restaurant", "dining", "canteen", "mess", "khanawali", "bhojanalay",
    "thali", "biryani", "rassa", "misal", "vada pav", "bhel", "girmit", "pav bhaji",
    "fish", "mutton", "chicken", "non veg", "veg food", "breakfast", "lunch", "dinner",
    "pune hotel", "goa hotel", "kolhapur", "hubali hotel", "huballi",
    "taj hotel", "blue nyle", "tip top", "kaka halwai", "kailash bhel",
    "suras dining", "bengalore canteen", "parakh hotel", "opel hotel",
    "yermala macchi", "anna hotel", "sambar hotel", "vernekar hotel",
    "pankaj hotel", "kedari hotel", "basaveshwar", "basaweshwar", "baba foods",
    "kokani canteen", "ghoomar restaurant", "fisherman's cove", "kamala bai",
    "tambda pandhara", "buffet", "cuisine", "tasty", "delicious", "food vlog"
  ],
  
  // Temples & Religious Places - Very specific
  "Temples & Religious Places": [
    "temple", "mandir", "मंदिर", "shrine", "samadhi", "math", "मठ",
    "ganapati", "ganesh", "ganpati", "ashtavinayak", "morgaon", "ranjangaon",
    "badami caves", "ellora caves", "hampi", "elephanta caves",
    "shani shinganapur", "shinganapur", "akkalkot", "pandharpur",
    "datta mandir", "renuka mata", "khandoba", "jejuri", "vithal", "vitthal",
    "nageshwar", "bhutnath", "mahaganapati", "murtunjeshwar",
    "aundha nagnath", "narsingh", "durgawati", "gajanan maharaj",
    "lahuji salawe", "jiwaji mahale", "kanifnath", "siddheshwar",
    "peshwa", "नानासाहेब", "darshan", "yatra", "pilgrimage", "धार्मिक"
  ],
  
  // Travel & Tourism - Beaches, resorts, tourist places
  "Travel & Tourism": [
    "beach", "resort", "dam", "lake", "waterfall", "hill station",
    "mahabaleshwar", "mulashi", "panshet", "pawana", "khadakwasla",
    "diveagar", "ladghar", "kihim", "alibag", "calangute", "goa beach",
    "dapoli", "konkan", "shiroda", "harane bunder",
    "encore resort", "amrai resort", "sunny world", "sheh resort", "taj fountain",
    "resort pune", "farm house", "cottages", "day out", "tourist", "tour",
    "visit", "travel", "vlog", "trip", "heritage building", "old goa",
    "महाबळेश्वर", "गोवा", "konkan railway", "scenic", "beautiful"
  ],
  
  // Organic Food & Farming
  "Organic Food & Farming": [
    "organic", "natural", "chemical free", "farm", "farming", "agriculture",
    "organic banana", "organic onion", "organic ginger", "organic garlic",
    "organic milk", "a2 milk", "goushala", "cow milk", "गाय दूध",
    "organic vegetable", "organic fruit", "pesticide free", "chemical vs organic",
    "kashmiri garlic", "pahadi", "capsicum", "gelophino", "dragon fruit",
    "detox water", "healthy juice", "natural meal", "शेतावरचे जेवण",
    "nasarapur", "patanjali", "swadeshi", "शुद्ध", "natural remedy"
  ],
  
  // Engineering Education & Career Guidance
  "Engineering Education & Guidance": [
    "12th", "after 12th", "why engineering", "computer engineering", "mechanical engineering",
    "civil engineering", "electronics engineering", "chemical engineering", "entc",
    "engineering college", "admission", "branch selection", "career choice",
    "bvpcoe", "bharati vidyapeeth", "mit aoe", "mit academy", "k j college", "kjcoe",
    "engineering education", "why computer", "why mechanical", "why civil",
    "अभियांत्रिकी", "इंजिनियरिंग", "career guidance after 12th", "college tour",
    "campus tour", "engineering admission", "university experts", "skill development"
  ],
  
  // Interview & Career Skills
  "Interview & Career Skills": [
    "interview", "resume", "cv", "biodata", "video resume",
    "interview preparation", "interview tips", "mock interview", "interview fever",
    "body language", "group discussion", "gd", "technical gd", "aptitude",
    "aptitude test", "reasoning", "communication skill", "soft skill",
    "how to crack interview", "interview questions", "hr interview", "technical interview",
    "negative interview", "interview guidance", "placement preparation"
  ],
  
  // Student Success Stories & Alumni
  "Student Success & Alumni": [
    "success story", "placement success", "alumni", "alumnus", "proud alumni",
    "from bvpcoe", "journey", "interaction with", "alumini visit", "allumni",
    "student placed", "student cracked", "ms. sneha", "sarthak joshi", "veeraj goudar",
    "success interview", "achievement", "scholarship", "kiran girls scholarship",
    "persistent scholarship", "world record", "book publishing", "rank", "topper",
    "गर्व", "प्रगति", "first rank", "university rank"
  ],
  
  // Museums & Heritage
  "Museums & Heritage": [
    "museum", "kelkar museum", "artifact", "ancient", "heritage", "historical",
    "monuments", "architecture", "stone carving", "sculpture", "vintage",
    "victoria house", "art gallery", "vanity", "comb history", "cart ride",
    "kum kum", "yaali", "yali", "oil reservoir", "kitchen utensil",
    "पुरातन", "प्राचीन", "heritage site", "archaeological"
  ],
  
  // Yoga & Fitness
  "Yoga & Fitness": [
    "yoga", "patanjali", "atmabodh", "fitness", "exercise", "zumba",
    "physiotherapy", "reflexology", "meditation", "pranayam", "asana",
    "yoga center", "wellness", "health center", "योग", "व्यायाम",
    "patanjali pune", "swami ramdev", "baba ramdev", "yoga session",
    "advance yoga", "yoga mudra", "deliberately"
  ],
  
  // Technical & Projects
  "Technical & Projects": [
    "project", "technical", "steam power plant", "power plant", "workshop",
    "lab", "practical", "technology", "innovation", "research",
    "google cloud", "certification", "aws", "cloud computing",
    "graham bell award", "agies", "data science", "ai", "ml",
    "artificial intelligence", "machine learning", "coding", "programming",
    "indian science festival", "science fest", "startup", "incubation"
  ],
  
  // Educational Programs & Events
  "College Events & Programs": [
    "hr meet", "pre-placement", "recruitment drive", "training program",
    "seminar", "workshop", "guest lecture", "expert guidance",
    "university expert", "counseling", "orientation", "convocation",
    "campus event", "college event", "function", "ceremony",
    "मिलन", "कार्यक्रम", "industrial visit", "company visit"
  ],
  
  // Social & Miscellaneous
  "Social & Miscellaneous": [
    "p g dastoorkar", "p.g. dastoorkar", "dastoorkar", "pramod dastoorkar",
    "dasturkar", "dastoorkar speech", "dastoorkar sir", "dastoorkar work",
    "chattopadhyay commission", "education minister", "kamal kishore kadam",
    "social work", "teachers", "marathwada", "nanded", "political",
    "baby", "mother", "birthday", "family", "personal", "child playing",
    "vintage car", "harley davidson", "insects", "cicada", "tree support",
    "discovery", "nature", "modi", "nota", "ramdas athawale",
    "pilot", "flying experience", "dance", "song", "ghoomar"
  ]
};

// Function to categorize a video based on title (primary) and description (secondary)
// Prioritizes title for categorization, especially for location-based content
function categorizeVideo(video: { title: string; description: string }): string {
  const titleLower = video.title.toLowerCase();
  const descriptionLower = video.description.toLowerCase();
  
  // First, check title only (higher priority) - especially important for travel/location content
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some(keyword => titleLower.includes(keyword.toLowerCase()))) {
      return category;
    }
  }
  
  // Then check description if no match in title
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some(keyword => descriptionLower.includes(keyword.toLowerCase()))) {
      return category;
    }
  }
  
  return "Other";
}

export default function YouTubePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  
  const categories = [
    "All",
    "Company Placements & Processes",
    "Ayurveda & Health",
    "Food & Restaurants",
    "Temples & Religious Places",
    "Travel & Tourism",
    "Organic Food & Farming",
    "Engineering Education & Guidance",
    "Interview & Career Skills",
    "Student Success & Alumni",
    "Museums & Heritage",
    "Yoga & Fitness",
    "Technical & Projects",
    "College Events & Programs",
    "Social & Miscellaneous",
    "Other"
  ];

  // SWR fetcher function
  const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch videos');
    }
    return response.json();
  };

  // SWR infinite loading configuration
  const getKey = (pageIndex: number, previousPageData: any) => {
    // Reached the end
    if (previousPageData && !previousPageData.nextPageToken) return null;
    
    // First page, no previous data
    if (pageIndex === 0) return '/api/youtube';
    
    // Add the page token for subsequent pages
    return `/api/youtube?pageToken=${previousPageData.nextPageToken}`;
  };

  const {
    data,
    error,
    size,
    setSize,
    isValidating,
    isLoading
  } = useSWRInfinite(getKey, fetcher, {
    revalidateFirstPage: false,
    revalidateOnFocus: false,
    dedupingInterval: 3600000, // 1 hour client-side deduplication
  });

  // Flatten all pages into a single array of videos with categorization
  const allVideos: Video[] = data ? data.flatMap((page) => 
    page.videos.map((video: any) => ({
      id: video.id,
      title: video.title,
      description: video.description,
      thumbnailUrl: video.thumbnailUrl,
      videoUrl: video.videoUrl,
      category: categorizeVideo(video),
      views: formatViews(video.views),
      duration: formatDuration(video.duration),
      publishedAt: video.publishedAt,
    }))
  ) : [];

  const isLoadingMore = isValidating && size > 0;
  const isEmpty = data?.[0]?.videos?.length === 0;
  const isReachingEnd = isEmpty || (data && !data[data.length - 1]?.nextPageToken);

  // Filter videos based on selected category
  const filteredVideos = selectedCategory === "All" 
    ? allVideos 
    : allVideos.filter(video => video.category === selectedCategory);

  // Set initial current video
  useEffect(() => {
    if (filteredVideos.length > 0 && !currentVideo) {
      setCurrentVideo(filteredVideos[0]);
    }
  }, [filteredVideos.length]);

  // Update current video when category changes
  useEffect(() => {
    if (filteredVideos.length > 0) {
      if (!currentVideo || !filteredVideos.find(v => v.id === currentVideo.id)) {
        setCurrentVideo(filteredVideos[0]);
      }
    }
  }, [selectedCategory, filteredVideos]);

  // Infinite scroll observer
  useEffect(() => {
    if (isLoadingMore || isReachingEnd) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSize(size + 1); // Load next page
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [isLoadingMore, isReachingEnd, size, setSize]);

  // Log categorization when data changes
  useEffect(() => {
    if (allVideos.length > 0) {
      console.log('=== VIDEO CATEGORIZATION ===');
      console.log('Total Videos:', allVideos.length);
      
      const categoryCounts: Record<string, number> = {};
      allVideos.forEach(video => {
        categoryCounts[video.category] = (categoryCounts[video.category] || 0) + 1;
      });
      
      console.log('Videos per Category:', categoryCounts);
    }
  }, [allVideos.length]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FAF9F6] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-amber-700 text-sm tracking-[0.3em] uppercase font-semibold">
              Knowledge Hub
            </span>
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8" />
          
          <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-2" style={{
            fontFamily: 'Georgia, serif',
            letterSpacing: '0.02em'
          }}>
            <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent font-normal">
              Video Resources & Talks
            </span>
          </h1>
          
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-transparent mx-auto rounded-full mb-6" />
          
          <h2 className="text-lg lg:text-xl text-gray-700 font-normal leading-relaxed max-w-3xl mx-auto" style={{
            fontFamily: 'system-ui, sans-serif'
          }}>
            Explore insights on placements, career development, and industry trends
          </h2>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mb-4"></div>
            <p className="text-gray-600">Loading videos...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-red-800 font-semibold">Error loading videos</h3>
                <p className="text-red-600 text-sm mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Main Content - Only show if not loading and no error */}
        {!isLoading && !error && (
          <>
            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-500/30 scale-105'
                        : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-700 border border-amber-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content: Video Player + Playlist */}
            {filteredVideos.length > 0 && currentVideo && (
              <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 mb-8 items-start">
                {/* Main Video Player (Left - 5 columns) */}
                <div className="lg:col-span-5">
                  <div style={{ height: '600px' }}>
                  <VideoPlayer
                    thumbnailUrl={currentVideo.thumbnailUrl}
                    videoUrl={currentVideo.videoUrl}
                    title={currentVideo.title}
                    description={currentVideo.description}
                    className="w-full h-full"
                  />
                  </div>
                </div>

                {/* Playlist Sidebar (Right - 2 columns) */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl shadow-lg border-2 border-[#A68229]/20 overflow-hidden flex flex-col" style={{ height: '600px' }}>
                    <div className="p-4 border-b-2 border-[#A68229]/20 flex-shrink-0" style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(254,243,199,0.5) 100%)'
                    }}>
                      <h3 className="font-semibold text-[#A68229] text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                        More Videos
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {filteredVideos.length} video{filteredVideos.length !== 1 ? 's' : ''}
                        {selectedCategory === "All" && " (Most recent first)"}
                      </p>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto">
                      {filteredVideos.map((video, index) => (
                        <div
                          key={video.id}
                          onClick={() => setCurrentVideo(video)}
                          className={`flex gap-3 p-3 cursor-pointer transition-all duration-200 border-b border-gray-100 hover:bg-gradient-to-r hover:from-amber-50 hover:to-white ${
                            currentVideo.id === video.id ? 'bg-gradient-to-r from-amber-50 to-white border-l-4 border-l-[#A68229]' : ''
                          }`}
                        >
                          {/* Thumbnail */}
                          <div className="relative shrink-0 w-40 h-24 rounded-lg overflow-hidden group">
                            <img
                              src={video.thumbnailUrl}
                              alt={video.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                            {/* Duration Badge */}
                            {video.duration && (
                              <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                                {video.duration}
                              </div>
                            )}
                            {/* Play Icon Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                              </svg>
                            </div>
                          </div>
                          
                          {/* Video Info */}
                          <div className="flex-1 min-w-0">
                            <h4 className={`text-sm font-semibold line-clamp-2 mb-1 ${
                              currentVideo.id === video.id ? 'text-[#A68229]' : 'text-gray-900'
                            }`}>
                              {video.title}
                            </h4>
                            {selectedCategory === "All" && (
                              <p className="text-xs font-medium text-[#A68229] mb-1">[{video.category}]</p>
                            )}
                            {video.views && (
                              <p className="text-xs text-gray-500">{video.views}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Infinite Scroll Trigger & Loading More Indicator */}
            {!isReachingEnd && (
              <div ref={loadMoreRef} className="flex justify-center mt-8 py-8">
                {isLoadingMore && (
                  <div className="flex items-center gap-3 text-amber-700">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-amber-600"></div>
                    <span className="font-medium">Loading more videos...</span>
                  </div>
                )}
              </div>
            )}

            {/* Empty State */}
            {filteredVideos.length === 0 && !isLoading && (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No videos found</h3>
                <p className="text-gray-600">Try selecting a different category</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
    </>
  );
}
