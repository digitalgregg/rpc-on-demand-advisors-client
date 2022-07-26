import React, { useEffect, useState, ReactNode } from "react";
import ReactPaginate from "react-paginate";

type PaginationType = {
    itemsPerPage: number;
    children?: (data: any[]) => ReactNode;
    dataArr: any[];
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
        setCurrentItems(dataArr.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(dataArr.length / itemsPerPage));
    }, [dataArr, itemOffset, itemsPerPage]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % dataArr.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <>{children && children(currentItems)}</>
            {dataArr.length > itemsPerPage && (
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    className={
                        "flex gap-4 font-semibold w-full text-base leading-[21.79px] text-[#9E9E9E] justify-end items-center" +
                        " " +
                        className
                    }
                    disabledClassName="!text-[#9E9E9E]"
                    nextClassName="text-primary"
                    previousClassName="text-primary"
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    previousLabel="Previous"
                    activeClassName="text-primary"
                />
            )}
        </>
    );
}

Pagination.defaultProps = {
    itemsPerPage: 5,
};

export default Pagination;

export function IsArray(data: object[]): any[] {
    return Array.isArray(data) ? [...data] : [];
}
