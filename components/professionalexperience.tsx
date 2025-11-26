import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Berkshire_Swash, Playfair_Display } from 'next/font/google';

// Font configurations matching impact section
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

const ExperienceTimeline = () => {
  const experiences = [
    {
      year: 1973,
      title: "Early Life",
      description: "Born on 11th February 1973, marking the beginning of a journey shaped by strong values, discipline, and academic encouragement. Early experiences fostered curiosity, a practical mindset, and an eagerness to understand how things work—traits that later influenced both engineering and leadership choices."
    },
    {
      year: 1991,
      title: "Engineering Aspirations Take Shape",
      period: "1991–1997",
      description: "Pursued a Bachelor's degree in Mechanical Engineering from Babasaheb Ambedkar Marathwada University, Aurangabad. These years strengthened his foundation in core engineering principles and ignited a deeper interest in design, mechanics, and applied problem-solving. Exposure to laboratories, projects, and teamwork gradually shaped his technical identity."
    },
    {
      year: 1997,
      title: "Academic Growth & Higher Studies",
      period: "1997–1999",
      description: "Completed a Master of Engineering (M.E.) in Design from Pune University. This period refined his analytical thinking, understanding of design methodologies, and approach to engineering innovation. It also introduced him to research-oriented work, preparing the ground for future academic and technical contributions."
    },
    {
      year: 1999,
      title: "Step Into India's Scientific World",
      company: "Bhabha Atomic Research Centre (BARC), Mumbai",
      description: "Entered one of India's most prestigious scientific and research environments. This phase provided exposure to high-precision systems, rigorous engineering processes, and a culture of technical excellence. The experience deepened his understanding of structured problem-solving and complex system behaviour."
    },
    {
      year: 2002,
      title: "Transition to Product Engineering",
      company: "Bombay Dyeing Group",
      description: "Moved into industry-driven mechanical and product design, gaining firsthand experience in product development cycles, industrial engineering, and practical implementation of design principles. This transition enriched his understanding of how ideas transform into manufacturable, real-world solutions."
    },
    {
      year: 2008,
      title: "A Turning Point: Discovering Passion for Education",
      description: "Shifted focus toward mentoring and student development—a defining moment in his career. What began as involvement in student interactions evolved into a deep commitment to guiding young minds, shaping careers, and contributing to the academic ecosystem. This turning point set the foundation for his future pursuit in training, placements, and institutional development."
    },
    {
      year: 2009,
      title: "Building Foundations in Student Development",
      company: "JSPM Institutions",
      period: "2008–2013",
      description: "Spent this period engaging with students through skill-building initiatives, career awareness sessions, and placement preparation efforts. This phase strengthened his insight into student challenges, diverse learning styles, and the transformative impact of structured guidance—marking the start of his long-standing work in employability enhancement."
    },
    {
      year: 2013,
      title: "Stepping Into Teaching & Mentorship",
      description: "Took on teaching responsibilities in Mechanical Engineering, combining technical expertise with an ability to simplify complex concepts. Classroom engagement became a platform to inspire students, build confidence, and promote clarity in both academics and career planning."
    },
    {
      year: 2014,
      title: "Becoming a Recognized Mentor in Pune",
      period: "2013–2020",
      description: "Became a well-known figure in Pune's academic and student community. His involvement in scholarship initiatives, skill-development programs, and mentoring activities expanded significantly. This phase strengthened his reputation as a trusted guide who meaningfully impacted student careers through structured training and career support."
    },
    {
      year: 2018,
      title: "Research, Innovation & Patents",
      period: "2018–2022",
      description: "Focused on research in construction-material innovations, contributing to patents and presenting at international conferences. This period showcased his ability to balance academic exploration with practical application, reinforcing his commitment to innovation and continuous learning."
    },
    {
      year: 2020,
      title: "Digital Impact for Students",
      period: "2020–Present",
      description: "Launched a placement-awareness YouTube platform that steadily grew into a valuable resource for thousands of students. With 450+ videos, 10,000+ subscribers, and 1M+ views, the channel expanded his impact beyond campuses—providing accessible guidance, skill tips, and career insights for aspiring engineers."
    },
    {
      year: 2025,
      title: "Continuing the Mission of Student Empowerment",
      company: "BVCOEP",
      description: "Continuing to contribute to student development, academic excellence, and institutional growth. This phase represents the culmination of over 25 years of experience—blending engineering insight, educational leadership, and a mission-driven approach to shaping future-ready professionals."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const visibleCount = 6;

  const handleYearClick = (index: number) => {
    setCurrentIndex(index);
    
    // Start shifting when we reach the 6th item (index 5)
    if (index >= visibleCount - 1) {
      // Shift left one by one, but stop when the last item reaches the rightmost position
      const maxOffset = experiences.length - visibleCount;
      const newOffset = Math.min(index - (visibleCount - 1), maxOffset);
      setScrollOffset(newOffset);
    } else {
      // For the first 6 items, keep offset at 0
      setScrollOffset(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      handleYearClick(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < experiences.length - 1) {
      handleYearClick(currentIndex + 1);
    }
  };

  const currentExperience = experiences[currentIndex];

  return (
    <div className={`h-screen bg-[#FAF9F6] p-4 overflow-hidden ${berkshireSwash.variable} ${playfairDisplay.variable}`}>
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        {/* Header */}
        <div className="mb-6 text-center">
          <span className="text-amber-700 text-xl tracking-[0.3em] uppercase font-semibold">
            JOURNEY
          </span>
          <div className="w-48 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mx-auto mt-4" />
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-3 mb-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-3 rounded-full transition-all duration-300 ${
              currentIndex === 0
                ? 'bg-amber-100/50 text-amber-300 cursor-not-allowed'
                : 'text-white shadow-md hover:shadow-lg hover:scale-105'
            }`}
            style={currentIndex !== 0 ? { background: 'linear-gradient(135deg, #C9A961 0%, #A68229 100%)' } : undefined}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === experiences.length - 1}
            className={`p-3 rounded-full transition-all duration-300 ${
              currentIndex === experiences.length - 1
                ? 'bg-amber-100/50 text-amber-300 cursor-not-allowed'
                : 'text-white shadow-md hover:shadow-lg hover:scale-105'
            }`}
            style={currentIndex !== experiences.length - 1 ? { background: 'linear-gradient(135deg, #C9A961 0%, #A68229 100%)' } : undefined}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Enhanced Timeline */}
        <div className="sticky top-0 z-10 bg-[#FAF9F6] py-4 mb-6">
          <div className="relative overflow-hidden">
            {/* Decorative top accent */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-48 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent opacity-60" />
            
            {/* Enhanced Timeline Line */}
            <div className="relative h-1 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full overflow-hidden mb-4">
              <div
                className="absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out shadow-md"
                style={{ width: `${((currentIndex + 1) / experiences.length) * 100}%`, backgroundColor: '#A68229' }}
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent opacity-70" />
              </div>
            </div>
            
            <div 
              className="flex items-center justify-between transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${scrollOffset * (100 / visibleCount)}%)` }}
            >
              {experiences.map((exp, index) => (
                <div key={exp.year} className="flex flex-col items-center shrink-0 group" style={{ width: `${100 / visibleCount}%` }}>
                  <div className="relative z-20 -mt-6 mb-5">
                    {currentIndex === index && (
                      <div className="absolute inset-0 rounded-full blur-md opacity-40 animate-pulse" style={{ backgroundColor: '#A68229' }} />
                    )}
                    <div
                      className={`relative w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                        currentIndex === index 
                          ? 'ring-4 ring-amber-300/50 shadow-lg' 
                          : 'bg-gray-300 group-hover:bg-gray-400 group-hover:scale-110'
                      }`}
                      style={currentIndex === index ? { backgroundColor: '#A68229' } : undefined}
                      onClick={() => handleYearClick(index)}
                    />
                  </div>
                  
                  <button
                    onClick={() => handleYearClick(index)}
                    className={`transition-all duration-300 ${
                      currentIndex === index ? 'scale-110' : 'hover:scale-105'
                    }`}
                    style={{
                      fontFamily: 'Berkshire Swash, cursive'
                    }}
                  >
                    <div className={`relative text-xl font-bold transition-all duration-300 ${
                      currentIndex === index 
                        ? '' 
                        : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                    style={currentIndex === index ? { color: '#A68229' } : undefined}>
                      {currentIndex === index && (
                        <div className="absolute -inset-2 bg-amber-400/10 rounded-full blur-sm" />
                      )}
                      <span className="relative">{exp.year}</span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
            
            {/* Decorative bottom accent */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent opacity-60" />
          </div>
        </div>

        {/* Content Card */}
        <div className="grid md:grid-cols-2 gap-6 items-center flex-1 overflow-hidden">
          {/* Image placeholder */}
          <div className="bg-linear-to-br from-amber-400/20 via-amber-300/10 to-amber-500/20 rounded-lg h-64 flex items-center justify-center border-2 border-amber-300">
            <div className="text-amber-700 text-center p-8">
              <div className="text-6xl mb-4">📸</div>
              <p className="text-sm opacity-75" style={{ fontFamily: 'var(--font-playfair)' }}>Professional photo placeholder</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 overflow-y-auto max-h-full">
            <div className="inline-block text-white px-6 py-2 rounded text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-berkshire)', backgroundColor: '#A68229' }}>
              {currentExperience.year}
            </div>
            
            <h2 className="text-2xl font-bold mb-4" style={{
              color: '#A68229',
              fontFamily: 'var(--font-playfair)'
            }}>
              {currentExperience.title}
            </h2>
            
            {currentExperience.company && (
              <h3 className="text-xl font-semibold text-gray-700 mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                {currentExperience.company}
              </h3>
            )}
            
            {currentExperience.period && (
              <p className="text-gray-600 font-medium mb-4">
                {currentExperience.period}
              </p>
            )}
            
            <div className="w-20 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mb-4" />
            
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
              {currentExperience.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;