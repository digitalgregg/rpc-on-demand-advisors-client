import React, { useState } from "react";
import DeleteIcon from "../CustomIcons/DeleteIcon";
import DownloadIcon from "../CustomIcons/DownloadIcon";
import EditIcon from "../CustomIcons/EditIcon";
import TagIcon from "../CustomIcons/TagIcon";
import UpdateIcon from "../CustomIcons/UpdateIcon";
import TagModal from "../modal/TagModal/index";

type DropdownProps = {
    mapIndex: number;
    clickedId: any;
    isOpen: boolean;
};

const item = [
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
const EditDropdown = ({ mapIndex, clickedId, isOpen }: DropdownProps) => {
    const [openModal, setOpenModal] = useState(false);
    const handleIconClick = (title: any) => {
        if (title === "Tag") setOpenModal(!openModal);
    };

    return (
        <div className="">
            {clickedId === mapIndex && isOpen && (
                <div
                    style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.25)" }}
                    className="w-[156px] h-[210px] bg-[#FFFFFF] rounded-[4px]  px-[10px] flex flex-col justify-center"
                >
                    {item.map((list: any) => (
                        <DropdownList
                            key={list.id}
                            handleIconClick={handleIconClick}
                            list={list}
                        />
                    ))}
                </div>
            )}
            <TagModal isOpen={openModal} onClose={() => setOpenModal(false)} />
        </div>
    );
};

const DropdownList = ({
    handleIconClick,
    list,
}: {
    handleIconClick: any;
    list: any;
}) => {
    const [isHover, setHover] = useState(false);
    const handleHover = () => {
        setHover(!isHover);
    };
    return (
        <div className="">
            <ul className="rounded-[4px] hover:bg-[rgba(229,25,55,0.1)]">
                <li
                    onClick={() => handleIconClick(list.title)}
                    className="flex gap-[12px] cursor-pointer py-2 group px-[10px] text-[16px] items-center  text-[#222222]"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                >
                    {list.img(isHover ? "#E51937" : "#222222")}{" "}
                    <span className=" text-[16px] text-[#222222] group-hover:text-primary group-hover:font-semibold	">
                        {list.title}
                    </span>{" "}
                </li>
            </ul>
        </div>
    );
};

export default EditDropdown;
