import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import FilterBox from "../FilterBox/index";
import { OutSideClick } from "../Shared/OutSideClick";
const SearchFilter = () => {
    const [filterBoxOpen, setFilterBoxOpen] = useState(false);
    return (
        <>
            <div className="relative xl:w-[417px] lg:w-[320px] md:w-[300px] sm:w-[280px]  h-[40px] px-[15px] border border-[#9E9E9E] rounded-[4px] flex items-center justify-between ">
                <div className="flex  items-center gap-[10px] h-[20px] text-[#9E9E9E]">
                    <img
                        src="/img/searchIcon.svg"
                        alt="searchIcon"
                        className="w-[18px] h-[18px]"
                    />
                    <input
                        type="text"
                        className="bg-transparent outline-0 text-[12px]"
                        name="search"
                        placeholder="search here..."
                    />
                </div>
                {/* filter icon  */}
                <OutSideClick onOutSideClick={() => setFilterBoxOpen(false)}>
                    <img
                        onClick={() => setFilterBoxOpen(!filterBoxOpen)}
                        src="/img/filterIcon.svg"
                        className="w-[20px] h-[20px] cursor-pointer"
                        alt="filter icon"
                    />
                    <motion.div
                        style={{
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                            display: filterBoxOpen === true ? "block" : "none",
                        }}
                        className="xs:w-full z-50 sm:w-[460px] md:w-[460px] lg:w-[530px] h-auto absolute left-0 top-[39px] rounded-[4px] bg-white "
                    >
                        <div className=" px-[40px] py-[30px]">
                            <FilterBox />
                        </div>
                    </motion.div>
                </OutSideClick>
            </div>
        </>
    );
};

export default SearchFilter;
