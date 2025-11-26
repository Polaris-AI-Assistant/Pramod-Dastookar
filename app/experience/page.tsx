import { Timeline } from "@/components/ui/timeline";
import { Berkshire_Swash, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/navbar';

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

export default function TimelineDemo() {
  const data = [
    {
      title: "1999 – 2002",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl" style={{ color: '#A68229', fontFamily: 'var(--font-playfair)' }}>Senior Engineer – Product Design & Development</h3>
          <p className="mb-2 text-base font-semibold text-neutral-700 md:text-lg dark:text-neutral-300" style={{ fontFamily: 'var(--font-playfair)' }}>
            Bombay Dyeing Group
          </p>
          <div className="w-20 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mb-4" />
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Worked as Senior Engineer handling product design, development, and engineering processes, gaining strong industry experience in mechanical systems, quality, and operations.
          </p>
        </div>
      ),
    },
    {
      title: "2002 – 2003",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl" style={{ color: '#A68229', fontFamily: 'var(--font-playfair)' }}>Software / Systems Engineer</h3>
          <p className="mb-2 text-base font-semibold text-neutral-700 md:text-lg dark:text-neutral-300" style={{ fontFamily: 'var(--font-playfair)' }}>
            Bhabha Atomic Research Centre (BARC), Mumbai
          </p>
          <div className="w-20 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mb-4" />
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Contributed to software and systems engineering at one of India's premier research institutions, strengthening his technical base and analytical approach.
          </p>
        </div>
      ),
    },
    {
      title: "2003 – 2004",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl" style={{ color: '#A68229', fontFamily: 'var(--font-playfair)' }}>Management Consultant – R.T. Components, Mumbai</h3>
          <div className="w-20 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mb-4" />
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Consulted on materials and purchase functions for Tata Memorial Hospital. Developed expertise in supply chain, procurement, and industrial operations.
          </p>
        </div>
      ),
    },
    {
      title: "2008 – 2012",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl" style={{ color: '#A68229', fontFamily: 'var(--font-playfair)' }}>Placement & Recruitment Lead</h3>
          <p className="mb-2 text-base font-semibold text-neutral-700 md:text-lg dark:text-neutral-300" style={{ fontFamily: 'var(--font-playfair)' }}>
            JSPM Engineering Colleges, Pune
          </p>
          <div className="w-20 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mb-4" />
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Led campus placement services for JSPM institutions. Managed recruiter engagement, aptitude training, and placement drives for engineering students.
          </p>
        </div>
      ),
    },
    {
      title: "2008 – 2012",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl" style={{ color: '#A68229', fontFamily: 'var(--font-playfair)' }}>Head – Training & Placement</h3>
          <p className="mb-2 text-base font-semibold text-neutral-700 md:text-lg dark:text-neutral-300" style={{ fontFamily: 'var(--font-playfair)' }}>
            JSPM Campus (5 Engineering Colleges)
          </p>
          <p className="mb-1 text-sm italic text-neutral-600 md:text-base dark:text-neutral-400">
            Parallel role
          </p>
          <div className="w-20 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mb-4" />
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Oversaw placement and student development across five JSPM engineering campuses, coordinating corporate drives and enhancing employability programs.
          </p>
        </div>
      ),
    },
    {
      title: "2013 – 2024",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl" style={{ color: '#A68229', fontFamily: 'var(--font-playfair)' }}>Assistant Professor & Head – Training & Placement</h3>
          <p className="mb-2 text-base font-semibold text-neutral-700 md:text-lg dark:text-neutral-300" style={{ fontFamily: 'var(--font-playfair)' }}>
            KJ College of Engineering (KJEI), Pune
          </p>
          <div className="w-20 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mb-4" />
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Blended academic teaching (Mechanical Engineering) with leadership of the college's Training & Placement department. Guided hundreds of students in career development and campus preparation.
          </p>
        </div>
      ),
    },
    {
      title: "2013 – 2019",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl" style={{ color: '#A68229', fontFamily: 'var(--font-playfair)' }}>Head – Corporate Relations & Training & Placement</h3>
          <p className="mb-2 text-base font-semibold text-neutral-700 md:text-lg dark:text-neutral-300" style={{ fontFamily: 'var(--font-playfair)' }}>
            K J Group of Institutes (KJEI)
          </p>
          <div className="w-20 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mb-4" />
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Led Training & Placement across multiple colleges under the KJEI umbrella. Conducted 50+ mega pool drives with IBM, TCS, Infosys, Capgemini, etc., significantly boosting campus hiring.
          </p>
        </div>
      ),
    },
    {
      title: "2013 – 2019",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl" style={{ color: '#A68229', fontFamily: 'var(--font-playfair)' }}>Vice Chairman – FTPO</h3>
          <p className="mb-2 text-base font-semibold text-neutral-700 md:text-lg dark:text-neutral-300" style={{ fontFamily: 'var(--font-playfair)' }}>
            Federation of Training & Placement Officers, Pune Region
          </p>
          <div className="w-20 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mb-4" />
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Played a leadership role in building a strong community of TPOs across Pune. Organized initiatives, strengthened industry collaboration, and contributed to employability strategy.
          </p>
        </div>
      ),
    },
    {
      title: "2018 – 2020",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl" style={{ color: '#A68229', fontFamily: 'var(--font-playfair)' }}>Zensar RPG Foundation – Employability Skills (ESD) Program Coordinator</h3>
          <div className="w-20 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mb-4" />
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Guided students through Java, .NET, SQL, and communication-skills training under Zensar's ESD program. Helped 800+ students become job-ready.
          </p>
        </div>
      ),
    },
    {
      title: "2019 – 2020",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl" style={{ color: '#A68229', fontFamily: 'var(--font-playfair)' }}>Persistent Foundation – Girls' Scholarship Program Coordinator</h3>
          <div className="w-20 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mb-4" />
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Worked as Chief Coordinator for the PSL Foundation's Girls Scholarship Program, enabling over 20 female engineering students to receive annual scholarships and mentorship.
          </p>
        </div>
      ),
    },
    {
      title: "2020 – 2024",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl" style={{ color: '#A68229', fontFamily: 'var(--font-playfair)' }}>Head – Corporate Relations</h3>
          <p className="mb-2 text-base font-semibold text-neutral-700 md:text-lg dark:text-neutral-300" style={{ fontFamily: 'var(--font-playfair)' }}>
            MIT Academy of Engineering (MITAOE), Pune
          </p>
          <div className="w-20 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mb-4" />
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Managed industry partnerships, campus recruitments, and corporate relations. Strengthened MITAOE's placement ecosystem and coordinated major industry interactions.
          </p>
        </div>
      ),
    },
    {
      title: "2024 – 2025",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl" style={{ color: '#A68229', fontFamily: 'var(--font-playfair)' }}>Associate Director – Engineering Placement</h3>
          <p className="mb-2 text-base font-semibold text-neutral-700 md:text-lg dark:text-neutral-300" style={{ fontFamily: 'var(--font-playfair)' }}>
            MIT World Peace University (MIT WPU), Pune
          </p>
          <div className="w-20 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mb-4" />
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Directed engineering placements, alumni relations, and employer outreach. Led large-scale recruitment drives and strategic employability initiatives.
          </p>
        </div>
      ),
    },
    {
      title: "2025 – Present",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl" style={{ color: '#A68229', fontFamily: 'var(--font-playfair)' }}>Associate Director – Training & Placements</h3>
          <p className="mb-2 text-base font-semibold text-neutral-700 md:text-lg dark:text-neutral-300" style={{ fontFamily: 'var(--font-playfair)' }}>
            Bharati Vidyapeeth College of Engineering (BVCOEP), Pune
          </p>
          <div className="w-20 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mb-4" />
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Currently leading the Training & Placement department, corporate relations, and student mentorship. Bringing 25+ years of industry–academia experience to shape the institute's placement vision.
          </p>
        </div>
      ),
    },
  ];
  return (
    <>
      <Navbar />
      <div className={`relative w-full overflow-clip bg-[#FAF9F6] ${berkshireSwash.variable} ${playfairDisplay.variable}`}>
        <div className="py-12">
          <div className="text-center mb-8">
            <span className="text-xl tracking-[0.3em] uppercase font-semibold" style={{ color: '#A68229' }}>
              PROFESSIONAL JOURNEY
            </span>
            <div className="w-48 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mx-auto mt-4" />
          </div>
          <Timeline data={data} />
        </div>
      </div>
    </>
  );
}
