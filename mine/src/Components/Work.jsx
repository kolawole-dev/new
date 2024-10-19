import React from "react";
import send_icon from "../assets/send-icon.png";
import right_arrow_blod from "../assets/right-arrow-bold.png";
import right_arrow_blod_dark from "../assets/right-arrow-bold-dark.png";
React
const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="mb-2 text-lg text-center font-Ovo">My portfolio</h4>
      <h2 className="text-5xl text-center font-Ovo">My latest work</h2>
      <p className="max-w-2xl mx-auto mt-5 mb-12 text-center font-Ovo">
        Welcome to my portfolio! Explore a collection of projects showcasing my expertise in frontend development.
      </p>

      <div className="grid gap-5 my-10 grid-cols-auto dark:text-black">
        <div className="aspect-square bg-[url('./assets/grace.jpeg')] bg-no-repeat bg-center bg-cover p-10 rounded-lg relative cursor-pointer group">
          <div className="absolute flex items-center justify-between w-10/12 px-5 py-3 duration-500 -translate-x-1/2 bg-white rounded-md bottom-5 left-1/2 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Frontend project</h2>
              <p className="text-sm text-gray-700">Web Design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src={send_icon} alt="" className="w-5" />
            </div>
          </div>
        </div>
        <div className="aspect-square bg-[url('./assets/kolg.webp')] bg-no-repeat bg-center bg-cover p-10 rounded-lg relative cursor-pointer group">
          <div className="absolute flex items-center justify-between w-10/12 px-5 py-3 duration-500 -translate-x-1/2 bg-white rounded-md bottom-5 left-1/2 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Geo based app </h2>
              <p className="text-sm text-gray-700">Mobile app</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src={send_icon} alt="" className="w-5" />
            </div>
          </div>
        </div>
      </div>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500
    dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more
        <img src={right_arrow_blod} alt="" className="w-4 dark:hidden" />
        <img
          src={right_arrow_blod_dark}
          alt=""
          className="hidden w-4 dark:block"
        />
      </a>

    </div>
  );
};

export default Work;