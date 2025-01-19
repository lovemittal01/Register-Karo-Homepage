import React from "react";
import logos from "../../assets/companies/Logos (1).svg";

const Companies = () => {
  return (
    <>
      <div className="bg-white flex items-center h-[90px] md:h-[176px] justify-center">
        <img src={logos} className="h-[48px] px-4 lg:px-0" />
      </div>
    </>
  );
};

export default Companies;
