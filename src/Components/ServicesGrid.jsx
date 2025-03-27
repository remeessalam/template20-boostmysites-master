import React, { useState } from "react";
import { services } from "../util/constant";
import { Users } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";

const ServicesGrid = () => {
  const [hover, setHover] = useState("");
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(`/services/${link}`);
  };
  return (
    <section>
      <div className=" wrapper paddingtop paddingbottom">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className={`relative aspect-square shadow-2xl ${
                  isDarkMode ? `hovershadowwhite` : `hover:shadow-black`
                } duration-500 transition-all transform hover:-translate-x-8 h-full dark:hover:bg-primary hover:bg-primary group dark:bg-darkblack overflow-hidden rounded-xl border border-slate-700`}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover("")}
                onClick={() => navigateTo(service.link)}
              >
                <div
                  className={`absolute ${
                    hover !== index && isDarkMode ? `sm:flex hidden ` : "hidden"
                  } -top-[16rem] blur-3xl left-0 w-full h-full dark:bg-footerBackground  active:bg-hidden`}
                />
                <div
                  className={`flex flex-col justify-evenly  min-h-full p-5 darkandlightcardhovertext  text-darkblack dark:text-white`}
                >
                  <service.icon className="w-10 h-10 text-primary darkandlightcardhovertext" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="desc darkandlightcardhovertext">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
