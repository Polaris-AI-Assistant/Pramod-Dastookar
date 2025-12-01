"use client";
import { useState } from 'react';
import { VideoPlayer } from "@/components/ui/video-thumbnail-player";
import Navbar from '@/components/navbar';

type PlacementVideo = {
  id: string;
  company: string;
  title: string;
  videoUrl: string;
  description: string;
  category: 'Product-Based' | 'Service-Based' | 'Mass Recruiter' | 'Business Consultancy';
};

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
  // Playlist handling
  if (url.includes('playlist?list=')) {
    const match = url.match(/list=([a-zA-Z0-9_-]+)/);
    if (match) return `https://www.youtube.com/embed/videoseries?list=${match[1]}`;
  }
  return url; // fallback
}

// Helper: Get YouTube thumbnail from video ID
function getThumbnailUrl(url: string): string {
  const id = getYouTubeId(url);
  if (id) return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  return ''; // fallback for playlists etc.
}

// Static list of placement-related videos (from user's provided list)
const VIDEOS: PlacementVideo[] = [
  // Product-Based
  { id: 'He23ZJME7K4', company: 'BMC Software', title: 'How to Get Pre-Placement Offer of 14 LPA at BMC?', videoUrl: 'https://www.youtube.com/watch?v=He23ZJME7K4', description: 'A global leader in software solutions for IT service and operations management.', category: 'Product-Based' },
  { id: 'iO5dzb3eCOk', company: 'BMC Software', title: 'Interaction with Veeraj Goudar placed in BMC', videoUrl: 'https://www.youtube.com/live/iO5dzb3eCOk?si=JQRkE7QZDGgwhlHG', description: 'A global leader in software solutions for IT service and operations management.', category: 'Product-Based' },
  { id: 'VeritasLive1', company: 'Veritas Technologies', title: 'Placement Insights - Day 01 - Shruti Dhumne | Veritas Technologies 15.97 LPA', videoUrl: 'https://www.youtube.com/live/EL2LEW82RxY?si=_PvTG-OP7rRsAxNn', description: 'Specializes in data management, backup, and recovery solutions for enterprises.', category: 'Product-Based' },
  { id: 'PhonePeAmazonLive', company: 'PhonePe / Amazon', title: '#PhonePe and #Amazon Placement | Vaishnavi Jadhav', videoUrl: 'https://www.youtube.com/live/3gYq-cHKQQ0?si=nL5VTN9InztRWd_F', description: 'PhonePe and Amazon placement experience.', category: 'Product-Based' },
  { id: 'UYL4b6B0DHk', company: 'Paytm Money', title: 'Placement Series: Aniket Kumar | 2022 Batch | Paytm Money | 10 LPA', videoUrl: 'https://www.youtube.com/live/UYL4b6B0DHk?si=TfO0euD0v7X-u_yU', description: 'A digital investment and wealth management platform under Paytm.', category: 'Product-Based' },
  { id: 'JXRB_85e454', company: 'Varroc Engineering Ltd.', title: '@VarrocGlobal Placement || Gopal Chavhan', videoUrl: 'https://www.youtube.com/watch?v=JXRB_85e454', description: 'A global automotive component manufacturer specializing in lighting, electrical, and polymer solutions.', category: 'Product-Based' },
  { id: '1wiReIg3aF8', company: 'eQ Technologic', title: 'Placement Insights - Day 02 - Aaditya Barve | eQ Technologic', videoUrl: 'https://www.youtube.com/watch?v=1wiReIg3aF8', description: 'A product-based company offering enterprise-class data integration and analytics solutions.', category: 'Product-Based' },

  // Service-Based
  { id: 'ZmNjHUJFKSE', company: 'TCS', title: 'TCS | Research and Innovation | Interview | 9 LPA', videoUrl: 'https://www.youtube.com/watch?v=ZmNjHUJFKSE', description: 'One of the largest IT services providers in the world, offering consulting and business solutions.', category: 'Service-Based' },
  { id: '1V11S81MXi4', company: 'TCS', title: 'TCS Placement Preparation Interview With Mr. Shantanu Santosh Pabitwar (TCS)', videoUrl: 'https://www.youtube.com/watch?v=1V11S81MXi4', description: 'TCS placement preparation.', category: 'Service-Based' },
  { id: 'N0O31GVZDPs', company: 'Accenture', title: 'Accenture Placement', videoUrl: 'https://www.youtube.com/watch?v=N0O31GVZDPs', description: 'A global professional services company specializing in IT services and consulting.', category: 'Service-Based' },
  { id: 'lcjQLJveCqM', company: 'Cognizant', title: 'Pre-Placement Talk | Cognizant | Placements 2023', videoUrl: 'https://www.youtube.com/watch?v=lcjQLJveCqM', description: 'A multinational IT services and consulting company providing digital transformation solutions.', category: 'Service-Based' },
  { id: 'ZensarPlaylist', company: 'Zensar', title: 'Zensar Training Program Guidelines Playlist', videoUrl: 'https://youtube.com/playlist?list=PLhCuOtQODt4ta3ENWgmRrIbRYMYcoLeAP&si=KCQiej2DJvFuRubS', description: 'A global IT services company specializing in digital transformation.', category: 'Service-Based' },
  { id: 'ltTd852czmU', company: 'AVAYA', title: 'Mushkan Pandey | AVAYA | 12 LPA | 2022 Batch', videoUrl: 'https://www.youtube.com/watch?v=ltTd852czmU', description: 'A global leader in business communications and collaboration solutions.', category: 'Service-Based' },
  { id: 'lflqz1UI998', company: 'Quantiphi', title: '@QuantiphiAnalytics Placement || Ayush Kumar ||', videoUrl: 'https://www.youtube.com/watch?v=lflqz1UI998', description: 'An applied AI and big data company; product and service work.', category: 'Service-Based' },

  // Mass Recruiters
  { id: '9ffto6lWmxk', company: 'BMC Software', title: 'BMC Recruitment Drive | 2024 Batch | Placement Session', videoUrl: 'https://www.youtube.com/watch?v=9ffto6lWmxk', description: 'BMC recruitment drive.', category: 'Mass Recruiter' },
  { id: '0CbqDnwsTvg', company: 'Accenture', title: '| #ACCENTURE DIGITAL HIRING 2021 | #5lakhs', videoUrl: 'https://www.youtube.com/watch?v=0CbqDnwsTvg', description: 'Accenture mass hiring.', category: 'Mass Recruiter' },
  { id: 'lcjQLJveCqM-2', company: 'Cognizant', title: 'Pre-Placement Talk | Cognizant | Placements 2023', videoUrl: 'https://www.youtube.com/watch?v=lcjQLJveCqM', description: 'Cognizant pre-placement talk (also mass recruiter).', category: 'Mass Recruiter' },
  { id: '3vo3eWS1tkw', company: 'Infosys', title: '#Infosys Placement Pattern - Mass recruitment', videoUrl: 'https://www.youtube.com/watch?v=3vo3eWS1tkw', description: 'Infosys mass recruitment patterns.', category: 'Mass Recruiter' },

  // Business Consultancy
  { id: '31QBF4BuMRs', company: 'Google', title: 'Google Cloud Certification | Preparation Tips, Steps & Guidance', videoUrl: 'https://www.youtube.com/watch?v=31QBF4BuMRs', description: 'Google Cloud certification guidance.', category: 'Business Consultancy' },
  { id: 'LhEVLY7iCsk', company: 'Deloitte', title: 'Trupti Bisen Delloite Job 7.5 lakhs', videoUrl: 'https://www.youtube.com/watch?v=LhEVLY7iCsk', description: 'Deloitte job talk.', category: 'Business Consultancy' },
];

