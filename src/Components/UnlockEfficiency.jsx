import React from "react";
import RoundedHeader from "./RoundedHeader";
import { useNavigate } from "react-router-dom";

const UnlockEfficiency = () => {
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };
  return (
    <section>
      <div className="wrapper w-full flex flex-col gap-10 items-center paddingtop paddingbottom">
        <RoundedHeader title="Unlock Efficiency" />
        <h1 className="main-title w-fit">
          Drive Innovation with Our AI Services
        </h1>
        <p className="desc text-center">
          Drive innovation with our AI-powered solutions, transforming business
          operations through automation, data intelligence, and machine
          learning. Enhance efficiency, streamline workflows, and deliver
          smarter customer experiences with next-gen AI technology.
        </p>
        <button
          onClick={() => navigateTo("/contact-us")}
          className="primary-btn w-fit"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
