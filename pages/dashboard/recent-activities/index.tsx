import React, { useState } from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
// import { RecentActivities } from "../../../components/fake";
import Pagination from "../../../components/Shared/Pagination";
import { OutSideClick } from "../../../components/Shared/OutSideClick";
import { AnimatePresence, motion } from "framer-motion";
import { useQuery } from "react-query";
import { getLocal } from "../../../utils/localStorage";
import api from "../../../api";
import LodingAnimation from "../../../components/Shared/LodingAnimation";

export default function Index() {
  const team = getLocal("team");
  const [isOpen, setIsOpen] = useState(false);
  const [selectId, setSelectId] = useState(null);

  const handleMenu = (id: any) => {
    console.log(id);
    setSelectId(id);
    setIsOpen(!isOpen);
  };
  const { isLoading, data } = useQuery(
    ["get recent activity", team.id],
    () => api.get(`/api/recent-activity/${team.id}`),
    { enabled: !!team.id }
  );
  const recentActivities = data?.data;

  const handleMarkAsRead = (id: any) => {
    api.put(`/api/recent-activity/${id}`, { views: true })
    .then((data) => console.log(data))
  };
  return (
    <DashboardLayout>
      <>
        <h2 className="text-bold sm:text-[32px] sm:leading-[44px] sm:mb-[30px] xs:text-[16px] xs:leading-[24px] xs:mb-[20px] text-[#1D1D1D]">
          All Recent Activity
        </h2>
        {isLoading ? (
          <div className="h-[59px] text-[12px] leading-[16.34px] md:text-sm md:leading-[19.07px]  xl:h-[65px]  text-[#222] flex items-center px-5">
            <div className="flex items-center gap-[10px]">
              <LodingAnimation /> <span>Loading...</span>
            </div>
          </div>
        ) : recentActivities.length > 0 ? (
          <Pagination
            dataArr={recentActivities}
            itemsPerPage={5}
            className=" !justify-start my-3"
          >
            {(currentItems) => (
              <>
                {currentItems?.map(
                  (
                    { _id, title, createdAt, activity_type, status_type }: any,
                    index
                  ) => {
                    return (
                      <div
                        className={`${
                          _id === selectId ? "bg-[#FFFFFF]" : "bg-[#e519371a]"
                        } w-full relative rounded-[4px] my-[16px] py-[18px] px-[10px] flex flex-row`}
                        key={_id}
                      >
                        <div className="flex-1">
                          <h2 className="font-semibold text-[16px] leading-[22px] text-[#222222] mb-[2px]">
                            {title}
                          </h2>
                          <h4 className="font-normal text-[12px] leading-[16px] text-[#676767] mb-[2px]">
                            {createdAt}
                          </h4>
                          <h3 className="font-normal text-[14px] leading-[19px] text-[#222222]">
                            Your {activity_type} has been {status_type}
                          </h3>
                        </div>
                        <div
                          className="p-[4px] h-[16px] cursor-pointer"
                          onClick={() => handleMenu(_id)}
                        >
                          <img
                            src="/icon/three-dot.svg"
                            alt="three dot"
                            className="w-[3px]"
                          />
                        </div>
                        {/* drop down items  */}
                        <OutSideClick onOutSideClick={() => setIsOpen(false)}>
                          <AnimatePresence initial={false}>
                            {_id === selectId && isOpen === true && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  height: 0,
                                }}
                                animate={{
                                  opacity: 1,
                                  height: "fit-content",
                                }}
                                exit={{
                                  opacity: 0,
                                  height: 0,
                                }}
                                transition={{
                                  duration: 0.2,
                                }}
                                className="overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)]"
                              >
                                <div
                                  className="bg-[#ffffff] rounded px-[8px] py-[8px] absolute top-[40px]  right-[25px] z-50"
                                  style={{
                                    boxShadow:
                                      "2px 2px 16px rgba(0, 0, 0, 0.08)",
                                  }}
                                >
                                  <ul className="text-semibold text-[12px] flex flex-col gap-[2px] leading-[16px] text-[#000805]">
                                    <li
                                      onClick={() => handleMarkAsRead(_id)}
                                      className="p-3 rounded cursor-pointer hover-transition hover:bg-primary hover:text-White"
                                    >
                                      Mark as read
                                    </li>
                                    <li className="p-3 rounded cursor-pointer hover-transition hover:bg-primary hover:text-White">
                                      View item
                                    </li>
                                    <li className="p-3 rounded cursor-pointer hover-transition hover:bg-primary hover:text-White">
                                      Remove
                                    </li>
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </OutSideClick>
                      </div>
                    );
                  }
                )}
              </>
            )}
          </Pagination>
        ) : (
          <div className="h-[59px] text-[12px] leading-[16.34px] md:text-sm md:leading-[19.07px]  xl:h-[65px]  text-[#222] flex items-center px-5">
            <div className="flex items-center gap-[10px]">No activity</div>
          </div>
        )}
      </>
    </DashboardLayout>
  );
}

// className={`w-full relative bg-[#e519371a] rounded-[4px] my-[16px] py-[18px] px-[10px] flex flex-row ${views === true && _id === selectId && "bg-[#FFFFFF]"}`}
