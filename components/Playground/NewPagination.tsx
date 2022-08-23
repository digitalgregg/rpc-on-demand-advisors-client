import React from "react";
import { ReactNode } from "react";

type PaginationType = {
    itemsPerPage: number;
    children?: (data: object[]) => ReactNode;
    dataArr: object[];
    className?: string;
};

function NewPagination({
    className,
    itemsPerPage,
    children,
    dataArr,
}: PaginationType) {
    return <div>NewPagination</div>;
}

export default NewPagination;
