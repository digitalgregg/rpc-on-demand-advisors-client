import React, { useEffect, useState, ReactNode } from "react";
import ReactPaginate from "react-paginate";

type PaginationType = {
    itemsPerPage: number;
    children?: (data: object[]) => ReactNode;
    dataArr: object[];
    className?: string;
};

function Pagination({
    itemsPerPage,
    children,
    dataArr,
    className,
}: PaginationType) {
    const [currentItems, setCurrentItems] = useState<object[]>([]);
    const [pageCount, setPageCount] = useState<number>(0);
    const [itemOffset, setItemOffset] = useState<number>(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(dataArr.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(dataArr.length / itemsPerPage));
    }, [dataArr, itemOffset, itemsPerPage]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % dataArr.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <div>{children && children(currentItems)}</div>
            {dataArr.length > itemsPerPage && (
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    className={
                        "flex gap-4 font-semibold pt-[30px] w-full text-base leading-[21.79px] text-[#9E9E9E] justify-end items-center" +
                        " " +
                        className
                    }
                    disabledClassName="!text-[#9E9E9E]"
                    nextClassName="text-[#E51937]"
                    previousClassName="text-[#E51937]"
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    previousLabel="Previous"
                    activeClassName="text-[#E51937]"
                />
            )}
        </>
    );
}

Pagination.defaultProps = {
    itemsPerPage: 5,
};

export default Pagination;