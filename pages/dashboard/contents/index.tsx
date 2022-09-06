/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import TopNav from "./../../../components/Dashboard/TopNav";
import ContentCard from "./../../../components/ContentCard/index";
import Select from "react-select";
import ContentViewCard from "../../../components/ContentViewCard";
import FileUploadModal, {
    handleUppyModal,
} from "../../../components/FileUploadModal";
import NewCollectionModal from "../../../components/modal/NewCollection";
import Pagination from "../../../components/Shared/Pagination";
import { useWindowDimensions } from "../../../components/Shared/DimentionHook/index";
import { useAtom } from "jotai";
import { team_state } from "../../../state/index";
import {
    createContent,
    fetchContents,
    responseToObject,
} from "../../../api-call/ContentApi";
import { useEffect } from "react";
import api from "../../../api";
import { useQuery } from "react-query";

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
    const [teamData] = useAtom(team_state);

    const [itemCount, setItemCount] = useState();
    const handleChange = (e: any) => {
        // setItemCount(e);
    };

    const [collectionModal, setCollectionModal] = useState(false);
    const handleCollection = () => {
        console.log(teamData);
        setCollectionModal(!collectionModal);
    };

    const { width } = useWindowDimensions();
    function getItemsPerPage(): number {
        if (width < 680) {
            return 6;
        } else if (width < 768) {
            return 10;
        } else if (width < 1024) {
            return 4;
        } else if (width < 1440) {
            return 8;
        } else if (width < 1920) {
            return 12;
        } else {
            return 16;
        }
    }

    const {
        data: contentData,
        isLoading,
        error,
        refetch,
    } = useQuery(
        "fetch-contents",
        () => fetchContents({ team_id: teamData.id }),
        {
            select: (response) =>
                Array.isArray(response) ? response.reverse() : response,
        }
    );

    async function handleSingleUpload(response: any) {
        await createContent(responseToObject(response, teamData));
        refetch();
    }

    return (
        <>
            <DashboardLayout>
                <div className="w-full">
                    <div className="flex flex-col sm:items-center justify-between sm:flex-row pb-[30px] w-full mx-auto">
                        <h3 className="text-[16px] md:text-[18px] lg:text-[24px] 2xl:text-[32px] mb-[30px] sm:mb-0 font-bold text-[#000]">
                            Good Morning Gregg!{" "}
                        </h3>
                        <div className="flex gap-[3%] sm:gap-[25px] ">
                            <button
                                onClick={handleUppyModal}
                                className="w-[48.5%] sm:w-[143px] h-[48px] lg:w-[190px] lg:h-[54px] border-[1.5px] border-primary rounded-[4px] text-[12px] lg:text-[14px] font-semibold flex items-center justify-center gap-[5px]	lg:gap-[11px] text-primary"
                            >
                                <span>
                                    <img src="/img/addContactIcon.svg" alt="" />
                                </span>{" "}
                                Add new content
                            </button>

                            <button
                                onClick={handleCollection}
                                className="w-[48.5%] sm:w-[168px] lg:w-[206px] h-[48px] lg:h-[54px] border-[1.5px] border-primary rounded-[4px] text-[12px] lg:text-[14px] font-semibold	flex items-center justify-center gap-[5px]	lg:gap-[11px] text-primary"
                            >
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
                        <div className="flex items-center gap-[10px] text-[#000]">
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
                        <Pagination
                            dataArr={contentData || []}
                            itemsPerPage={getItemsPerPage()}
                        >
                            {(currentItems) => (
                                <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4 gap-[25px] pb-[20px]">
                                    {currentItems.map(
                                        (item: any, index: number) => (
                                            <div
                                                key={index}
                                                className="relative w-[100%]"
                                            >
                                                <ContentViewCard
                                                    data={item}
                                                    refetch={refetch}
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </Pagination>
                    </div>
                </div>
                <div className="pt-[50px]"></div>
            </DashboardLayout>
            <FileUploadModal onSingleUpload={handleSingleUpload} />
            <NewCollectionModal
                isOpen={collectionModal}
                handleClose={handleCollection}
            />
        </>
    );
}

export default Contents;
