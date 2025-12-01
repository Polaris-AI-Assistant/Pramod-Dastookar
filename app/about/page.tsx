"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Berkshire_Swash, Playfair_Display } from 'next/font/google';
import { Lightbulb, Network, Target, BookOpen, Heart, Globe } from 'lucide-react';
import Navbar from '@/components/navbar';

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

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { title: "25+ Years", subtitle: "Over 25 years in engineering placement & mentorship" },
    { title: "12,000+ Students", subtitle: "More than 12,000 students mentored and placed" },
    { title: "200+ Recruiter Companies", subtitle: "Associated with 200+ companies through MITAOE placement cell" },
    { title: "7+ Years in Industry", subtitle: "Over 7 years of corporate / industry experience (before T&P)" }
  ];

  const philosophies = [
    {
      title: "Purpose-Driven Mentorship",
      description: "Believes that guidance isn't just about jobs, but about helping each student discover their true potential. Career decisions are deeply personal—and mentorship should empower, not dictate.",
      icon: Lightbulb
    },
    {
      title: "Bridging Two Worlds",
      description: "Seamlessly connects the academic world and the corporate ecosystem. He fosters collaborations that benefit both students and organizations—making campus learning more relevant, and industry recruitment more meaningful.",
      icon: Network
    },
    {
      title: "Holistic Development",
      description: "Focuses on the complete student—not just technical capability, but communication, confidence, resilience, and professional etiquette. His programs are designed to develop well-rounded professionals.",
      icon: Target
    },
    {
      title: "Lifelong Learning & Innovation",
      description: "Embraces constant growth. As a researcher and inventor, he models the lifelong pursuit of knowledge. This philosophy drives him to mentor from a place of both humility and expertise.",
      icon: BookOpen
    },
    {
      title: "Inclusive Growth",
      description: "Champions equitable opportunities. Through scholarship initiatives and CSR-driven programs, he works to uplift underrepresented students and extend the reach of quality education.",
      icon: Heart
    },
    {
      title: "Digital Outreach & Accessibility",
      description: "Uses digital platforms not just to broadcast information, but to cultivate community, engagement, and real transformation—making mentorship accessible to all, regardless of geography.",
      icon: Globe
    }
  ];

  return (
    <>
      <Navbar />
      <div className={`min-h-screen w-full relative overflow-hidden bg-[#FAF9F6] ${berkshireSwash.variable} ${playfairDisplay.variable}`}>
      {/* Main content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-6 py-20 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Header section */}
        <div className="text-center mb-16">
          <span className="text-xl tracking-[0.3em] uppercase font-semibold" style={{ color: '#A68229' }}>
            ABOUT PROF. DASTOORKAR
          </span>
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-4" />
        </div>

        {/* Main profile section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 mb-20">
          
          {/* Photo */}
          <div className={`flex-shrink-0 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4" style={{ borderColor: '#A68229' }}>
              <Image
                src="/profilee.jpeg"
                alt="Prof. Pramod Prabhakar Dastoorkar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content section */}
          <div className={`flex-1 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: 'var(--font-playfair)' }}>
              <p>
                More than two decades of unwavering dedication — guiding bright young minds, bridging academia with industry, and building placement ecosystems that truly matter. With a rare blend of technical expertise, design insight, and mentorship wisdom, he transforms potential into purpose.
              </p>
              
              <p>
                Driven by the belief that careers are not just built, but shaped through meaningful guidance, he has forged lasting partnerships with top corporates and led skill-development programs that elevate confidence, competence, and clarity. His journey isn't about placement numbers — it's about empowering students to find and build their path.
              </p>
              
              <p>
                A lifelong learner and innovator, he pursues research with the same intensity as he mentors. His academic rigour, combined with his real-world experience, gives students both inspiration and direction.
              </p>
              
              <p>
                He reaches beyond campus through his renowned YouTube channel — where thousands of students tune in for insights, strategies, and honest conversations about career growth. Here, his mentorship is limitless.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          {/* <div className="text-center mb-12">
            <span className="text-xl tracking-[0.3em] uppercase font-semibold" style={{ color: '#A68229' }}>
              IMPACT AT A GLANCE
            </span>
            <div className="w-48 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mx-auto mt-4" />
          </div> */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`group relative p-6 rounded-3xl cursor-default transition-all duration-700 hover:scale-[1.08] hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  background: 'linear-gradient(165deg, #3D3426 0%, #2F2920 50%, #252017 100%)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  border: '1.5px solid rgba(166,130,41,0.3)',
                  boxShadow: `0 10px 40px -8px rgba(0,0,0,0.3), 
                              inset 0 1px 0 rgba(255,255,255,0.1),
                              inset 0 -1px 20px rgba(166,130,41,0.1)`
                }}
              >
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" style={{
                  background: `linear-gradient(165deg, 
                    rgba(61,52,38,0.9) 0%, 
                    rgba(47,41,32,0.9) 50%,
                    rgba(37,32,23,0.9) 100%)`,
                  boxShadow: '0 20px 60px -12px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.1)'
                }} />
                
                {/* Glass shine effect */}
                <div className="absolute inset-0 rounded-3xl opacity-30" style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 50%)'
                }} />
                
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-amber-300 transition-colors duration-500" style={{
                    fontFamily: 'Georgia, serif',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                  }}>
                    {stat.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-medium leading-relaxed">
                    {stat.subtitle}
                  </p>
                </div>
                
                {/* Bottom accent glow */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 group-hover:w-20 transition-all duration-700 rounded-full blur-sm" />
                <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-1 bg-linear-to-r from-amber-300 to-amber-500 group-hover:w-16 transition-all duration-700 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div>
          <div className="text-center mb-12">
            <span className="text-xl tracking-[0.3em] uppercase font-semibold" style={{ color: '#A68229' }}>
              💡 CORE PHILOSOPHY
            </span>
            <div className="w-48 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mx-auto mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {philosophies.map((philosophy, i) => (
              <div
                key={i}
                className="flex gap-6 items-start"
              >
                {/* Icon container */}
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <philosophy.icon className="w-8 h-8" style={{ color: '#A68229' }} strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#A68229', fontFamily: 'var(--font-playfair)' }}>
                    {philosophy.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    {philosophy.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutSection;