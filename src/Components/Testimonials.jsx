import React from "react";
import RoundedHeader from "./RoundedHeader";
import { testimonials } from "../util/constant";
import StarRating from "./StarRating";

const Testimonials = () => {
  return (
    <section className="">
      <div className="paddingtop paddingbottom wrapper flex flex-col items-center gap-5">
        <RoundedHeader title={"Testimonial"} />
        <h1 className="main-title text-center leading-tight" data-aos="fade-up">
          Professionals use to <br />
          10x their Productivity
        </h1>
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className={`bg-white/10 hovershadow border-primary border rounded-lg p-6 flex flex-col justify-between
                     ${index === 0 && "md:col-span-1"}  ${
                  index === 1 && "md:col-span-2"
                }`}
              >
                <p className="desc !font-medium mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="desc !font-medium mb-2">
                    — {testimonial.author}
                  </p>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
