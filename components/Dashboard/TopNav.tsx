import React from "react";
import SearchFilter from "./../SearchFilter/index";
import NavLeftItem from "./../NavLeftItem/index";

const TopNav = () => {
  return (
    <div className="w-full h-[50px] flex justify-between items-center">
        <img src="/img/logo.svg" alt="logo" className="w-[164.29px] h-[25px] sm:hidden" />
      <div className="xs:hidden sm:flex">
        <SearchFilter />
      </div>
      <NavLeftItem />
    </div>
  );
};

export default TopNav;
