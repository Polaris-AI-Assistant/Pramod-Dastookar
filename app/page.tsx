'use client';

import Navbar from "@/components/navbar";
import Impact from "@/components/impact";
import { TimelineDemo } from "@/components/journeytimeline";
import ExperienceTimeline from "@/components/professionalexperience";
import { Feature108Demo } from "@/components/impact2";
import { Logos3 } from "@/components/logos3";
import HeroCarousel from "@/components/HeroCarousel";
import Contact2 from "@/components/contact";


export default function Home() {
  const scrollToImpact = () => {
    const impactSection = document.getElementById('impact-section');
    if (impactSection) {
      impactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <Navbar/>
      <HeroCarousel />
      <Feature108Demo />
      {/* <Impact/> */}
      <Logos3 />
      
      <ExperienceTimeline />
      <Contact2/>

    </div>
  );
}
