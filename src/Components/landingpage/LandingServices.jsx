import React from "react";
import {
  appDevelopmentServices,
  webDevelopmentServices,
} from "../../util/constant";
import RoundedHeader from "../RoundedHeader";

const LandingServices = ({ page }) => {
  const services =
    page === "web-development"
      ? webDevelopmentServices
      : appDevelopmentServices;
  return (
    <div id="services" className="flex justify-center relative">
      <div className="wrapper py-10 flex flex-col items-center gap-5 z-10 text-primarytextcolor">
        <RoundedHeader
          title={`Our ${
            page === "web-development" ? "Web" : "App"
          } Development Services`}
        />

        <h1 data-aos="fade-up" className="main-title max-w-2xl text-center">
          {page === "web-development" &&
            "High-Quality AI-Enhanced Web Development to Transform Your Online Identity"}
          {page === "app-development" &&
            "Cutting-Edge AI-Powered App Development Services for Intelligent Mobile Solutions"}
        </h1>
        <p data-aos="fade-up" className="text-center max-w-2xl desc">
          {page === "web-development" &&
            "High-performance web development services designed to create secure, scalable, and user-friendly websites that enhance your business's digital presence."}
          {page === "app-development" &&
            "High-performance app development services designed to deliver secure, scalable, and user-friendly applications that elevate your business's digital reach and engage your audience."}
        </p>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 py-[2rem] mx-auto max-w-6xl"
        >
          {services.map((item) => (
            <div
              key={item.id}
              className="shadow-2xl transition-all   hover:-translate-y-1 duration-300 rounded-lg"
            >
              <div className="   group rounded-lg bg-backgro-gradient  hover:scale-105 dark:hover:shadow-primary hover:shadow-black shadow-lg p-[1px] transition-all h-full duration-500 overflow-hidden">
                <div className="rounded-lg bg-white dark:bg-white/20 hover:bg-custom-gradient p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {<item.img />}
                      </div>
                    </div>
                    <h5 className="font-semibold text-2xl font-raleway transition-colors duration-300 text-primary">
                      {item.title}
                    </h5>
                    <p className="desc text-primarytextcolor">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingServices;
