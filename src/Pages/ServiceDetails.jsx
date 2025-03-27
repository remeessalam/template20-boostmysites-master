import React, { useEffect, useState } from "react";
import { serviceDetails } from "../util/services";
import { Circle } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import { useParams, Link } from "react-router-dom";
import { LoadingSpinner } from "../Components/Loader";

const Loading = () => (
  <div className="text-center py-20 text-xl">Loading...</div>
);

const ServiceDetails = () => {
  const { title } = useParams();
  const [serviceDetail, setServiceDetail] = useState(null);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  useEffect(() => {
    const detail = serviceDetails.find((service) => service.link === title);
    setServiceDetail(detail);
  }, [title]);

  if (!serviceDetail) {
    return <LoadingSpinner />;
  }

  return (
    <div className="dark:bg-darkblack">
      <div className="pt-[4.5rem]">
        <section
          className="flex relative justify-start bg-darkblack p-10 items-end h-[15rem] sm:h-[30rem] bg-current bg-cover sm:bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${serviceDetail.bannerimg})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
          <h1 className="text-[34px] z-20 sm:text-[48px] font-bold text-white">
            {serviceDetail.title}
          </h1>
        </section>
      </div>
      <div className="relative overflow-hidden">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : "hidden"
          } top-[41rem] blur-3xl -left-[47rem] w-full h-full bg-footerBackground`}
        />
        <section className="wrapper">
          <div className="relative z-10">
            {/* SECTION ONE */}
            <section className="paddingtop paddingbottom">
              <div>
                <h1 className="section-heading dark:text-white text-darkblack">
                  {serviceDetail.heading}
                </h1>
                <p className="desc mt-5">{serviceDetail.description}</p>
              </div>
            </section>

            {/* SECTION TWO */}
            <section className="grid md:grid-cols-2 paddingbottom gap-8">
              <div>
                <h2 className="text-[22px] font-bold dark:text-white text-darkblack">
                  {serviceDetail.secondHeading}
                </h2>
                <p className="desc !text-primary my-5">
                  {serviceDetail.secondHeading_subheading}
                </p>
                <ul className="flex flex-col gap-5">
                  {serviceDetail.services.map((obj) => (
                    <li key={obj.title} className="desc list-disc flex">
                      <Circle className="fill-primary text-primary mr-1" />
                      <span>
                        <strong>{obj.title}: </strong> {obj.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img
                  src={serviceDetail.imageone}
                  alt="image-one"
                  className="rounded-xl max-h-[30rem] w-full object-cover"
                />
              </div>
            </section>

            {/* SECTION THREE */}
            <section>
              <h2 className="text-[22px] font-bold dark:text-white text:darkbackground">
                {serviceDetail.thirdHeading}
              </h2>
              <p className="desc my-6">{serviceDetail.thirdDescription}</p>
              <p className="desc">
                <strong>{serviceDetail.whyMatter.split(":")[0]}:</strong>
                {serviceDetail.whyMatter.split(":")[1]}
              </p>
              <div className="flex justify-center my-6">
                <Link to={"/contact-us"} className="primary-btn w-fit">
                  Join Us Today
                </Link>
              </div>
            </section>

            {/* SECTION FOUR */}
            <section className="paddingbottom">
              <hr className="border border-primary" />
              <div className="grid md:grid-cols-2 gap-10 mt-6">
                <img
                  src={serviceDetail.imgagetwo}
                  alt="image-two"
                  className="rounded-xl"
                />
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-[22px] font-bold dark:text-white text:darkbackground">
                      {serviceDetail.fourthHeading}
                    </h3>
                    <p className="desc mt-6">
                      {serviceDetail.fourthDescripiton}
                    </p>
                  </div>
                  <Link to={"/contact-us"} className="primary-btn w-fit mt-3">
                    Join Us Today
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetails;
