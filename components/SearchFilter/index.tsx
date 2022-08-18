import React from "react";

const SearchFilter = () => {
  return (
    <div className="xl:w-[417px] lg:w-[320px] md:w-[300px] sm:w-[280px]  h-[40px] px-[15px] border border-[#9E9E9E] rounded-[4px] flex items-center justify-between text-[#9E9E9E]">
      <div className="flex  items-center gap-[10px] h-[20px]">
        <img
          src="/img/searchIcon.svg"
          alt="searchIcon"
          className="w-[18px] h-[18px]"
        />
        <input
          type="text"
          className="bg-white_secondary outline-0 text-[12px]"
          name="search"
          placeholder="search here..."
        />
      </div>
      {/* filter icon  */}
      <img
        src="/img/filterIcon.svg"
        className="w-[20px] h-[20px] cursor-pointer"
        alt="filter icon"
      />
    </div>
  );
};

export default SearchFilter;
