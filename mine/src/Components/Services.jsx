import React from "react";

import right_arrow from "../assets/right-arrow.png";
import web from "../assets/web.png";
import mobile from "../assets/moble.png";
React
const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="mb-2 text-lg text-center font-Ovo">What i offer</h4>
      <h2 className="text-5xl text-center font-Ovo">My services</h2>
      <p className="max-w-2xl mx-auto mt-5 mb-12 text-center font-Ovo">
        I am a Frontend Developer | Web developer from Lagos, Nigeria .
      </p>

      <div className="grid justify-center grid-cols-1 gap-6 my-10 md:grid-cols-2">
        <div
          className="px-8 py-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:shadow-black hover:bg-lightHover hover:-translate-y-1 dark:hover:bg-darkHover dark:hover:shadow-white"
        >
          <img src={web} alt="" className="w-10 mx-auto" />
          <h3 className="my-4 text-lg text-center text-gray-700 dark:text-white">
            Web design
          </h3>
          <p className="text-sm leading-5 text-center text-gray-600 dark:text-white/80">
            Web development is the process of building,programming,testing...
          </p>
          <a
            href=""
            className="flex items-center justify-center gap-2 mt-5 text-sm"
          >
            Read more <img src={right_arrow} alt="" className="w-4" />
          </a>
        </div>

        <div
          className="px-8 py-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:shadow-black hover:bg-lightHover hover:-translate-y-1 dark:hover:bg-darkHover dark:hover:shadow-white"
        >
          <img src={mobile} alt="" className="w-10 mx-auto" />
          <h3 className="my-4 text-lg text-center text-gray-700 dark:text-white">
            Mobile app
          </h3>
          <p className="text-sm leading-5 text-center text-gray-600 dark:text-white/80">
            The art of creating visual content to communicate messages through
            typography, imagery, color, and layout...
          </p>
          <a
            href=""
            className="flex items-center justify-center gap-2 mt-5 text-sm"
          >
            Read more <img src={right_arrow} alt="" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;