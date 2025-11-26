'use client';

interface ImpactCard {
  title: string;
  subtitle: string;
  description: string;
}

const impactData: ImpactCard[] = [
  {
    title: "The Career Architect",
    subtitle: "Shaping Pathways. Inspiring Possibilities.",
    description: "A trusted mentor guiding thousands toward clarity, confidence, and meaningful careers."
  },
  {
    title: "The Placement Game-Changer",
    subtitle: "Redefining How Campuses Connect With Industry",
    description: "Built strong placement cultures across leading engineering institutes, enabling opportunities at scale."
  },
  {
    title: "The Industry Bridge-Builder",
    subtitle: "Where Campuses Meet Corporates",
    description: "Forged deep corporate partnerships that opened doors for consistent hiring and long-term recruitment pipelines."
  },
  {
    title: "The Employability Catalyst",
    subtitle: "Turning Potential Into Professional Readiness",
    description: "A driving force behind skill-development programs, enhancing technical, communication, and industry-ready skills."
  },
  {
    title: "The Scholar & Innovator",
    subtitle: "Engineering Expertise With Research Excellence",
    description: "Mechanical Engineer, academic leader, patent contributor, and lifelong learner pursuing impactful innovations."
  },
  {
    title: "The Digital Impact Maker",
    subtitle: "Empowering Students Beyond The Campus Walls",
    description: "Through a widely followed YouTube channel and digital outreach, he delivers practical guidance to thousands of aspirants."
  }
];

export default function Impact() {

  return (
    <section className="min-h-screen w-full bg-linear-to-b from-white to-orange-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="mb-12 flex justify-start">
          <div className="inline-block px-8 py-3 bg-linear-to-r from-orange-500 to-orange-400 text-white font-semibold text-lg rounded-full shadow-lg">
            IMPACT
          </div>
        </div>

        {/* Main Content - Horizontal Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Central Circle - Left Side */}
          <div className="shrink-0">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full border-4 border-orange-400 flex flex-col items-center justify-center text-center p-8 lg:p-10 bg-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-orange-500 leading-tight">
                    25+ Years of<br />Transforming<br />Futures
                  </h2>
                  <p className="text-xs sm:text-sm lg:text-sm text-orange-600 font-medium leading-relaxed">
                    From engineering classrooms to top corporate boardrooms —
                    a career dedicated to shaping students, strengthening institutions,
                    and powering talent for tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Cards Grid - Right Side - 3 per row */}
          <div className="flex-1 w-full lg:max-w-[900px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {impactData.map((card, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border-2 border-orange-200 p-5 lg:p-6 hover:border-orange-400 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="space-y-3">
                    <h3 className="text-lg lg:text-xl font-bold text-orange-600 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm lg:text-base text-orange-500 font-semibold leading-relaxed">
                      {card.subtitle}
                    </p>
                    <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