export default function PlacementVideosPage() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | PlacementVideo['category']>('All');

  const categories: ("All" | PlacementVideo['category'])[] = [
    'All',
    'Product-Based',
    'Service-Based',
    'Mass Recruiter',
    'Business Consultancy'
  ];

  const filtered = selectedCategory === 'All' ? VIDEOS : VIDEOS.filter(v => v.category === selectedCategory);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FAF9F6] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <span className="text-amber-700 text-sm tracking-[0.3em] uppercase font-semibold">Knowledge Hub</span>
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-4" />
            <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-2" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.02em' }}>
              <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent font-normal">Placement Videos</span>
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto">Categorized placement talks and placement-drive videos for product, service, mass-recruiters and consultancy roles.</p>
          </div>

          {/* Category filters */}
          <div className="mb-8 flex justify-center">
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === cat ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg' : 'bg-white text-gray-700 border border-amber-200 hover:bg-amber-50'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(video => (
              <div key={video.id} className="bg-white rounded-xl shadow-md border-2 border-[#A68229]/10 overflow-hidden">
                <div className="p-3 border-b border-[#A68229]/10">
                  <h3 className="text-sm font-semibold text-[#A68229]" style={{ fontFamily: 'Georgia, serif' }}>{video.company}</h3>
                  <p className="text-xs text-gray-600">{video.category}</p>
                </div>

                <div className="p-3">
                  <div className="w-full h-48 sm:h-40 md:h-44 lg:h-48">
                    <VideoPlayer
                      thumbnailUrl={getThumbnailUrl(video.videoUrl)}
                      videoUrl={toEmbedUrl(video.videoUrl)}
                      title=""
                      description=""
                      className="w-full h-full rounded-md"
                    />
                  </div>

                  <div className="mt-3 px-1 pb-3">
                    <h4 className="text-sm font-semibold text-gray-900 line-clamp-2">{video.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No videos found for the selected category.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}