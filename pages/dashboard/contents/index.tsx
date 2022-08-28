import React from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import TopNav from "./../../../components/Dashboard/TopNav";
import ContentCard from "./../../../components/ContentCard/index";

function Contents() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <DashboardLayout>
      <div className="w-full">
        <div className="flex flex-col sm:items-center justify-between sm:flex-row pb-[30px] w-full mx-auto">
          <h3 className="text-[16px] md:text-[18px] lg:text-[24px] 2xl:text-[32px] mb-[30px] sm:mb-0 font-bold">
            Good Morning Gregg!{" "}
          </h3>
          <div className="flex gap-[3%] sm:gap-[25px] ">
            <button className="w-[48.5%] sm:w-[143px] h-[48px] lg:w-[190px] lg:h-[54px] border-[1.5px] border-primary rounded-[4px] text-[12px] lg:text-[14px] font-semibold flex items-center justify-center gap-[5px]	lg:gap-[11px] text-primary">
              <span>
                <img src="/img/addContactIcon.svg" alt="" />
              </span>{" "}
              Add new content
            </button>

            <button className="w-[48.5%] sm:w-[168px] lg:w-[206px] h-[48px] lg:h-[54px] border-[1.5px] border-primary rounded-[4px] text-[12px] lg:text-[14px] font-semibold	flex items-center justify-center gap-[5px]	lg:gap-[11px] text-primary">
              <span>
                <img src="/img/Collections.png" alt="collection" />
              </span>{" "}
              Create new collection
            </button>
          </div>
        </div>
        {/* filter section  */}
        <div className="flex items-center justify-between pb-[20px] mx-auto">
          <h3 className="text-[16px] font-semibold text-[#222222]">
            Your Content (100)
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

        {/* content cards  */}
        <div className="">
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4 gap-[25px] pb-[20px]">
            {data.map((item: any,index:number) => (
              <div key={item} className="relative w-[100%]">
                <ContentCard
                  imgURL="/img/test.jpg"
                  title="Give your blog title here"
                  tagColor="red"
                  type="Blog"
                  favourite={0}
                  like={0}
                  mapIndex={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Contents;