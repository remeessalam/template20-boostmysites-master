import React from "react";
import { useTheme } from "../../Context/ThemeContext";

import SearchIcon from "../../assets/images/svg/SearchIcon.svg";

function BlogHeader() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div className="relative wrapper pt-[7rem] bg-white dark:bg-darkblack overflow-hidden">
      <div
        className={`absolute ${
          isDarkMode ? `flex` : "hidden"
        } -top-[18rem] blur-3xl left-0 w-full h-full bg-footerBackground  `}
      />{" "}
      <header className="flex justify-center items-center flex-col text-center py-10 bg-white dark:bg-darkblack dark:text-white">
        <div
          className="bg-white dark:text-black rounded-full py-2 px-6  shadow-md text-lg font-medium"
          data-aos="fade-up"
        >
          Latest Blogs
        </div>
        <div className="my-8">
          <h1 className="text-3xl font-semibold mb-2" data-aos="fade-up">
            Explore Latest Blog Posts
          </h1>
          <p className="text-gray-600 dark:text-white mb-5" data-aos="fade-up">
            Specialising in crafting visually stunning and highly functional
            user interfaces.
          </p>
        </div>
        {/* <div className="relative w-full sm:w-96 ">
          {" "}
          <input
            type="text"
            placeholder="Search article..."
            className="bg-black dark:bg-white text-white rounded-full py-2 pl-10 pr-4 w-full focus:outline-none" // Adjusted padding
          />
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <img
              className="h-5 w-5 text-gray-400"
              src={SearchIcon}
              alt={SearchIcon}
            />
          </div>
        </div> */}
      </header>
    </div>
  );
}

export default BlogHeader;
