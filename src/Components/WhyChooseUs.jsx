import React from "react";
import whychooseusimg from "../assets/images/whychooseusimg.png";
import { whyChooseUs } from "../util/constant";
import { Check } from "lucide-react";
const WhyChooseUs = () => {
  return (
    <section>
      <div className="paddingtop paddingbottom wrapper grid md:grid-cols-2 gap-10">
        <div>
          <h1 data-aos="fade-right" className="main-title">
            Why Choose Us
          </h1>
          <ul className="mt-4">
            {whyChooseUs.map((item, index) => {
              const [title, description] = item.split(": ");
              return (
                <li
                  key={index}
                  data-aos="fade-right"
                  className="flex items-start gap-2 mb-4"
                >
                  <Check className="text-primary " />
                  <span className="desc">
                    <strong className="!font-semibold">{title}:</strong>{" "}
                    {description}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <img
          src={whychooseusimg}
          data-aos="fade-left"
          alt="whychooseusimg"
          className="rounded-xl"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
