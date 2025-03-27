import React from "react";
// import aiImage from "../../assets/images/Product_Engineering.png";

function ViewBlogHeader({ image, title, readTime, date }) {
  console.log(image, "imageUrl");

  return (
    <header className=" z-10" data-aos="fade-up">
      <h1 className="text-3xl dark:text-white font-bold mb-2">{title}</h1>
      <div className="flex items-center text-sm text-gray-400 dark:text-white gap-5 py-8">
        <span>{date}</span>
        <span>|</span>
        <span>{readTime}</span>
      </div>
      <div className="relative flex justify-center items-center">
        <img
          src={image}
          alt="AI & Data"
          className="w-full max-h-[480px] md:h-[480px] rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default ViewBlogHeader;
