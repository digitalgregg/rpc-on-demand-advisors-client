/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FilterBox from "../FilterBox/index";
import { OutSideClick } from "../Shared/OutSideClick";
import { useAtom } from "jotai";
import { SearchTextFilter, team_state } from "../../state";
import { useQuery } from "react-query";
import { fetchAppSettings } from "../../api-call/AppSettingsApi";

const SearchFilter = () => {
    const [filterBoxOpen, setFilterBoxOpen] = useState(false);
    const [searchText, setSearchText] = useAtom(SearchTextFilter);

    const [teamData] = useAtom(team_state);
    const {
        data: appSettingData,
        refetch,
        isLoading,
        isSuccess,
        isError,
    } = useQuery(
        "application-settings-query",
        () => fetchAppSettings(teamData.id),
        {
            select: (response) => response.data,
            retry(failureCount, error: any) {
                if (
                    error?.response?.data?.message ===
                    "Application Settings not found"
                ) {
                    return false;
                } else {
                    return true;
                }
            },
        }
    );

    const handleClickOutside = (e: any) => {
        const pathStr = `<path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>`;
        if (
            pathStr == e.outerHTML ||
            e.matches(".css-tj5bde-Svg") ||
            e.matches(".top-select__indicator", ".top-select__clear-indicator")
        ) {
        } else {
            setFilterBoxOpen(false);
        }
    };

    return (
        <div className="relative xl:w-[417px] lg:w-[320px] md:w-[300px] sm:w-[280px]  h-[40px] px-[15px] border border-[#9E9E9E] rounded-[4px] flex items-center justify-between">
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
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search here..."
                />
            </div>
            {/* filter icon  */}
            <OutSideClick onOutSideClick={handleClickOutside}>
                <img
                    onClick={() => setFilterBoxOpen(!filterBoxOpen)}
                    src="/img/filterIcon.svg"
                    className="w-[20px] h-[20px] cursor-pointer"
                    alt="filter icon"
                />
                <AnimatePresence initial={false}>
                    {filterBoxOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: 1,
                                height: "fit-content",
                            }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className={` xs:w-full shadow-[0px_4px_20px_rgba(0,0,0,0.1)] z-50 sm:w-[460px] md:w-[460px] lg:w-[530px] max-h-[455px] modal-scroll absolute left-0 top-[39px] rounded-[4px] bg-white`}
                        >
                            <div className="px-[10px] sm:px-[40px] py-[30px]">
                                <FilterBox data={appSettingData} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </OutSideClick>
        </div>
    );
};

export default SearchFilter;
