import React from "react";
import tick from "../../assets/email/Align to Text.svg";

const ImportantNumbers = () => {
  return (
    <>
      <div
        className="h-[300px] sm:h-[334px] bg-[#fafafa] flex flex-col gap-8 md:gap-16 items-center justify-center text-white text-center px-4 md:px-8"
        style={{
          fontFamily: '"Inter", serif',
        }}
      >
        <div className="flex flex-col">
          <div className="font-normal text-[#eb8d15]  text-[12px] md:text-[14px]">
            WHY REGISTER KARO
          </div>
          <div className="font-bold text-[#3c2109] text-[20px] md:text-[32px]">
            Some Numbers are important
          </div>
        </div>
        <div className="">
          <div className="flex flex-wrap gap-4 md:gap-24 justify-center">
            {[
              { number: "1M", label: "CUSTOMERS" },
              { number: "12", label: "YEARS OF EXCELLENCE" },
              { number: "41", label: "R&D ENGINEERS" },
              { number: "71", label: "COUNTRIES" },
              { number: "3287", label: "PARTNERS" },
              { number: "41", label: "AWARDS RECEIVED" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1 md:gap-1 min-w-[100px]"
              >
                <div className="flex h-fit items-start justify-center">
                  <div className="font-extrabold flex text-[24px] md:text-[46px] bg-gradient-to-br from-[#ffa229] to-[#1c4670] text-transparent bg-clip-text leading-none">
                    {item.number}
                  </div>
                  <div className="font-extrabold text-[16px] md:text-[20px] bg-gradient-to-br from-[#ffa229] to-[#1c4670] text-transparent bg-clip-text leading-none">
                    +
                  </div>
                </div>
                <div className="text-[#181617] text-[10px] md:text-[16px] font-bold">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportantNumbers;
