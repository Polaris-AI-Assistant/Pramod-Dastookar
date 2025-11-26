import Image from 'next/image';
import Link from 'next/link';
import { Berkshire_Swash, Calistoga, Playfair_Display, Libre_Baskerville } from 'next/font/google';
import { LuChevronRight } from 'react-icons/lu';
import Testimonials from '@/components/ui/testimonials';
import Navbar from '@/components/navbar';

// Font configurations
const berkshireSwash = Berkshire_Swash({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-berkshire',
});

// Using Libre Baskerville as an alternative to "The Seasons" (which is not available on Google Fonts)
const theSeasons = Libre_Baskerville({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-seasons',
});

const calistoga = Calistoga({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-calistoga',
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function AwardsPage() {
  const awards = [
    { 
      awardName: 'Tech Start-II\nExcellence', 
      company: 'Persistent Systems',
      description: 'Outstanding innovation in student training under Tech Start-II initiative.',
      institution: 'MIT AOE'
    },
    { 
      awardName: 'Outstanding\nLeadership', 
      company: 'Persistent Systems',
      description: 'Exceptional leadership in building campus placement ecosystems.',
      institution: 'MIT AOE'
    },
    { 
      awardName: 'Pool Campus\nContribution', 
      company: 'Tech Mahindra',
      description: 'Dedication in organizing pool campus placement drives.',
      institution: 'MIT AOE'
    },
    { 
      awardName: 'Best Employability Score', 
      company: 'AMCAT',
      description: 'Delivering the best student employability score.',
      institution: ''
    },
    { 
      awardName: 'Training & Placement Excellence', 
      company: 'East of Oxford',
      description: 'Building strong placement culture at BVCOEP.',
      institution: ''
    },
  ];

  const patents = [
    {
      src: "./brick.jpg",
      alt: "Patent 1",
      category: "Research & Innovation",
      title: "Composition for Eco-Friendly Brick Manufacturing",
      body: "A patented material composition developed to create stronger, sustainable bricks using industrial by-products. This innovation reduces environmental impact while improving construction-grade performance.",
    },
    {
      src: "./bricks3.png",
      alt: "Patent 2",
      category: "Material Science",
      title: "Non-Destructive Testing Method for Bagasse Ash Bricks",
      body: "A non-destructive technique to accurately determine compressive strength of bagasse-ash bricks using frequency-based analysis. Enhances quality control without damaging the brick sample.",
    },
    {
      src: "./ash.png",
      alt: "Patent 3",
      category: "International Publications",
      title: "Bagasse Ash in Construction: International Conference Paper",
      body: "Presented research on utilizing bagasse ash for manufacturing construction materials at leading global engineering forums, contributing to sustainable civil engineering practices.",
    },
    {
      src: "https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs00366-019-00810-4/MediaObjects/366_2019_810_Fig1_HTML.jpg",
      alt: "Patent 4",
      category: "Engineering Research",
      title: "FFT-Based Brick Compression Strength Analysis",
      body: "Introduced an FFT-driven approach for analyzing brick strength, improving precision in material evaluation and supporting advanced construction research.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className={`min-h-screen bg-[#FAF9F6] py-20 px-8 ${berkshireSwash.variable} ${theSeasons.variable} ${calistoga.variable} ${playfairDisplay.variable}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <span className="text-amber-700 text-2xl tracking-[0.3em] uppercase font-semibold">
              Recognition & Excellence
            </span>
          </div>
          <div className="w-54 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8" />
          
       
          <h2 className="text-lg lg:text-xl text-gray-700 font-normal leading-relaxed max-w-3xl mx-auto" style={{
            fontFamily: 'system-ui, sans-serif'
          }}>
            Celebrating 25 years of excellence, innovation, and distinguished contributions to education and industry
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Section - Text and Main Award */}
          <div className="relative h-[600px] ml-20 mt-20">
            {/* Golden Rectangle Border - Background */}
            <div className="absolute top-12 left-12 w-[340px] h-[520px] border-4 z-0 flex  justify-center p-8"
                 style={{
                   borderColor: '#D4AF37',
                 }}>
              {/* Text inside golden rectangle */}
              <p 
                className="text-center text-xl leading-relaxed mt-40 ml-10 font-semibold"
                style={{ 
                  color: '#A68229',
                  fontFamily: 'var(--font-playfair)'
                }}
              >
                Recognitions That Highlight a Career Built on Purpose & Performance
              </p>
            </div>

            {/* Content - Positioned on the border */}
            <div className="relative h-full z-10">
              {/* Text at Top Left Corner of Rectangle */}
              <div className="absolute -top-14 -left-14">
                {/* 25 in Berkshire Swash */}
                <h1 
                  className="text-[140px] leading-none mb-0"
                  style={{ 
                    color: '#A68229',
                    fontFamily: 'var(--font-berkshire)'
                  }}
                >
                  25
                </h1>
                  <br />
                {/* YEARS OF */}
                <p 
                  className="text-[32px] uppercase tracking-wider"
                  style={{ 
                    color: '#000',
                    fontFamily: 'var(--font-seasons)',
                    fontWeight: '400'
                  }}
                >
                  YEARS OF
                </p>

                {/* Awards */}
                <h2 
                  className="text-[48px] font-bold"
                  style={{ 
                    color: '#000',
                    fontFamily: 'var(--font-calistoga)'
                  }}
                >
                  Awards
                </h2>
              </div>

              {/* Main Trophy Image at Bottom Left */}
              <div className="absolute -bottom-10 -left-45">
                <Image
                  src="/mainaward.png"
                  alt="Main Award Trophy"
                  width={480}
                  height={480}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Award Badges Grid */}
          <div className="flex flex-col gap-15 pt-12">
            {/* Top Row - 3 Awards */}
            <div className="grid grid-cols-3 gap-32">
              {awards.slice(0, 3).map((award, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center"
                >
                  {/* Award Badge */}
                  <div className="relative mb-4">
                    <Image
                      src="/awardbadge.png"
                      alt={award.awardName}
                      width={130}
                      height={130}
                      className="object-contain"
                    />
                  </div>

                  {/* Award Name */}
                  <h3 
                    className="text-[20px] font-bold text-center leading-tight mb-1 whitespace-pre-line"
                    style={{ 
                      color: '#A68229',
                      fontFamily: 'var(--font-playfair)'
                    }}
                  >
                    {award.awardName}
                  </h3>

                  {/* Company Name */}
                  <p 
                    className="text-[16px] font-semibold text-center whitespace-nowrap mt-1 mb-3"
                    style={{ 
                      color: '#000',
                      fontFamily: 'var(--font-playfair)'
                    }}
                  >
                    {award.company}
                  </p>

                  {/* Award Description */}
                  {/* <p 
                    className="text-[13px] text-center leading-relaxed max-w-[180px]"
                    style={{ 
                      color: '#666',
                      fontFamily: 'var(--font-playfair)'
                    }}
                  >
                    {award.description}
                  </p> */}
                </div>
              ))}
            </div>

            {/* Bottom Row - 2 Awards (Centered) */}
            <div className="flex justify-center gap-16">
              {awards.slice(3, 5).map((award, index) => (
                <div 
                  key={index + 3} 
                  className="flex flex-col items-center"
                >
                  {/* Award Badge */}
                  <div className="relative mb-4">
                    <Image
                      src="/awardbadge.png"
                      alt={award.awardName}
                      width={130}
                      height={130}
                      className="object-contain"
                    />
                  </div>

                  {/* Award Name */}
                  <h3 
                    className="text-[20px] font-bold text-center leading-tight mb-1 whitespace-nowrap"
                    style={{ 
                      color: '#A68229',
                      fontFamily: 'var(--font-playfair)'
                    }}
                  >
                    {award.awardName}
                  </h3>

                  {/* Company Name */}
                  <p 
                    className="text-[16px] font-semibold text-center whitespace-nowrap mt-1 mb-3"
                    style={{ 
                      color: '#000',
                      fontFamily: 'var(--font-playfair)'
                    }}
                  >
                    {award.company}
                  </p>

                  {/* Award Description */}
                  {/* <p 
                    className="text-[13px] text-center leading-relaxed max-w-[180px]"
                    style={{ 
                      color: '#666',
                      fontFamily: 'var(--font-playfair)'
                    }}
                  >
                    {award.description}
                  </p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Patents & Publications Section */}
      <section className="py-12 bg-[#FAF9F6] sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Header section */}
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <span className="text-amber-700 text-sm tracking-[0.3em] uppercase font-semibold">
                Research & Innovation
              </span>
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8" />
            
            <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-2" style={{
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.02em'
            }}>
              <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent font-normal">Patents & Publications</span>
            </h1>
            
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-transparent mx-auto rounded-full mb-6" />
            
            <h2 className="text-lg lg:text-xl text-gray-700 font-normal leading-relaxed max-w-3xl mx-auto" style={{
              fontFamily: 'system-ui, sans-serif'
            }}>
              Pioneering research and innovative contributions to technology and education
            </h2>
          </div>

          <div className="grid grid-cols-1 mt-12 gap-y-12 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-4 sm:mt-16 lg:mt-20">
            {patents.map((patent, index) => (
              <div key={index} className="relative group">
                <div className="overflow-hidden rounded-xl aspect-w-4 aspect-h-3 shadow-lg">
                  <img
                    className="object-cover w-full h-full max-h-[200px] transition-all duration-300 group-hover:scale-110"
                    src={patent.src}
                    alt={patent.alt}
                  />
                </div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wider" style={{ color: '#A68229' }}>
                  {patent.category}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-gray-900 leading-snug">
                  {patent.title}
                </h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  {patent.body}
                </p>
                <div className="mt-6">
                  <Link 
                    href="#" 
                    className="inline-flex items-center gap-2 text-amber-700 font-medium hover:text-amber-800 transition-colors duration-200"
                  >
                    <span>Read Full Article</span>
                    <LuChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
      </div>
    </>
  );
}