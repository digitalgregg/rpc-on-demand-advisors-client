import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";
import api from "../../api";
import { getLocal } from "../../utils/localStorage";
import DataNotFound from "../Shared/DataNotFound";
import LodingAnimation from "../Shared/LodingAnimation";

const RecentActivityStatus = () => {
  const team = getLocal("team");

  const { isLoading, data, refetch } = useQuery(
    ["get recent activity", team.id],
    () => api.get(`/api/recent-activity/${team.id}`),
    { enabled: !!team.id }
  );
  const recentActivities = data?.data;
  return (
    <div
      style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
      className="w-[280px] h-auto bg-[#FFFFFF] rounded-[4px]"
    >
      <div className="">
        <div className="flex items-center justify-between py-[20px] px-[20px]">
          <h3 className="text-[#000000] font-semibold text-[18px] leading-[25px]">
            Recent Activity
          </h3>
          <Link href="/dashboard/recent-activities">
            <p className="text-primary font-semibold text-[12px] cursor-pointer">
              View All
            </p>
          </Link>
        </div>
        <hr className="w-[100%] h-[4px] bg-primary text-primary border-0" />
        {/* second part */}
        {recentActivities?.length === 0 && (
          <p className="py-2 text-center">No activity found</p>
        )}
        {/* map all activity  */}
        {isLoading ? (
          <div className="h-[59px] text-[12px] leading-[16.34px] md:text-sm md:leading-[19.07px]  xl:h-[65px]  text-[#222] flex items-center px-5">
            <div className="flex items-center gap-[10px]">
              <LodingAnimation /> <span>Loading...</span>
            </div>
          </div>
        ) : (
          recentActivities?.map((item: any) => (
            <div
              style={{ borderBottom: "1px solid lightgray" }}
              key={item._id}
              className="px-[20px] py-[10px] "
            >
              <div className="">
                <h3 className="text-[16px] font-semibold text-[#222222]">
                  {item.title}
                </h3>
                <p className="text-[12px] text-[#676767] font-normal leading-[16.34px] mt-[2px] mb-[10px]">
                  {item.createdAt}
                </p>
                <p className="text-[#000000] text-[14px] font-normal leading-[19.7px]">
                  Your {item.activity_type} has been {item.status_type}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentActivityStatus;
