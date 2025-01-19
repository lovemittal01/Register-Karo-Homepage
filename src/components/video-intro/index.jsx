import React from "react";
import image from "../../assets/video-intro/Group 1261153023.svg";
import icon1 from "../../assets/video-intro/Display Icon (1).svg";
import icon2 from "../../assets/video-intro/Display Icon.svg";

const VideoIntro = () => {
  return (
    <>
      <div
        className="bg-[#1c4670] px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row justify-between items-center h-auto py-10 lg:py-0 lg:h-[531px]"
        style={{ fontFamily: '"Inter", serif' }}
      >
        {/* Text Section */}
        <div className="flex flex-col w-full lg:w-[540px] h-auto lg:h-[360px] justify-between space-y-6 lg:space-y-0 mb-8 lg:mb-0">
          <div
            className="text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold text-white"
            style={{ fontFamily: '"Inter", serif' }}
          >
            Our Video Introductions
          </div>
          <div
            className="text-[14px] sm:text-[16px] font-normal text-[#aab5cd]"
            style={{ fontFamily: '"Inter", serif' }}
          >
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </div>
          <div className="flex h-auto gap-3 items-start">
            <img
              src={icon1}
              className="w-[48px] sm:w-[56px] h-[48px] sm:h-[56px]"
              alt="Explore ideas"
            />
            <div className="flex flex-col justify-between">
              <div className="text-[18px] sm:text-[20px] lg:text-[22px] font-extrabold text-white">
                Explore ideas together
              </div>
              <div className="text-[14px] sm:text-[16px] font-normal text-[#aab5cd]">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </div>
            </div>
          </div>
          <div className="flex h-auto gap-3 items-start">
            <img
              src={icon2}
              className="w-[48px] sm:w-[56px] h-[48px] sm:h-[56px]"
              alt="Bring ideas to life"
            />
            <div className="flex flex-col justify-between">
              <div className="text-[18px] sm:text-[20px] lg:text-[22px] font-extrabold text-white">
                Bring those ideas to life
              </div>
              <div className="text-[14px] sm:text-[16px] font-normal text-[#aab5cd]">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={image}
            className="w-full sm:w-[480px] md:w-[560px] lg:w-[640px] h-auto rounded-lg"
            alt="Video Introduction"
          />
        </div>
      </div>
    </>
  );
};

export default VideoIntro;
