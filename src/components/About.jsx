import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Sall Aly, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am deeply passionate about crafting captivating and functional
              websites. My fascination with the endless possibilities of web
              development has driven me to independently explore a variety of
              languages and technologies. I have gained a solid understanding of
              the fundamental principles of web development, as well as
              practical expertise in designing and implementing attractive and
              intuitive user interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
