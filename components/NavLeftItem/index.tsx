import React, { useState } from "react";
import FilterPopup from "../FilterPopup";
import MoboDraer from "../MoboDraer";
import UserSettingsDropdown from './../UserSettingsDropdown/index';
import RecentActivityStatus from './../RecentActivityStatus/index';


const NavLeftItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openActivity, setOpenActivity] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleDropDown = () => {
    setOpenDropdown(!openDropdown)
  };

  const handleRecentActivity = () => {
    setOpenActivity(!openActivity)
  }

  return (
    <div className="flex gap-[20px] items-center">
      <img
        onClick={() => setModalOpen(!modalOpen)}
        src="/img/searchIcon.svg"
        alt="searchIcon"
        className="w-[18px] h-[18px] cursor-pointer sm:hidden"
      />
      <img
        onClick={handleRecentActivity}
        src="/img/activityHistory.svg"
        alt="recent activity"
        className="xs:w-[18px] xs:h-[18px] sm:w-[24px] sm:h-[24px] cursor-pointer"
      />
      {
        openActivity && <div className="absolute z-50 top-[70px] right-[40px]   sm:top-[60px] sm:right-[205px]"><RecentActivityStatus /></div>
      }
      <div className="flex gap-[15px]">
        <h3 className="text-[16px] xs:hidden sm:flex font-semibold text-[#222222] flex items-center relative">
          Gregg{" "}
          <span>
            <img
              onClick={handleDropDown}
              src="/img/dropdown.svg"
              alt="dropdown"
              className="w-[12px] h-[8px] ml-[10px] cursor-pointer"
            />
          </span>{" "}
        </h3>
     {openDropdown &&    <div className="absolute z-50  top-[65px] right-[35px] xl:top-[65px] xl:right-[120px]">
          <UserSettingsDropdown />
        </div>}
        <img
          src="/img/avater.svg"
          alt="avater"
          className="w-[50px] h-[50px] rounded-full xs:hidden sm:flex"
        />

        <img
          onClick={toggleDrawer}
          src="/img/3dotline.svg"
          alt="humBurgerMenu"
          className="w-[30px] h-[20px] cursor-pointer sm:hidden"
        />
      </div>
        <FilterPopup modalOpen={modalOpen} onClose={() => setModalOpen(!modalOpen)} />
      <MoboDraer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default NavLeftItem;
