import React from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";

function Collections() {
  return (
    <DashboardLayout>
      <div className="w-full">
        {/* Filter section  */}
        <div className="flex items-center justify-between pb-[30px]">
          <h3 className="text-[16px] font-semibold text-[#222222]">
            Your Content
          </h3>
          <div className="flex items-center gap-[10px] ">
            <h3 className="text-[14px]">Sorted by</h3>
            <select
              placeholder="Sorted"
              className="w-[111px] h-[30px] bg-transparent rounded-[4px] border border-[#DEDEDE] px-[5px]"
            >
              <option>Newest</option>
              <option>Oldest</option>
              <option>Favorites</option>
              <option>Voted</option>
            </select>
          </div>
        </div>
        
        {/* Filter section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-[30px] pb-[30px] sm:gap-[36px] xl:gap-[35px] ">
          {[...Array(20)].map((collection: any) => (
            <div key={collection} className="w-full  h-[121px] bg-[#FFFFFF] relative rounded-[4px]  shadow-[0px_2px_25px_rgba(0,0,0,0.06)] hover:shadow-[0px_2px_20px_rgba(229,25,55,0.2)] hover:border hover:border-[#E51937] px-[20px] py-[20px]">
              <img src="/img/editIcon.svg" alt="edit" className="w-[24px] h-[24px] absolute top-[20px] right-[20px] cursor-pointer" />
              
                <h3 className="text-[16px] font-semibold text-[#222222] w-[269px] truncate">Test Collection name</h3>
                <p className="text-[14px] font-normal text-[#222222] mt-[10px] mb-[10px]">Total content <span className="font-semibold ">(12)</span> </p>
                <p className="text-[#676767] text-[13px]">Last updated: 23m ago</p>
              
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Collections;
