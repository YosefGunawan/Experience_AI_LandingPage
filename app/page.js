import React from "react";
import LimitationSection from "@/components/section/LimitationSection";
import VideoSection from "@/components/section/VideoSection";
import ImpactSection from "@/components/section/ImpactSection";
import CtaSection from "@/components/section/CtaSection";
import HeaderSection from "@/components/section/HeaderSection";
import NavBar from "@/components/nav/NavBar";

const navData = [
  { title: "Home", link: "#section1", active: true },
  { title: "Limitation", link: "#section2", active: false },
  { title: "Impact", link: "#section3", active: false },
  { title: "Highlight", link: "#section4", active: false },
  { title: "Conclusion", link: "#section5", active: false },
];

const page = () => {
  return (
    <div>
      <nav>
        <NavBar data={navData} />
      </nav>

      <main
        className={`h-screen custom-scroll overflow-y-scroll snap-y snap-mandatory scroll-smooth`}
      >
        <section id="section1" className="h-screen snap-start">
          <HeaderSection />
        </section>

        <section id="section2" className="h-screen snap-start">
          <LimitationSection />
        </section>

        <section id="section3" className="h-screen snap-start">
          <ImpactSection />
        </section>

        <section id="section4" className="h-screen snap-start">
          <VideoSection />
        </section>

        <section id="section5" className="h-screen snap-start">
          <CtaSection />
        </section>
      </main>
    </div>
  );
};

export default page;
