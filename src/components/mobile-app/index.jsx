import React from "react";
import image4 from "../../assets/mobile-app/image.png";
import image5 from "../../assets/mobile-app/apple.png";
import image6 from "../../assets/mobile-app/play.png";

const MobileApp = () => {
  return (
    <>
      <div
        className="h-fit pt-5 md:pt-0 md:h-[491px] bg-[#1c4670] gap-10 md:gap-0 px-5 md:px-20 flex flex-col md:flex-row justify-between"
        style={{ fontFamily: '"Inter", serif' }}
      >
        <div className="flex flex-col w-fit md:w-[540px] mt-12">
          <div className="text-[32px] font-extrabold text-white">
            Manage Your Services by your Mobile Phone
          </div>
          <div className="text-[16px] font-normal my-8 text-[#aab5cd]">
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress.
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-[16px] font-medium text-white">
              Get the App
            </div>
            <div className="flex gap-4">
              <img src={image5} className="w-[100px] md:w-[165px] " />
              <img src={image6} className="w-[100px] md:w-[165px]" />
            </div>
          </div>
        </div>
        <div className="relative h-full overflow-hidden flex items-center pt-4">
          <img src={image4} className="object-contain h-full" />
        </div>
      </div>
    </>
  );
};

export default MobileApp;
