import React, { useState } from "react";
import hat from "../../assets/navbar/christmas-hat-png-15 1.svg";
import search from "../../assets/navbar/Vector (3).svg";
import arrow from "../../assets/navbar/Icon-Angle.svg";
import logo from "../../assets/navbar/logo_logo 1.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div
        className="bg-white text-[#272d37] px-6 md:px-20 h-[72px] flex items-center justify-between"
        style={{ fontFamily: '"Open Sans", serif' }}
      >
        {/* Logo */}
        <div className="relative flex items-center">
          <div className="relative">
            <img
              src={hat}
              alt="Hat"
              className="absolute -top-4 -left-4 w-[35px]"
            />
            <img src={logo} alt="Logo" className="w-[150px] md:w-[200px]" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:gap-3 lg:gap-7 items-center">
          <div className="flex font-semibold md:gap-6 lg:gap-16">
            <div>Home</div>
            <div className="flex gap-3 items-baseline">
              <div>Our Services</div>
              <img src={arrow} alt="Arrow" className="w-3" />
            </div>
            <div>Blog</div>
            <div>Contact Us</div>
            <div>About Us</div>
          </div>
          <div>
            <img src={search} alt="Search" className="w-5 cursor-pointer" />
          </div>
          <div>
            <div className="w-[157px] h-[46px] flex items-center justify-center font-semibold rounded-md bg-[#ffa229] cursor-pointer text-white">
              Talk An Expert
            </div>
          </div>
        </div>

        {/* Hamburger Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <ImCross /> : <GiHamburgerMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-[#272d37] p-6 space-y-4 font-semibold">
          <div>Home</div>
          <div className="flex justify-between items-center">
            <div>Our Services</div>
            <img src={arrow} alt="Arrow" className="w-3" />
          </div>
          <div>Blog</div>
          <div>Contact Us</div>
          <div>About Us</div>
          <div className="flex items-center">
            <img
              src={search}
              alt="Search"
              className="w-5 cursor-pointer mr-4"
            />
            <div className="w-[157px] h-[46px] flex items-center justify-center font-semibold rounded-md bg-[#ffa229] cursor-pointer text-white">
              Talk An Expert
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
