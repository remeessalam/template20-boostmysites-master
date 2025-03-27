import React from "react";
import { futureTechSectors } from "../util/constant";

const Industries = () => {
  return (
    <div className="wrapper paddingtop paddingbottom">
      <h2 className="main-title text-center mb-10" data-aos="fade-up">
        Where AI Expertise Meets Industry Excellence
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {futureTechSectors.map((sector) => (
          <div
            data-aos="fade-up"
            key={sector.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl h-64"
          >
            <img
              //   src={`/api/placeholder/400/300`}
              src={sector.img}
              alt={sector.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute inset-0 flex flex-col justify-end p-4 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-1 group-hover:mb-3 transition-all duration-300">
                {sector.title}
              </h3>

              <p className="text-white text-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 overflow-hidden transition-all duration-300">
                {sector.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
