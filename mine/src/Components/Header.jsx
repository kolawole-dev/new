import React from "react";
import user_im from "../assets/user-kola1.jpg";
import right_arrow_white from "../assets/right-arrow-white.png";
import download_icon from "../assets/download-icon.png";
import hand_icon from "../assets/hand_icon.png";
React
const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center w-11/12 h-screen max-w-3xl gap-4 mx-auto text-center">
      <img
        src={user_im}
        alt=""
        className="object-cover w-32 h-32 rounded-full"
      />
      <h3 className="flex items-end gap-2 mb-3 font-serif text-xl md:text-2xl">
        Hi! Im Omoyeni Kolawole{" "}
        <img src={hand_icon} alt="hand_icon" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-serif">
        Frontend Developer  based in Lagos.
      </h1>
      <p className="max-w-2xl mx-auto font-serif">
        I am a Frontend developer from Lagos, Nigeria with no work experience , but aiming to have one.
      </p>

      <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          contact me <img src={right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href="../../kolawole_resume.pdf"
          download
          className="flex items-center gap-2 px-10 py-3 bg-white border border-gray-500 rounded-full dark:text-black"
        >
          my resume <img src={download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header

