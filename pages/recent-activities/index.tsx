import React, { useState } from "react";
import DashboardLayout from "./../../components/Dashboard/DashboardLayout";
import { RecentActivities } from "../../components/fake";

export default function Index() {
  const [isOpen,setIsOpen] = useState(false);
  const [selectNum, setSelectNum] = useState(null);
  
  const handleMenu = (id: any) => {
    setSelectNum(id);
    setIsOpen(!open)
  };
  return (
    <DashboardLayout>
      <>
        <h2 className="text-bold sm:text-[32px] sm:leading-[44px] sm:mb-[30px] xs:text-[16px] xs:leading-[24px] xs:mb-[20px] text-[#1D1D1D]">
          All Recent Activity
        </h2>
        {RecentActivities.map((item, index) => {
          return (
            <div
              className="w-full relative bg-[#FFFFFF] hover:bg-[#e519371a] rounded my-[16px] py-[18px] px-[10px] flex flex-row"
              key={item.id}
            >
              <div className="flex-1">
                <h2 className="font-semibold text-[16px] leading-[22px] text-[#222222] mb-[2px]">
                  {item.title}
                </h2>
                <h4 className="font-normal text-[12px] leading-[16px] text-[#676767] mb-[2px]">
                  {item.data}
                </h4>
                <h3 className="font-normal text-[14px] leading-[19px] text-[text-[#222222]">
                  {item.description}
                </h3>
              </div>
              <div className="">
                <img
                  src="/icon/three-dot.svg"
                  alt="three dot"
                  className="w-[2px] h-[18px] cursor-pointer"
                  onClick={() => handleMenu(item.id)}
                />
              </div>
              {/* drop down items  */}
              
              {index === selectNum && isOpen && (
                <div
                  className="w-[92px] h-[92px] bg-[#ffffff] rounded px-[8px] py-[8px] absolute top-[40px]  right-[25px] z-50"
                  style={{ boxShadow: "2px 2px 16px rgba(0, 0, 0, 0.08)" }}
                >
                  <ul className="text-semibold text-[12px] leading-[16px] text-[#000805]">
                    <li className="mb-[15px]">Mark as read</li>
                    <li className="mb-[15px]">View item</li>
                    <li>Remove</li>
                  </ul>
                </div>
              )}
              
            </div>
          );
        })}
      </>
    </DashboardLayout>
  );
}
