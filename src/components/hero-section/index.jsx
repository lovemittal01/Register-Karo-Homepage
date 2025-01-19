import React from "react";
import image1 from "../../assets/hero/1.svg";
import man from "../../assets/hero/2.svg"; // Not used
import board from "../../assets/hero/3.svg"; // Not used
import rating from "../../assets/hero/4.svg";
import star from "../../assets/hero/5.svg";
import people from "../../assets/hero/6.svg";
import hand from "../../assets/hero/7.svg";
import corner4 from "../../assets/hero/8.svg";
import corner3 from "../../assets/hero/9.svg";
import corner2 from "../../assets/hero/10.svg";
import corner1 from "../../assets/hero/11.svg";
import section1 from "../../assets/hero/Section.svg";

const HeroSection = () => {
  return (
    <>
      <div
        className="h-fit py-10 md:py-0 md:h-[585px] flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-20 "
        style={{
          backgroundImage: `url(${section1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full sm:w-[700px] lg:w-[700px] gap-5 xl:w-[700px] h-auto flex justify-between flex-col">
          <div className="flex justify-between items-center  w-[210.31px] sm:w-[210.31px] mb-4 md:mb-0">
            <div>
              <img src={star} className="w-[20px] h-[20px]" alt="Star" />
            </div>
            <div className="text-[14px] font-semibold text-[#181617]">
              Google Rating
            </div>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={rating}
                  className="w-[14.46px] h-[14.46px]"
                  alt={`Rating Star ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 md:gap-5 w-full sm:w-[700px] h-auto mb-4">
            <div className="text-[#010101] text-[35px] sm:text-[45px] font-medium">
              Your trusted partner
              <br />
              for compliance business needs
            </div>
            <div className="w-[40px]">
              <div className="w-full h-[1px] bg-[#f60014]"></div>
            </div>
            <div className="text-[16px] sm:text-[20px] font-normal text-[#4f4f4f]">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various, <b>registrations</b>,{" "}
              <b>tax filings</b>, and <b>other legal matters</b>.
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full sm:w-[583.31px] gap-4 sm:gap-8">
            <div className="flex gap-4 sm:gap-5 items-center">
              <div>
                <div className="w-fit flex-col">
                  <div className="gap-[4px] w-fit flex">
                    <img src={corner1} alt="Corner 1" />
                    <img src={corner2} alt="Corner 2" />
                  </div>
                  <div className="gap-[4px] mt-1 w-fit flex">
                    <img src={corner3} alt="Corner 3" />
                    <img src={corner4} alt="Corner 4" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-[20px] sm:text-[22px] font-extrabold bg-gradient-to-br from-[#ffa229] to-[#1c4670] text-transparent bg-clip-text leading-none">
                  45+
                </div>
                <div
                  className="text-[12px] sm:text-[14px] font-normal text-[#4f4f4f]"
                  style={{ fontFamily: '"Lato", serif' }}
                >
                  Customer Rating
                </div>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-5 items-center">
              <div>
                <img src={people} className="w-[48px]" alt="People Icon" />
              </div>
              <div className="flex flex-col">
                <div className="text-[20px] sm:text-[22px] font-extrabold bg-gradient-to-br from-[#ffa229] to-[#1c4670] text-transparent bg-clip-text leading-none">
                  2000+
                </div>
                <div
                  className="text-[12px] sm:text-[14px] font-normal text-[#4f4f4f]"
                  style={{ fontFamily: '"Lato", serif' }}
                >
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-5 items-center">
              <div>
                <img src={hand} className="w-[48px]" alt="Hand Icon" />
              </div>
              <div className="flex flex-col">
                <div className="text-[20px] sm:text-[22px] font-extrabold bg-gradient-to-br from-[#ffa229] to-[#1c4670] text-transparent bg-clip-text leading-none">
                  99.8%
                </div>
                <div
                  className="text-[12px] sm:text-[14px] font-normal text-[#4f4f4f]"
                  style={{ fontFamily: '"Lato", serif' }}
                >
                  Financial Stability
                </div>
              </div>
            </div>
          </div>
          <div className="flex  gap-4 sm:gap-5">
            <div className="bg-[#1c4670] w-fit rounded-md gap-2 px-[20px] py-[12px] flex items-center justify-center border border-[#e5e5e7]">
              <div className="font-semibold text-[15px] text-white">
                Talk An Expert
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-full w-6 h-6 bg-[#fb432c]">
                <img src={image1} className="w-6 h-6" alt="How it works" />
              </div>
              <div className="text-[#282828] font-semibold text-[16px]">
                See how it works
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
