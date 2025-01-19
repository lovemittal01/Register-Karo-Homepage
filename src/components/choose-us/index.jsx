import React from "react";
import symbol1 from "../../assets/choose-us/Symbol.svg";
import symbol2 from "../../assets/choose-us/Symbol (1).svg";
import symbol3 from "../../assets/choose-us/Symbol (2).svg";
import symbol4 from "../../assets/choose-us/Symbol (3).svg";

const ChooseUs = () => {
  return (
    <>
      <div className="h-fit py-14  md:h-[583px]  flex flex-col  px-5 gap-5 md:gap-0 md:px-20 items-center md:items-end justify-between ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0 w-full ">
          <div className=" w-fit md:w-[644px] h-fit gap-4 md:gap-0 md:h-[150px] flex flex-col justify-between">
            <div className="text-[#eb8d15] text-[10px] md:text-[14px] font-normal">
              WHY REGISTERKARO.IN
            </div>
            <div className="text-[#272d37] text-[24px] md:text-[32px] font-bold">
              Why Choose Register Karo
            </div>
            <div className="text-[12px] md:text-[16px] font-normal text-[#0d1216]">
              It is with consistent services and results that build trust with
              the people and that in turn help us to serve the business better.
            </div>
          </div>
          <div className=" gap-5 md:gap-10 flex flex-col md:flex-row">
            <div className="w-[288.11px] h-[215px] bg-[#fef3ef] rounded-[10px] border border-[#fcddec] flex items-center flex-col justify-center gap-4">
              <div>
                <img src={symbol4} className="h-10" />
              </div>
              <div className="flex flex-col gap-1 items-center justify-center px-4">
                <div className="font-medium text-[20px] text-black">
                  Confidential & Safe
                </div>
                <div className="font-normal text-[14px] text-[#666666] text-center">
                  All your private information is safe with us
                </div>
              </div>
            </div>
            <div className="w-[288.11px] h-[215px] bg-[#f1fbf3] rounded-[10px] border border-[#fcddec] flex items-center flex-col justify-center gap-4">
              <div>
                <img src={symbol3} className="h-10" />
              </div>
              <div className="flex flex-col gap-1 items-center justify-center px-4">
                <div className="font-medium text-[20px] text-black">
                  No Hidden Fee
                </div>
                <div className="font-normal text-[14px] text-[#666666] text-center">
                  Everything is put before you with no hidden charges or
                  conditions
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row gap-5 md:gap-10 justify-end ">
          <div className="w-[288.11px] h-[215px] bg-[#edf3ff] rounded-[10px] border border-[#fcddec] flex items-center flex-col justify-center gap-4">
            <div>
              <img src={symbol2} className="h-10" />
            </div>
            <div className="flex flex-col gap-1 items-center justify-center px-4">
              <div className="font-medium text-[20px] text-black">
                Guaranteed Satisfaction
              </div>
              <div className="font-normal text-[14px] text-[#666666] text-center">
                We ensure that you stay 100% satisfied with our offered services
              </div>
            </div>
          </div>
          <div className="w-[288.11px] h-[215px] bg-[#fbf1fb] rounded-[10px] border border-[#fcddec] flex items-center flex-col justify-center gap-4">
            <div>
              <img src={symbol1} className="h-10" />
            </div>
            <div className="flex flex-col gap-1 items-center justify-center px-4">
              <div className="font-medium text-[20px] text-black">
                Expert CA/CS Assistance
              </div>
              <div className="font-normal text-[14px] text-[#666666] text-center">
                Prompt support from our in-house expert professionals
              </div>
            </div>
          </div>
          <div className="w-[288.11px] h-[215px] bg-[#f7fcf9] rounded-[10px] border border-[#fcddec] flex items-center flex-col justify-center gap-4">
            <div>
              <img src={symbol4} className="h-10" />
            </div>
            <div className="flex flex-col gap-1 items-center justify-center px-4">
              <div className="font-medium text-[20px] text-black">
                Confidential & Safe
              </div>
              <div className="font-normal text-[14px] text-[#666666] text-center">
                All your private information is safe with us
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
