import React, { useState } from "react";
import quotes from "../../assets/testimonials/“.svg";
import star from "../../assets/testimonials/Star.svg";
import dp from "../../assets/testimonials/div.lazyloaded.svg";
import arrowright from "../../assets/testimonials/Arrow---Right-2.svg";
import arrowleft from "../../assets/testimonials/Arrow - Right 3.svg";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      name: "Chris",
      role: "President and CEO, PrintReach, USA",
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.",
      name: "Alex",
      role: "CTO, TechFirm, Canada",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Jamie",
      role: "Designer, ArtStudio, UK",
    },
    {
      text: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
      name: "Morgan",
      role: "Developer, CodeBase, Australia",
    },
  ];

  const visibleSlides = 2.5; // Number of slides visible at a time
  const slideWidth = 100 / testimonials.length; // Calculate slide width percentage
  const maxSlideIndex = testimonials.length - Math.ceil(visibleSlides);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlideIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === maxSlideIndex ? 0 : prev + 1));
  };

  return (
    <div
      className="bg-[#1c4670] h-auto px-6 md:px-20 py-10 flex flex-col justify-between"
      style={{ fontFamily: '"Inter", serif' }}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="text-[16px] md:text-[32px] text-white font-bold">
          What peoples says about us
        </div>
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="bg-white border rounded-full border-[#fcddec] w-[36px] h-[36px] md:w-[42.86px] md:h-[42.86px] flex items-center justify-center"
          >
            <img src={arrowleft} alt="Previous" />
          </button>
          <button
            onClick={handleNext}
            className="bg-[#ffa229] border rounded-full border-[#fcddec] w-[36px] h-[36px] md:w-[42.86px] md:h-[42.86px] flex items-center justify-center"
          >
            <img src={arrowright} alt="Next" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden w-full relative mt-6">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
            width: `${(testimonials.length / visibleSlides) * 100}%`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="px-3 md:px-5"
              style={{
                flex: `0 0 ${slideWidth}%`, // Set width based on slide width
              }}
            >
              <div className="w-[320px] md:w-[520px] h-[280px] md:h-[318px] px-[15px] md:px-[20px] py-[20px] md:py-[25px] flex flex-col justify-between bg-white border border-[#fcddec] rounded-[10px] mx-auto">
                <div className="flex justify-between">
                  <img src={quotes} alt="Quote" />
                  <img src={star} alt="Star" />
                </div>
                <div className="text-[14px] md:text-[16px] font-normal text-[#667085]">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-4 md:gap-5">
                  <img
                    src={dp}
                    className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
                    alt="DP"
                  />
                  <div className="flex flex-col">
                    <div className="text-[14px] md:text-[16px] font-bold text-[#3c2109]">
                      {testimonial.name}
                    </div>
                    <div className="text-[11px] md:text-[12.8px] font-normal text-[#282728]">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-[10px] h-[10px] rounded-full ${
              currentSlide === index ? "bg-[#ffa229]" : "bg-[#fcddec]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
