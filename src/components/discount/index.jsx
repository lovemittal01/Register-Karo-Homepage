import React from "react";
import mail from "../../assets/discount/Symbol.svg";
import phone from "../../assets/discount/Symbol (1).svg";
import insta from "../../assets/discount/Insta.svg";
import fb from "../../assets/discount/Vector.svg";
import twitter from "../../assets/discount/Vector (1).svg";
import pinterest from "../../assets/discount/Vector (2).svg";

const Discount = () => {
  return (
    <>
      <div
        className="bg-[#1c4670] h-11 text-white flex items-center px-5 gap-2 md:px-20 md:gap-6 justify-center md:justify-end"
        style={{ fontFamily: '"Inter", serif' }}
      >
        <div className="flex items-baseline gap-3 md:gap-3 justify-center ">
          <img src={mail} className="w-3 md:w-4" />
          <div className="h-[8px] md:h-[18px] text-[14px] ">
            www.registerkaro.in
          </div>
        </div>
        <div class="w-[2px] h-[18px] bg-gradient-to-b from-transparent via-white to-transparent"></div>

        <div className="flex items-baseline gap-3 justify-center">
          <img src={phone} className=" w-3 md:w-4 " />
          <div className="h-[8px] md:h-[18px] text-[14px]">+918447746183</div>
        </div>
        <div class="w-[2px] h-[18px] bg-gradient-to-b hidden md:visible from-transparent via-white to-transparent"></div>
        <div className="hidden md:flex items-baseline gap-3 justify-center">
          <img src={insta} className="w-1 md:w-4 " />
          <img src={fb} className=" w-1 md:w-4 " />
          <img src={twitter} className="w-1 md:w-4 " />
          <img src={pinterest} className=" w-1 md:w-4 " />
        </div>
      </div>
    </>
  );
};

export default Discount;
