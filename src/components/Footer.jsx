import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = ({ nav }) => {
  return (
    <footer id="footer" className="bg-[#0a192f] text-white">
      <div className="text-center pt-2 text-gray-400 text-sm pb-8">
        <span className="col-span-2 sm:col-span-2 text-xl mt-5 underline">
          Coded by Sall aly.{" "}
        </span>
        <div className="flex justify-center space-x-4 sm:space-x-8">
          <SocialIcon
            url="https://twitter.com/puulohh"
            fgColor="white"
            bgColor="transparent"
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full p-2 bg-gray-700 hover:bg-[#4f5ad1] duration-300 ${
              nav ? "hidden" : "block"
            }`}
          />
          <SocialIcon
            url="https://github.com/Aly-Sall"
            fgColor="white"
            bgColor="transparent"
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full p-2 bg-gray-700 hover:bg-black duration-300 ${
              nav ? "hidden" : "block"
            }`}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/aly-sall-658332283/"
            fgColor="white"
            bgColor="transparent"
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full p-2 bg-gray-700 hover:bg-[#4f5ad1] duration-300 ${
              nav ? "hidden" : "block"
            }`}
          />
          <a href="mailto:votre@email.com" className="flex items-center">
            <SocialIcon
              url="mailto:votre@email.com"
              fgColor="white"
              bgColor="transparent"
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full p-2 bg-gray-700 hover:bg-[#4f5ad1] duration-300 ${
                nav ? "hidden" : "block"
              }`}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
