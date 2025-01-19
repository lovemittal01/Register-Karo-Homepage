import React from "react";
import logos from "../../assets/trusted/Logos.svg";

const Trusted = () => {
  return (
    <>
      <div
        className="bg-white flex flex-col items-center justify-center gap-4 md:gap-10 px-4 py-8 md:py-16 md:px-6"
        style={{ fontFamily: '"Inter", serif' }}
      >
        <div className="text-[#272d37] font-bold text-[18px] md:text-[22px] text-center">
          Trusted By Over 100+ Startups and freelance business
        </div>
        <div>
          <img
            src={logos}
            className="h-[24px] md:h-[28.33px]"
            alt="Trusted Logos"
          />
        </div>
      </div>
    </>
  );
};

export default Trusted;
