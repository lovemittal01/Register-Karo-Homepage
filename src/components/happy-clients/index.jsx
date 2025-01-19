import React from "react";
import pagination from "../../assets/happy-clients/Pagination.svg";
import arrow from "../../assets/happy-clients/Icon.svg";

const HappyClients = () => {
  return (
    <>
      <div
        className="bg-[#fafafa] flex flex-col items-center justify-center  md:gap-10 py-10 md:py-20  "
        style={{ fontFamily: '"Inter", serif' }}
      >
        <div className="flex flex-col gap-5 justify-center items-center text-center px-4 md:px-8">
          <div className="text-[#272d37] font-bold text-[24px] md:text-[32px]">
            Our Happy Clients
          </div>
          <div className="text-[#666666] text-[14px] md:text-[16px] w-full max-w-[800px]">
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource-leveling customer service for
            state-of-the-art customer service.
          </div>
        </div>

        <div className="w-full flex justify-center">
          <img
            src={pagination}
            className="h-[200px] md:h-[407px] w-auto object-contain"
            alt="Brands"
          />
        </div>

        <div className="flex gap-2 md:gap-3 items-center text-[13px] md:text-[15px]">
          <div className="font-semibold">Show more</div>
          <div>
            <img src={arrow} className="h-[8px] md:h-[10px]" alt="Arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HappyClients;
