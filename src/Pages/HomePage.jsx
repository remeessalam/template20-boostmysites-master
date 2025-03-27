import React from "react";
import HomePageBanner from "../Components/HomePageBanner";
import homeaboutimg from "../assets/images/homeaboutimg.png";
import WhyChooseUs from "../Components/WhyChooseUs";
import RoundedHeader from "../Components/RoundedHeader";
import ServicesGrid from "../Components/ServicesGrid";
import Testimonials from "../Components/Testimonials";
import Highlights from "../Components/Highlights";
import Faq from "../Components/Faq";
import { useTheme } from "../Context/ThemeContext";
import Industries from "../Components/Industries";
import Ourvalues from "../Components/Ourvalues";
import Portfolio from "../Components/Portfolio";
const HomePage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HomePageBanner />
      <section>
        <div className="wrapper grid md:grid-cols-2 gap-10 sm:pt-[4rem] pt-[2rem] paddingbottom">
          <img data-aos="fade-right" src={homeaboutimg} alt="homeaboutimg" />
          <div>
            <h1 className="main-title leading-tight" data-aos="fade-left">
              Welcome to aicompany
            </h1>
            <p className="desc mt-4" data-aos="fade-left">
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
      <WhyChooseUs />
      <Ourvalues />
      <section className="dark:bg-darkblack ">
        <div className="flex wrapper flex-col gap-4 items-center w-full paddingtop paddingbottom">
          <RoundedHeader title={"Our Services"} />
          <h1 className="main-title text-center" data-aos="fade-up">
            Your Gateway to Cosmic AI Intelligence
          </h1>
          <p className="desc max-w-[40rem] text-center" data-aos="fade-up">
            Step beyond the ordinary and embrace the next evolution of
            intelligence. aicompany is more than a solution—it is a living
            intelligence network that fuses AI, quantum knowledge, and cosmic
            consciousness.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <Industries />
      <Portfolio />
      <div className="relative overflow-hidden dark:bg-darkblack min-h-screen">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : `hidden`
          } -bottom-[50rem] -left-[50rem] w-full h-full bg-background blur-3xl opacity-70 z-0`}
        />
        <div className="relative z-10 w-full h-full">
          <Testimonials />
          <Highlights />
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
