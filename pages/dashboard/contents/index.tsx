import React, { useState } from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import TopNav from "./../../../components/Dashboard/TopNav";
import ContentCard from "./../../../components/ContentCard/index";
import Select from "react-select";
const options = [
    { value: "Newest", label: "Newest" },
    { value: "Oldest", label: "Oldest" },
    { value: "Favorites", label: "Favorites" },
    { value: "Voted", label: "Voted" },
];
const customStyles = {
    control: (base: any, state: any) => ({
        ...base,
        border: "1px solid #9E9E9E",
        boxShadow: "none",
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        color: state.isSelected ? "#fff" : "#000000",
        fontSize: "14px",
        fontWeight: state.isSelected ? 700 : 400,
        width: "95%",
        borderRadius: "4px",
        margin: "0 auto",
        "&:hover": {
            color: state.isSelected ? "#fff" : "#E51937",
            fontWeight: state.isSelected ? 700 : 600,
        },
    }),
    indicatorsContainer: (provided: any) => ({
        border: "none",
    }),
};
function Contents() {
    const [itemCount, setItemCount] = useState();
    const handleChange = (e: any) => {
        // setItemCount(e);
    };
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
                                <img
                                    src="/img/Collections.png"
                                    alt="collection"
                                />
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

                        <Select
                            value={itemCount}
                            onChange={handleChange}
                            placeholder="Newest"
                            options={options}
                            className="!text-[#fff] text-[14px]"
                            name="funnel type"
                            styles={customStyles}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 4,
                                colors: {
                                    ...theme.colors,
                                    primary25: "#E519371A",
                                    primary: "#E51937",
                                },
                            })}
                        />
                    </div>
                </div>

                {/* content cards  */}
                <div className="">
                    <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4 gap-[25px] pb-[20px]">
                        {data.map((item: any, index: number) => (
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
