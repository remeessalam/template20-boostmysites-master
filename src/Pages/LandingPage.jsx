import React from "react";
import LandingHeader from "../Components/landingpage/LandingHeader";
import LandingFooter from "../Components/landingpage/LandingFooter";
import HomePageBanner from "../Components/HomePageBanner";
import homeaboutimg from "../assets/images/homeaboutimg.png";
import LandingServices from "../Components/landingpage/LandingServices";
import { useTheme } from "../Context/ThemeContext";
import CoreValues from "../Components/CoreValues";
import VisionMission from "../Components/VisionMission";
import OurStory from "../Components/OurStory";
import UnlockEfficiency from "../Components/UnlockEfficiency";
import Faq from "../Components/Faq";
import LeadForm from "../Components/landingpage/LeadForm";
import Portfolio from "../Components/Portfolio";

const LandingPage = ({ page }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <>
      <LandingHeader />
      <div className="bg-white dark:bg-darkblack">
        <HomePageBanner />
        <section id="about-us">
          <div className="wrapper grid md:grid-cols-2 gap-10 paddingtop paddingbottom">
            <img src={homeaboutimg} alt="homeaboutimg" />
            <div>
              <h1 className="main-title leading-tight">Welcome to aicompany</h1>
              <p className="desc mt-4">
                In a reality where technology evolves at light speed, aicompany
                stands at the intersection of cosmic insight and cutting-edge
                innovation. By merging quantum-level thinking with AI-driven
                solutions, we transform visionary ideas into immersive digital
                experiences that transcend borders, dimensions, and industries.
                Whether you need a next-generation mobile app, an interstellar
                AR/VR environment, or an AI calling system that revolutionizes
                global communication, aicompany is here to guide you on this
                journey across galaxies.
              </p>
            </div>
          </div>
        </section>
        <LandingServices page={page} />
        <div className="relative overflow-hidden">
          <div
            className={`absolute ${
              isDarkMode ? `flex` : "hidden"
            } top-[41rem] blur-3xl -left-[47rem] w-full h-full bg-footerBackground  `}
          />
          <Portfolio page={page} />
          <section className="relative z-10 w-full h-full">
            <CoreValues />
            <VisionMission />
            <OurStory />
            <UnlockEfficiency />
            <Faq />
            <LeadForm />
          </section>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default LandingPage;
