import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "1973",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold text-orange-600 md:text-2xl lg:text-3xl">Early Life</h3>
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200">
            Born on 11th February 1973, beginning a journey shaped by discipline, curiosity,
            and a strong foundation in values and education.
          </p>
          <ul className="space-y-2 text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">
            <li>• Grew up with strong emphasis on educational excellence and personal values</li>
            <li>• Developed early interest in understanding how things work and problem-solving</li>
            <li>• Foundation years that shaped character, work ethic, and lifelong learning approach</li>
          </ul>
        </div>
      ),
    },
    {
      title: "1991–1997",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold text-orange-600 md:text-2xl lg:text-3xl">Engineering Aspirations Take Shape</h3>
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200">
            Pursued Bachelor's degree in Mechanical Engineering
            from Babasaheb Ambedkar Marathwada University, Aurangabad,
            developing deep interest in design, systems, and real-world engineering.
          </p>
          <ul className="space-y-2 text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">
            <li>• Completed rigorous undergraduate engineering curriculum in Mechanical Engineering</li>
            <li>• Gained foundational knowledge in design principles, manufacturing systems, and engineering mechanics</li>
            <li>• Participated in technical projects and developed analytical thinking capabilities</li>
            <li>• Built strong academic foundation that would support future technical and teaching career</li>
          </ul>
        </div>
      ),
    },
    {
      title: "1997–1999",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold text-orange-600 md:text-2xl lg:text-3xl">Academic Growth & Higher Studies</h3>
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200">
            Completed Master of Engineering (M.E.) in Design from Pune University,
            refining technical expertise and moving closer to a professional engineering career.
          </p>
          <ul className="space-y-2 text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">
            <li>• Specialized in advanced design engineering and product development methodologies</li>
            <li>• Conducted in-depth research projects and developed expertise in CAD/CAM systems</li>
            <li>• Enhanced problem-solving abilities through complex engineering challenges</li>
            <li>• Prepared for transition into professional engineering roles with advanced technical skills</li>
          </ul>
        </div>
      ),
    },
    {
      title: "1999",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold text-orange-600 md:text-2xl lg:text-3xl">Step Into India's Scientific World</h3>
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200">
            Started his journey at Bhabha Atomic Research Centre (BARC), Mumbai,
            working in software/systems engineering — gaining rigorous technical, analytical,
            and research exposure at a world-class institution.
          </p>
          <ul className="space-y-2 text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">
            <li>• Worked in prestigious national research institution on cutting-edge technology projects</li>
            <li>• Gained exposure to software engineering, systems design, and analytical methodologies</li>
            <li>• Developed rigorous approach to problem-solving and quality standards</li>
            <li>• Collaborated with top scientists and engineers in high-stakes technical environment</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2002",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold text-orange-600 md:text-2xl lg:text-3xl">Transition to Product Engineering</h3>
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200">
            Joined Bombay Dyeing Group as Senior Engineer – Product Design & Development,
            shaping real-world engineering solutions and understanding industry operations.
          </p>
          <ul className="space-y-2 text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">
            <li>• Led product design and development initiatives in manufacturing sector</li>
            <li>• Gained hands-on experience in industry operations, production systems, and quality management</li>
            <li>• Bridged gap between theoretical engineering knowledge and practical industrial applications</li>
            <li>• Developed understanding of business operations and real-world engineering constraints</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2008",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold text-orange-600 md:text-2xl lg:text-3xl">A Turning Point: Discovering Passion for Education</h3>
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200">
            Moved into the education ecosystem, mentoring engineering students
            and guiding them toward careers — a shift that defined the next two decades
            of his professional purpose.
          </p>
          <ul className="space-y-2 text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">
            <li>• Made conscious career transition from industry to education sector</li>
            <li>• Recognized opportunity to make lasting impact by shaping young engineering minds</li>
            <li>• Started mentoring students on career planning, skill development, and industry readiness</li>
            <li>• Discovered deep personal fulfillment in helping students achieve their professional goals</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2008–2013",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold text-orange-600 md:text-2xl lg:text-3xl">Building Foundations in Student Development</h3>
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200">
            Deeply involved in student skill-building, employability training,
            and campus preparation programs across JSPM institutions.
            Realized the impact he could create in shaping young careers.
          </p>
          <ul className="space-y-2 text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">
            <li>• Designed and implemented comprehensive employability training programs for engineering students</li>
            <li>• Conducted workshops on technical skills, soft skills, and interview preparation</li>
            <li>• Worked closely with placement cells to enhance student-industry connections</li>
            <li>• Mentored hundreds of students individually on career choices and professional development</li>
            <li>• Established reputation as dedicated mentor who genuinely cares about student success</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2013",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold text-orange-600 md:text-2xl lg:text-3xl">Stepping Into Teaching & Mentorship</h3>
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200">
            Began working as a Mechanical Engineering faculty member,
            bringing classroom teaching, technical clarity, and real-world exposure
            to hundreds of students.
          </p>
          <ul className="space-y-2 text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">
            <li>• Joined as full-time faculty member teaching Mechanical Engineering subjects</li>
            <li>• Brought industry experience into classroom, making technical concepts practical and relatable</li>
            <li>• Developed innovative teaching methods combining theory with real-world applications</li>
            <li>• Became accessible mentor figure for students seeking academic and career guidance</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2013–2020",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold text-orange-600 md:text-2xl lg:text-3xl">Becoming a Recognized Mentor in Pune</h3>
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200">
            Guided thousands of students, supported scholarship initiatives,
            and contributed to employability programs like Zensar ESD, Persistent PSL, etc.
            Established himself as a trusted figure in student development.
          </p>
          <ul className="space-y-2 text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">
            <li>• Mentored thousands of students across multiple institutions in Pune region</li>
            <li>• Collaborated with leading IT companies on campus recruitment and training programs</li>
            <li>• Supported scholarship initiatives helping deserving students access quality education</li>
            <li>• Built strong corporate relationships facilitating placement opportunities for students</li>
            <li>• Earned recognition as go-to mentor for career guidance and professional development</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2018–2022",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold text-orange-600 md:text-2xl lg:text-3xl">Research, Innovation & Patents</h3>
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200">
            Filed and published patents in construction-material innovation,
            while presenting research at international conferences —
            balancing academics, innovation, and leadership.
          </p>
          <ul className="space-y-2 text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">
            <li>• Filed multiple patents in construction materials and engineering innovations</li>
            <li>• Presented research papers at national and international engineering conferences</li>
            <li>• Combined teaching responsibilities with active research and innovation work</li>
            <li>• Demonstrated that educators can contribute to cutting-edge research and industry advancement</li>
            <li>• Inspired students to pursue research-oriented careers and innovation mindset</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2020–Present",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold text-orange-600 md:text-2xl lg:text-3xl">Digital Impact for Students</h3>
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200">
            Started a placement-awareness YouTube channel
            with 450+ videos, 10,000+ subscribers, 1M+ views,
            becoming a digital guide for students across Maharashtra.
          </p>
          <ul className="space-y-2 text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">
            <li>• Launched YouTube channel focused on placement preparation and career guidance</li>
            <li>• Created 450+ educational videos covering aptitude, technical skills, and interview techniques</li>
            <li>• Reached 10,000+ subscribers and generated over 1 million views across content</li>
            <li>• Extended mentorship reach beyond physical campus to students across Maharashtra</li>
            <li>• Provided free, accessible career guidance resources to thousands of aspiring engineers</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h3 className="mb-4 text-xl font-bold text-orange-600 md:text-2xl lg:text-3xl">Continuing the Mission of Student Empowerment</h3>
          <p className="mb-4 text-base font-normal leading-relaxed text-neutral-800 md:text-lg dark:text-neutral-200">
            Currently contributing to academic excellence and student success at BVCOEP,
            carrying forward a 25+ year journey of education, mentorship,
            industry collaboration, and youth development.
          </p>
          <ul className="space-y-2 text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">
            <li>• Serving at BVCOEP with continued dedication to student development and academic excellence</li>
            <li>• Mentoring new generation of engineering students with experience from 25+ years in education</li>
            <li>• Maintaining strong industry connections to create placement and internship opportunities</li>
            <li>• Expanding digital outreach through continued content creation and online mentorship</li>
            <li>• Committed to mission of transforming students into confident, industry-ready professionals</li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
