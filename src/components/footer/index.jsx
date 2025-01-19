import React from "react";
import fb from "../../assets/footer/Vector (5).svg";
import google from "../../assets/footer/Social platforms logos.svg";
import insta from "../../assets/footer/Logo.svg";
import apple from "../../assets/footer/Logo (1).svg";
import bottom from "../../assets/footer/Icon placeholder.svg";

const Footer = () => {
  return (
    <>
      <div
        className="bg-[#011b5b] text-[#aab5cd] py-16"
        style={{ fontFamily: '"Inter", serif' }}
      >
        <div className=" px-5 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <p className="mb-4 font-medium text-[16px] lg:w-[200px]">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="flex space-x-4">
              <img src={fb} alt="Facebook" className="w-6" />
              <img src={google} alt="Google" className="w-6" />
              <img src={insta} alt="Instagram" className="w-6" />
              <img src={apple} alt="Apple" className="w-6" />
            </div>
          </div>

          <div>
            <h3 className="text-[16px] font-bold mb-4 text-[#ffa229]">
              START A
            </h3>
            <ul className="space-y-2 font-medium text-[16px]">
              <li>Features</li>
              <li>Solutions</li>
              <li>Integrations</li>
              <li>Enterprise</li>
              <li>Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-bold mb-4 text-[#ffa229]">
              GOVERNM
            </h3>
            <ul className="space-y-2 font-medium text-[16px]">
              <li>Partners</li>
              <li>Community</li>
              <li>Developers</li>
              <li>App</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-bold mb-4 text-[#ffa229]">
              COMPLIANCE & T
            </h3>
            <ul className="space-y-2 font-medium text-[16px]">
              <li>Channels</li>
              <li>Scale</li>
              <li>Watch the Demo</li>
              <li>Our Competition</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-bold mb-4 text-[#ffa229]">
              BIS & CDS
            </h3>
            <ul className="space-y-2 font-medium text-[16px]">
              <li>About Us</li>
              <li>News</li>
              <li>Leadership</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <img src={bottom} alt="Bottom Icon" className="w-12 h-12" />
            <p className="text-[16px] font-medium">
              &copy; 2024 Registerkaro. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
