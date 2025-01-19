import React from "react";
import photo from "../../assets/about/shape-01-1.png.svg";
import icon1 from "../../assets/about/Group 1261153018.svg";
import element from "../../assets/about/Symbol.svg";
import element2 from "../../assets/about/Vector.svg";

const About = () => {
  return (
    <>
      <div className="h-fit py-10 md:py-0 md:h-[558px] bg-white flex flex-col md:flex-row px-5 md:px-20 items-center justify-between relative">
        <div className="w-fit md:w-[644px] h-fit gap-4 md:gap-0 md:h-[442px] flex flex-col justify-between">
          <div className="text-[#eb8d15] text-[8px] md:text-[14px] font-normal">
            WELCOME TO REGISTERKARO.IN
          </div>
          <div className="text-[#272d37] text-[16px] md:text-[32px] font-bold">
            About <span className="text-[#ffa229]">Register Karo</span>
          </div>
          <div className="text-[8px] md:text-[16px] font-normal text-[#0d1216]">
            We have been using Intelegencia as our DevOps vendor for our field
            service applications over the last couple of years and I’m extremely
            pleased with their performance, ability to execute, and willingness
            to adapt in our ever changing environment. Perry is an outstanding
            leader who is fanatical about customer satisfaction. He has built a
            solid team which has consistently delivered on projects thereby
            exceeding everyone’s expectations.
          </div>
          <div className="text-[8px] md:text-[16px] font-normal text-[#0d1216]">
            I would strongly recommend their services to any organization that
            is looking for solid, reliable, and predictable outcomes.
          </div>
          <div className="bg-[#1c4670] w-fit rounded-md gap-3 px-[20px] py-[12px] flex items-center justify-center border border-[#e5e5e7]">
            <div className="font-medium text-[15px] text-white">Learn More</div>
            <div>
              <img src={element} />
            </div>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[442px]">
          {/* Icon */}
          <img src={icon1} className="h-full relative z-10" />
          {/* Background Elements */}
          <img
            src={photo}
            className="absolute top-60 md:top-80 right-[-20px] md:right-[-70px] w-[70px] md:w-[120px] z-0"
          />
          <img
            src={element2}
            className="absolute bottom-[-10px] md:bottom-[-50px] right-[-20px] md:right-[-80px] w-[30px] md:w-[50px] z-0"
          />
        </div>
      </div>
    </>
  );
};

export default About;
