import React, { ReactElement, useState } from "react";
import DeleteIcon from "../CustomIcons/DeleteIcon";
import DownloadIcon from "../CustomIcons/DownloadIcon";
import EditIcon from "../CustomIcons/EditIcon";
import TagIcon from "../CustomIcons/TagIcon";
import UpdateIcon from "../CustomIcons/UpdateIcon";

type DropdownEditType = {
    dropdownList: DropdownItemType[];
    onDropdownClick?: (v: DropdownItemType) => any;
};

function DropdownEdit({ dropdownList, onDropdownClick }: DropdownEditType) {
    return (
        <div className="w-[156px] h-[210px] bg-[#FFFFFF] rounded-[4px]  px-[10px] flex flex-col justify-center shadow-[4px_4px_8px_rgba(0,0,0,0.25)]">
            {dropdownList.map((v, i) => (
                <div
                    key={i}
                    onClick={() => onDropdownClick && onDropdownClick(v)}
                >
                    <DropdownList data={v} />
                </div>
            ))}
        </div>
    );
}

type DropdownItemType = {
    id: number;
    title: string;
    img: (stroke: string) => ReactElement;
};

const DropdownList = ({ data }: { data: DropdownItemType }) => {
    const [isHover, setHover] = useState(false);
    const handleHover = () => {
        setHover(!isHover);
    };
    return (
        <ul className="rounded-[4px] hover:bg-[rgba(229,25,55,0.1)]">
            <li
                className="flex gap-[12px] cursor-pointer py-2 group px-[10px] text-[16px] items-center  text-[#222222]"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
            >
                {data.img(isHover ? "#E51937" : "#222222")}
                <span className=" text-[16px] text-[#222222] group-hover:text-primary group-hover:font-semibold">
                    {data.title}
                </span>
            </li>
        </ul>
    );
};

const dropdownList = [
    {
        id: 0,
        title: "Tag",
        img: (stroke = "#222222") => <TagIcon stroke={stroke} />,
    },
    {
        id: 1,
        title: "Edit",
        img: (stroke = "#222222") => (
            <EditIcon stroke={stroke} width="12px" height="12px" />
        ),
    },
    {
        id: 2,
        title: "Download",
        img: (stroke = "#222222") => <DownloadIcon stroke={stroke} />,
    },
    {
        id: 3,
        title: "Update",
        img: (stroke = "#222222") => <UpdateIcon stroke={stroke} />,
    },
    {
        id: 4,
        title: "Delete",
        img: (stroke = "#222222") => (
            <DeleteIcon stroke={stroke} width="12px" height="12px" />
        ),
    },
];

DropdownEdit.defaultProps = {
    dropdownList,
};

export default DropdownEdit;
