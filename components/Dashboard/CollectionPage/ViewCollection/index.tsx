import React from "react";
import CollectionItem from "../CollectionItem";

function ViewCollection() {
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-[30px] pb-[30px] sm:gap-[36px] xl:gap-[35px] ">
                {[...Array(20)].map((collectionId: any, index) => (
                    <CollectionItem key={index} />
                ))}
            </div>
        </div>
    );
}

export default ViewCollection;
