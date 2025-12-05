'use client';

import Navbar from "@/components/navbar";
import Impact from "@/components/impact";
import { TimelineDemo } from "@/components/journeytimeline";
import ExperienceTimeline from "@/components/professionalexperience";
import { Feature108Demo } from "@/components/impact2";
import { Logos3 } from "@/components/logos3";
import HeroCarousel from "@/components/HeroCarousel";
import Contact2 from "@/components/contact";
import { FeaturedVideos } from "@/components/FeaturedVideos";


export default function Home() {
  const scrollToImpact = () => {
    const impactSection = document.getElementById('impact-section');
    if (impactSection) {
      impactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar/>
      <div className="w-full min-w-full overflow-x-hidden">
        <HeroCarousel />
        <Feature108Demo />
        {/* <Impact/> */}
        <Logos3 />
        <FeaturedVideos />
        {/* <ExperienceTimeline /> */}
        <Contact2/>
      </div>
    </>
  );
}
