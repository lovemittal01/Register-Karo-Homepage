import React from "react";
import arrow2 from "../../assets/blogs/Icon (1).svg";
import arrow from "../../assets/faq/Vector.svg";

const Faq = () => {
  return (
    <div
      className="h-auto py-8 md:py-16 bg-white flex flex-col gap-12 items-center justify-center px-4 sm:px-8 lg:px-16"
      style={{ fontFamily: '"Inter", serif' }}
    >
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <div className="text-[#eb8d15] text-[14px] font-normal">FAQ</div>
        <div className="text-[#3c2109] text-[24px] md:text-[32px] font-bold">
          Frequent Ask Questions
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 px-4 md:px-8 lg:px-16">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="w-full bg-white flex items-center px-4 py-2 md:py-4 rounded-md shadow-md"
              style={{
                borderLeft: "8px solid transparent",
                borderImage: "linear-gradient(to bottom, #ffa229, #1c4670) 1",
              }}
            >
              <span className="flex-grow font-medium text-[#0d1216] text-[14px] md:text-[16px]">
                Can I recover deleted files from desktop with this software?
              </span>
              <img src={arrow} alt="Arrow" className="w-[8px] md:w-[10px]" />
            </div>
          ))}
      </div>
      <div className="bg-[#1c4670] w-fit rounded-md gap-2 px-[16px] md:px-[20px] py-[10px] md:py-[12px] flex items-center justify-center border border-[#e5e5e7]">
        <div className="font-semibold text-[13px] md:text-[15px] text-white">
          Show more blogs
        </div>
        <img src={arrow2} className="h-[8px] md:h-[10px]" alt="Arrow" />
      </div>
    </div>
  );
};

export default Faq;
