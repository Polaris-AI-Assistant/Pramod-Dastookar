import { Briefcase, Users, Lightbulb, Rocket, Globe, GraduationCap } from "lucide-react";

import { Feature108 } from "@/components/shadcnblocks-com-feature108";

const demoData = {
  badge: "Legacy of Impact",
  heading: "25+",
  description: "A distinguished career spanning decades of transformative leadership in education and industry",
  tabs: [
    {
      value: "tab-1",
      icon: <Briefcase className="h-auto w-8 shrink-0" />,
      label: "Career Architect",
      stats: {
        number: 12000,
        suffix: "+",
        text: "Students Mentored",
        description: "Mentoring over twelve thousand ambitious minds with clarity, confidence, and purpose — transforming uncertainty into direction."
      },
      content: {
        badge: "Shaping Pathways",
        title: "The Career Architect",
        description:
          "He has mentored thousands of students through a structured, insight-driven career development approach. His guidance helps students move from uncertainty to well-informed decision-making, enabling them to pursue careers aligned with their strengths, interests, and long-term goals. His frameworks focus on clarity, consistency, and personal growth—helping learners build careers with intention and confidence.",
        buttonText: "Learn More",
        imageSrc:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Career guidance and mentoring",
      },
    },
    {
      value: "tab-2",
      icon: <Rocket className="h-auto w-8 shrink-0" />,
      label: "Placement Leader",
      stats: {
        number: 100,
        suffix: "+",
        text: "Placement Drives",
        description: "Orchestrating more than one hundred high-impact campus hiring drives that connect students to top-tier companies."
      },
      content: {
        badge: "Industry Connection",
        title: "The Placement Game-Changer",
        description:
          "Across multiple leading engineering institutions, he has designed and implemented robust placement strategies that significantly improved recruitment outcomes. His work involves creating systematic training pipelines, strengthening institute-industry relationships, and establishing data-backed processes that ensure sustained placement performance. His leadership has contributed to stronger employer trust and higher student success rates.",
        buttonText: "Discover Impact",
        imageSrc:
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Campus placement and recruitment",
      },
    },
    {
      value: "tab-3",
      icon: <Users className="h-auto w-8 shrink-0" />,
      label: "Bridge-Builder",
      stats: {
        number: 200,
        suffix: "+",
        text: "Corporate Alliances",
        description: "Building powerful partnerships with over two hundred companies to create meaningful industry-academic engagement."
      },
      content: {
        badge: "Corporate Partnerships",
        title: "The Industry Bridge-Builder",
        description:
          "He has cultivated strong partnerships with top corporate organizations, resulting in consistent hiring, internships, and employability initiatives. His ability to understand organizational needs and translate them into academic practices makes him a key facilitator of meaningful campus-corporate engagement. These collaborations have enabled institutes to build reliable recruitment pipelines and industry-relevant learning environments.",
        buttonText: "View Success",
        imageSrc:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Industry partnerships",
      },
    },
    {
      value: "tab-4",
      icon: <GraduationCap className="h-auto w-8 shrink-0" />,
      label: "Skill Developer",
      stats: {
        number: 450,
        suffix: "+",
        text: "Career Videos",
        description: "Producing hundreds of resource-rich videos that equip students with skills, strategies, and confidence to succeed."
      },
      content: {
        badge: "Professional Readiness",
        title: "The Employability Catalyst",
        description:
          "Through comprehensive training interventions—covering communication, technical refinement, interview preparedness, and corporate-driven skill development—he has significantly elevated student employability. His programs focus not just on securing jobs but on preparing students to excel in professional environments. His contribution has shaped thousands of students into capable, polished, and workplace-ready professionals.",
        buttonText: "See Programs",
        imageSrc:
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Skills development and training",
      },
    },
    {
      value: "tab-5",
      icon: <Lightbulb className="h-auto w-8 shrink-0" />,
      label: "Innovator",
      stats: {
        number: 2,
        suffix: "",
        text: "Patented Innovations",
        description: "Pioneering two patented breakthroughs in sustainable materials — turning research into real-world impact."
      },
      content: {
        badge: "Research Excellence",
        title: "The Scholar & Innovator",
        description:
          "As a Mechanical Engineer with advanced qualifications, he has consistently contributed to academic growth through research, innovation, and scholarly engagement. His commitment to professional development and pursuit of a doctoral degree reflect his belief in lifelong learning. His academic journey demonstrates a balance of technical expertise, leadership, and innovation.",
        buttonText: "View Research",
        imageSrc:
          "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Research and innovation",
      },
    },
    {
      value: "tab-6",
      icon: <Globe className="h-auto w-8 shrink-0" />,
      label: "Digital Educator",
      stats: {
        number: 1,
        suffix: "M+",
        text: "Views",
        description: "Igniting aspirations via YouTube — reaching over a million students with practical career and placement guidance."
      },
      content: {
        badge: "Beyond Campus Walls",
        title: "The Digital Impact Maker",
        description:
          "Through his digital initiatives and widely followed YouTube content, he delivers actionable guidance to students across the country. His online presence enables him to reach learners beyond the physical campus—offering them clarity on careers, skills, and industry readiness. This digital impact has created a learning community that benefits from his experience, insights, and mentorship.",
        buttonText: "Watch Content",
        imageSrc:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop",
        imageAlt: "Digital education and content creation",
      },
    },
  ],
};

function Feature108Demo() {
  return <Feature108 {...demoData} />;
}

export { Feature108Demo };
