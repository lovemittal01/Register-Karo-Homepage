import React from "react";
import form from "../../assets/steps/contact-form 1.svg";
import payment from "../../assets/steps/contact-form 1 (1).svg";
import man from "../../assets/steps/Vector (6).svg";
import mail from "../../assets/steps/Vector (7).svg";

const Steps = () => {
  return (
    <>
      <div className="h-fit py-5 md:py-0 gap-5 md:gap-0 md:h-[154px]  flex flex-col md:flex-row justify-center md:justify-between items-center px-5 md:px-20 bg-[#ffa229]">
        <div className="flex items-center justify-center gap-2 md:gap-5">
          <div className="w-[24px] h-[24px] md:w-[52px] md:h-[52px] rounded-full flex items-center justify-center bg-[#eb5757]">
            <img
              src={man}
              className="w-[10px] h-[10px] md:w-[24px] md:h-[24px]"
            />
          </div>
          <div className="font-semibold text-[12px] md:text-[18px] text-[#3c2109]">
            Fill up Application Form
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:gap-5">
          <div className="w-[24px] h-[24px] md:w-[52px] md:h-[52px] rounded-full flex items-center justify-center bg-[#27ae60]">
            <img
              src={form}
              className="w-[10px] h-[10px] md:w-[24px] md:h-[24px]"
            />
          </div>
          <div className="font-semibold text-[12px] md:text-[18px] text-[#3c2109]">
            Make Online Payment
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:gap-5">
          <div className="w-[24px] h-[24px] md:w-[52px] md:h-[52px] rounded-full flex items-center justify-center bg-[#f2994a]">
            <img
              src={payment}
              className="w-[10px] h-[10px] md:w-[24px] md:h-[24px]"
            />
          </div>
          <div className="font-semibold text-[12px] md:text-[18px] text-[#3c2109]">
            Executive will Process Application
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:gap-5">
          <div className="w-[24px] h-[24px] md:w-[52px] md:h-[52px] rounded-full flex items-center justify-center bg-[#828282]">
            <img
              src={mail}
              className="w-[10px] h-[10px] md:w-[24px] md:h-[24px]"
            />
          </div>
          <div className="font-semibold text-[12px] md:text-[18px] text-[#3c2109]">
            Get Confirm Mail
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
