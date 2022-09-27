/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import ContentViewCard from "../../../components/ContentViewCard";
import FileUploadModal, {
    handleUppyModal,
} from "../../../components/FileUploadModal";
import NewCollectionModal from "../../../components/modal/NewCollection";
import Pagination, { IsArray } from "../../../components/Shared/Pagination";
import { useWindowDimensions } from "../../../components/Shared/DimentionHook/index";
import { useAtom } from "jotai";
import { signupState, team_state } from "../../../state/index";
import {
    createContent,
    responseToObject,
    useFilterContents,
} from "../../../api-call/ContentApi";
import LodingAnimation from "../../../components/Shared/LodingAnimation";
import DataNotFound from "../../../components/Shared/DataNotFound";
import SortedSelect, {
    SelectOption,
} from "../../../components/Shared/SortedSelect";

const options = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
    { value: "favorites", label: "Favorites" },
    { value: "voted", label: "Voted" },
];

function Contents() {
    const [teamData] = useAtom(team_state);
    const [userData] = useAtom(signupState);

    const { width } = useWindowDimensions();
    const [collectionModal, setCollectionModal] = useState(false);

    const handleCollection = () => {
        setCollectionModal(!collectionModal);
    };

    async function handleSingleUpload(response: any) {
        await createContent(responseToObject(response, teamData));
        refetch();
    }

    // filter section
    const [sortedFilter, setSortedFilter] = useState<SelectOption>({
        value: "newest",
        label: "Newest",
    });

    const {
        data: contentData,
        isLoading,
        isError,
        isSuccess,
        refetch,
    } = useFilterContents(teamData.id, sortedFilter);

    return (
        <>
            <DashboardLayout>
                <div className="w-full">
                    <div className="flex flex-col sm:items-center justify-between sm:flex-row pb-[30px] w-full mx-auto">
                        <h3 className="text-[16px] md:text-[18px] lg:text-[24px] 2xl:text-[32px] mb-[30px] sm:mb-0 font-bold text-[#000]">
                            {getGreetings()} {getFirstName(userData.name)}!
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
                            Your Content (
                            {(contentData && contentData.length) || 0})
                        </h3>
                        <div className="flex items-center gap-[10px] text-[#000]">
                            <h3 className="text-[14px]">Sorted by</h3>

                            <SortedSelect
                                value={sortedFilter}
                                onChange={(e: any) => setSortedFilter(e)}
                                options={options}
                            />
                        </div>
                    </div>

                    {/* content cards  */}
                    <div className="">
                        {isSuccess ? (
                            <Pagination
                                dataArr={IsArray(contentData)}
                                itemsPerPage={getItemsPerPage(width)}
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
                        ) : (
                            isLoading && (
                                <div>
                                    <div className="flex items-baseline justify-center w-full relative top-[calc((100vh-350px)/2)]">
                                        <LodingAnimation
                                            color="#E51937"
                                            height={50}
                                            width={50}
                                        />
                                        {/* <div className="text-black">No data found</div> */}
                                    </div>
                                </div>
                            )
                        )}
                        {isError && (
                            <DataNotFound
                                imgClass="w-[350px] "
                                className="top-[50px]"
                            />
                        )}
                    </div>
                </div>
                <div className="pt-[70px]"></div>
            </DashboardLayout>
            <FileUploadModal onSingleUpload={handleSingleUpload} />
            <NewCollectionModal
                isOpen={collectionModal}
                handleClose={handleCollection}
            />
        </>
    );
}

export const getFirstName = (name: string) => {
    return name.split(" ")[0];
};

const getGreetings = () => {
    var day = new Date();
    var hr = day.getHours();
    if (hr >= 0 && hr < 12) {
        return "Good Morning";
    } else if (hr == 12) {
        return "Good Noon";
    } else if (hr >= 12 && hr <= 17) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
};

function getItemsPerPage(width: number): number {
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

export default Contents;
