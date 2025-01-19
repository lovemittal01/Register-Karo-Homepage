import React from "react";
import icon1 from "../../assets/services/vector.svg fill.svg";
import icon2 from "../../assets/services/vector-1.svg.svg";
import icon3 from "../../assets/services/vector-2.svg fill.svg";
import icon4 from "../../assets/services/vector-3.svg.svg";
import icon5 from "../../assets/services/vector-4.svg.svg";
import icon7 from "../../assets/services/vector-5.svg.svg";
import arrow from "../../assets/services/Symbol.svg";

const Services = () => {
  return (
    <>
      <div
        className="h-auto py-8 md:py-16 bg-[#fafafa] flex flex-col gap-12 items-center justify-center px-4 sm:px-8 lg:px-16"
        style={{ fontFamily: '"Inter", serif' }}
      >
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <div className="text-[#eb8d15] text-[14px] font-normal">
            WELCOME TO REGISTERKARO.IN
          </div>
          <div className="text-[#3c2109] text-[32px] font-bold">
            Explore Our Services
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[32px]">
          <div className="w-[333.33px] md:w-[433.33px] h-[317.95px]  py-7  flex flex-col justify-between items-center">
            <div>
              <img src={icon1} className="w-[60px]" />
            </div>
            <div className="font-extrabold t-[20px]">Company Formation</div>
            <div className="w-[263.19px] text-center text-[17.6px] font-light text-[#282728]">
              Build web-based solutions that enhance customer experience.
            </div>
            <div className="flex items-center gap-2">
              <div className="text-[16px] font-semibold text-[#001038]">
                Learn more
              </div>{" "}
              <div>
                <img src={arrow} />
              </div>
            </div>
          </div>
          <div className="w-[333.33px] md:w-[433.33px] h-[317.95px] border-y border-[#e5e2df] sm:border-0 lg:border-x lg:border-[#e5e2df] p-7  flex flex-col justify-between items-center">
            <div>
              <img src={icon2} className="w-[60px]" />
            </div>
            <div className="font-extrabold t-[20px]">
              Company Secretarial Services
            </div>
            <div className="w-[263.19px] text-center text-[17.6px] font-light text-[#282728]">
              Make data-driven decisions and utilize technology to reach
              business goals.
            </div>
            <div className="flex items-center gap-2">
              <div className="text-[16px] font-semibold text-[#001038]">
                Learn more
              </div>{" "}
              <div>
                <img src={arrow} />
              </div>
            </div>
          </div>
          <div className="w-[333.33px] md:w-[433.33px] h-[317.95px] p-7  flex flex-col justify-between items-center">
            <div>
              <img src={icon3} className="w-[60px]" />
            </div>
            <div className="font-extrabold t-[20px]">
              Virtual Office Address
            </div>
            <div className="w-[263.19px] text-center text-[17.6px] font-light text-[#282728]">
              Foster customer relationships by effectively serving your market.
            </div>
            <div className="flex items-center gap-2">
              <div className="text-[16px] font-semibold text-[#001038]">
                Learn more
              </div>{" "}
              <div>
                <img src={arrow} />
              </div>
            </div>
          </div>
          <div className="w-[333.33px] md:w-[433.33px] h-[317.95px] p-7 border-y border-[#e5e2df] sm:border-0  flex flex-col justify-between items-center">
            <div>
              <img src={icon4} className="w-[60px]" />
            </div>
            <div className="font-extrabold t-[20px]">
              Annual Compliance Services
            </div>
            <div className="w-[263.19px] text-center text-[17.6px] font-light text-[#282728]">
              Turn your ideas into modern products with our design experts.
            </div>
            <div className="flex items-center gap-2">
              <div className="text-[16px] font-semibold text-[#001038]">
                Learn more
              </div>{" "}
              <div>
                <img src={arrow} />
              </div>
            </div>
          </div>
          <div className="w-[333.33px] md:w-[433.33px] h-[317.95px] lg:border-x lg:border-[#e5e2df] p-7  flex flex-col justify-between items-center">
            <div>
              <img src={icon5} className="w-[60px]" />
            </div>
            <div className="font-extrabold t-[20px]">Payroll Services</div>
            <div className="w-[263.19px] text-center text-[17.6px] font-light text-[#282728]">
              Expand your business across the globe with minimal effort.
            </div>
            <div className="flex items-center gap-2">
              <div className="text-[16px] font-semibold text-[#001038]">
                Learn more
              </div>{" "}
              <div>
                <img src={arrow} />
              </div>
            </div>
          </div>
          <div className="w-[333.33px] md:w-[433.33px] h-[317.95px] p-7 border-t border-[#e5e2df] sm:border-0  flex flex-col justify-between items-center">
            <div>
              <img src={icon1} className="w-[60px]" />
            </div>
            <div className="font-extrabold t-[20px]">Bookkeeping Services</div>
            <div className="w-[263.19px] text-center text-[17.6px] font-light text-[#282728]">
              Steering user behaviours with creative design, data insights &
              technology.
            </div>
            <div className="flex items-center gap-2">
              <div className="text-[16px] font-semibold text-[#001038]">
                Learn more
              </div>{" "}
              <div>
                <img src={arrow} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1c4670] w-fit rounded-md gap-2 px-[20px] py-[12px] flex items-center justify-center border border-[#e5e5e7]">
          <div className="font-semibold text-[15px] text-white">
            See All Services
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
