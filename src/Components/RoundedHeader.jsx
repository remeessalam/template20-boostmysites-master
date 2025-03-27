import React from "react";

const RoundedHeader = ({ title, bg }) => {
  return (
    <div
      data-aos="fade-up"
      className={`border z-50  w-fit border-slate-500 rounded-full px-4 py-2 ${
        bg
          ? `bg-transparent dark:text-white text-black`
          : `bg-gradient-to-r from-gray-600 to-darkblack text-white`
      }`}
    >
      <h1 className="text-[13px]  font-medium ">{title}</h1>
    </div>
  );
};

export default RoundedHeader;
