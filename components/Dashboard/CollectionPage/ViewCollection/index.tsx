import React from "react";
import Pagination from "../../../Shared/Pagination";
import CollectionItem from "../CollectionItem";
import { useWindowDimensions } from "../../../Shared/DimentionHook/index";

function ViewCollection() {
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
                    Your Content
                </h3>
                <div className="flex items-center gap-[10px] text-[#000]">
                    <h3 className="text-[14px]">Sorted by</h3>
                    <select
                        placeholder="Sorted"
                        className="w-[111px] focus:outline-none h-[30px] bg-transparent rounded-[4px] border border-[#DEDEDE] px-[5px]"
                    >
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Favorites</option>
                        <option>Voted</option>
                    </select>
                </div>
            </div>

            {/* Filter section  */}
            <Pagination
                dataArr={[...Array(50)]}
                itemsPerPage={getItemsPerPage()}
            >
                {(currentItems) => (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-[30px] pb-[30px] sm:gap-[36px] xl:gap-[35px] ">
                        {currentItems.map((collectionId: any, index) => (
                            <CollectionItem key={index} />
                        ))}
                    </div>
                )}
            </Pagination>
            <div className="pt-[100px]"></div>
        </div>
    );
}

export default ViewCollection;
