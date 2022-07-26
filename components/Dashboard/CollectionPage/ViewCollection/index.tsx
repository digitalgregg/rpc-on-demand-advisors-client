import React, { Dispatch, SetStateAction, useState } from "react";
import Pagination from "../../../Shared/Pagination";
import CollectionItem from "../CollectionItem";
import { useWindowDimensions } from "../../../Shared/DimentionHook/index";
import { IsArray } from "../../../Shared/Pagination/index";
import LodingAnimation from "../../../Shared/LodingAnimation";
import DataNotFound from "../../../Shared/DataNotFound";
import Select from "react-select";
import SortedSelect, { SelectOption } from "../../../Shared/SortedSelect";
import { collectionFilter } from "../../../../utils/filter";

type ViewCollectionType = {
    data: any;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    refetch: () => any;
    filter: SelectOption;
    setFilter: Dispatch<SetStateAction<SelectOption>>;
};

function ViewCollection({
    data,
    isLoading,
    isSuccess,
    refetch,
    isError,
    filter,
    setFilter,
}: ViewCollectionType) {
    const { width } = useWindowDimensions();
    function getItemsPerPage(): number {
        if (width < 680) {
            return 6;
        } else if (width < 1200) {
            return 10;
        } else if (width < 1440) {
            return 15;
        } else if (width < 1680) {
            return 18;
        } else {
            return 24;
        }
    }

    return (
        <div className="w-full">
            {/* Filter section  */}
            <div className="flex items-center justify-between pb-[30px]">
                <h3 className="text-[16px] font-semibold text-[#222222]">
                    Your Collections
                </h3>
                <div className="flex items-center gap-[10px] text-[#000]">
                    <h3 className="text-[14px]">Sorted by</h3>
                    <SortedSelect
                        value={filter}
                        onChange={(e: any) => setFilter(e)}
                    />
                </div>
            </div>
            {isSuccess ? (
                <Pagination
                    dataArr={IsArray(data)}
                    itemsPerPage={getItemsPerPage()}
                >
                    {(currentItems) => (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-[30px] pb-[30px] sm:gap-[36px] xl:gap-[35px] ">
                                {currentItems.map(
                                    (collectionData: any, index) => (
                                        <CollectionItem
                                            key={index}
                                            data={collectionData}
                                            refetch={refetch}
                                        />
                                    )
                                )}
                            </div>
                        </>
                    )}
                </Pagination>
            ) : (
                isLoading && (
                    <div>
                        <div className="flex items-baseline justify-center w-full relative top-[calc((100vh-300px)/2)]">
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
                <DataNotFound imgClass="w-[350px]" className="top-[80px]" />
            )}

            {/* Filter section  */}

            <div className="pt-[100px]"></div>
        </div>
    );
}

export default ViewCollection;
