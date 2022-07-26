/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import FilterPopup from "../FilterPopup";
import MoboDraer from "../MoboDraer";
import UserSettingsDropdown from "./../UserSettingsDropdown/index";
import RecentActivityStatus from "./../RecentActivityStatus/index";
import { OutSideClick } from "../Shared/OutSideClick";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { getFirstName } from "../../pages/dashboard/contents";
import { signupState } from "./../../state/index";
import { useQuery } from 'react-query';
import { getLocal } from './../../utils/localStorage';
import api from "../../api";

const NavLeftItem = () => {
  const [userData] = useAtom(signupState);
  const userInfo = getLocal("user-info");
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openActivity, setOpenActivity] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { isLoading, data, refetch } = useQuery(
    ["get-user", userInfo?.email],
    () => api.get(`/api/user?email=${userInfo?.email}`),
    { enabled: !!userInfo?.email }
  );
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleDropDown = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleRecentActivity = () => {
    setOpenActivity(!openActivity);
  };

  return (
    <div className="flex gap-[20px] items-center">
      <img
        onClick={() => setModalOpen(!modalOpen)}
        src="/img/searchIcon.svg"
        alt="searchIcon"
        className="w-[18px] h-[18px] cursor-pointer sm:hidden"
      />
      <OutSideClick onOutSideClick={() => setOpenActivity(false)}>
        <img
          onClick={handleRecentActivity}
          src="/img/activityHistory.svg"
          alt="recent activity"
          className="xs:w-[18px] xs:h-[18px] sm:w-[24px] sm:h-[24px] cursor-pointer"
        />
        <AnimatePresence initial={false}>
          {openActivity && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "fit-content",
              }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)] absolute top-[70px] right-[40px] z-50  sm:top-[60px] sm:right-[205px]"
            >
              <RecentActivityStatus />
            </motion.div>
          )}
        </AnimatePresence>
      </OutSideClick>
      <OutSideClick onOutSideClick={() => setOpenDropdown(false)}>
        <div className="flex gap-[15px]">
          <h3
            onClick={handleDropDown}
            className="text-[16px] cursor-pointer xs:hidden sm:flex font-semibold text-[#222222] flex items-center relative"
          >
            {getFirstName(userData.name)}
            <span>
              <img
                src="/img/dropdown.svg"
                alt="dropdown"
                className="w-[12px] h-[8px] ml-[10px] cursor-pointer"
              />
            </span>
          </h3>
          <AnimatePresence initial={false}>
            {openDropdown && (
              <>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "fit-content",
                  }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className=" overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)] absolute z-50 top-[65px] right-[110px] xl:top-[65px] xl:right-[120px]"
                >
                  <UserSettingsDropdown />
                </motion.div>
              </>
            )}
          </AnimatePresence>
          {data?.data?.profile && data?.data?.profile !== " "  ? (
            <img
              src={data?.data?.profile}
              alt="Profile Photo"
              className="w-[50px] h-[50px] rounded-full xs:hidden sm:flex"
            />
          ) : (
            <img
              src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
              alt="profile image"
              className="w-[50px] h-[50px] rounded-full xs:hidden sm:flex"
            />
          )}

          <img
            onClick={toggleDrawer}
            src="/img/3dotline.svg"
            alt="humBurgerMenu"
            className="w-[30px] h-[20px] cursor-pointer sm:hidden"
          />
        </div>
      </OutSideClick>
      <FilterPopup
        modalOpen={modalOpen}
        onClose={() => setModalOpen(!modalOpen)}
      />
      <MoboDraer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default NavLeftItem;
