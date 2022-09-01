/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState, ReactElement } from "react";
import Link from "next/link";
import OutSider from "../../Shared/OutSider/index";
import { motion } from "framer-motion";
import YesNoModal from "../../modal/YesNoModal";
import { EditIcon, DeleteIcon } from "../../CustomIcons";
import CopyIcon from "../../CustomIcons/CopyIcon";
import NewDeleteIcon from "../../CustomIcons/NewDeleteIcon";
import NewEditIcon from "../../CustomIcons/NewEditIcon";
import { useRouter } from "next/router";

type ItemDataType = {
    id: string;
    name: string;
    totalContent: number;
    lastUpdated: string;
};

function CollectionItem({ data }: { data: ItemDataType }) {
    const router = useRouter();

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const handleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const [deleteModal, setDeleteModal] = useState(false);

    const handleDeleteModal = () => {
        setDeleteModal(!deleteModal);
    };

    const dropdownClickHandle = (v: DropdownItemType) => {
        switch (v.title) {
            case "Delete":
                return handleDeleteModal();
            case "Edit":
                return router.push("/dashboard/collections/edit/" + data.id);

            default:
                break;
        }
    };

    return (
        <>
            <div className="relative">
                <Link href={`/dashboard/collections/view-contents/${data.id}`}>
                    <div className="w-full cursor-default h-[121px] bg-[#FFFFFF] relative rounded-[4px]  shadow-[0px_2px_25px_rgba(0,0,0,0.06)] hover:shadow-[0px_2px_20px_rgba(229,25,55,0.2)] border border-transparent  transition ease-in-out duration-200 hover:border hover:border-primary px-[20px] py-[20px]">
                        <h3 className="text-[16px] font-semibold text-[#222222] w-[269px] truncate ">
                            Test Collection name
                        </h3>
                        <p className="text-[14px] font-normal text-[#222222] mt-[10px] mb-[10px]">
                            Total content{" "}
                            <span className="font-semibold ">(12)</span>{" "}
                        </p>
                        <p className="text-[#676767] text-[13px]">
                            Last updated: 23m ago
                        </p>
                    </div>
                </Link>
                <OutSider onOutSideClick={() => setDropdownOpen(false)}>
                    <div
                        className="absolute top-[12px] right-[12px] cursor-pointer w-[40px] h-[40px]  "
                        onClick={handleDropdown}
                    >
                        <motion.div whileTap={{ scale: 0.8 }}>
                            <img
                                src="/img/editIcon.svg"
                                alt="edit"
                                className="w-[40px] h-[40px] p-2  "
                            />
                        </motion.div>
                    </div>

                    {dropdownOpen && (
                        <EditColDropdown
                            onDropdownClick={dropdownClickHandle}
                        />
                    )}
                </OutSider>
            </div>
            <YesNoModal
                isOpen={deleteModal}
                handleModal={handleDeleteModal}
                header="Remove my collection" // TODO: 'my collection' -> collection name
                description="Are you sure you want to remove my collection? This action cannot be undone"
            />
        </>
    );
}

type DropdownItemType = {
    id: number;
    title: string;
    img: (stroke: string) => ReactElement;
};

const dropdownList: DropdownItemType[] = [
    {
        id: 1,
        title: "Edit",
        img: (stroke = "#222222") => (
            <NewEditIcon stroke={stroke} width="16px" height="16px" />
        ),
    },
    {
        id: 1,
        title: "Copy",
        img: (stroke = "#222222") => (
            <CopyIcon stroke={stroke} width="16px" height="16px" />
        ),
    },
    {
        id: 4,
        title: "Delete",
        img: (stroke = "#222222") => (
            <NewDeleteIcon stroke={stroke} width="16px" height="16px" />
        ),
    },
];

const EditColDropdown = ({
    onDropdownClick,
}: {
    onDropdownClick?: (v: DropdownItemType) => void;
}) => {
    return (
        <div className="z-50 shadow-[4px_4px_8px_rgba(0,0,0,0.25)] overflow-hidden p-[5px] bg-white rounded absolute top-[44px] right-[37px]">
            {dropdownList.map((v, i) => (
                <div
                    key={i}
                    onClick={() => onDropdownClick && onDropdownClick(v)}
                >
                    <EditColDropdownItem val={v} />
                </div>
            ))}
        </div>
    );
};

const EditColDropdownItem = ({ val }: { val: DropdownItemType }) => {
    const [isHover, setHover] = useState(false);
    const handleHover = () => {
        setHover(!isHover);
    };
    return (
        <div
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className="flex items-center rounded-[3px] gap-3 p-[5px_10px] hover:bg-[rgba(229,25,55,0.1)] cursor-pointer"
        >
            {val.img(isHover ? "#E51937" : "#222")}
            <div
                className={`text-sm leading-[19.07px] text-[#222] ${
                    isHover && "!text-primary"
                }`}
            >
                {val.title}
            </div>
        </div>
    );
};

CollectionItem.defaultProps = {
    data: {
        id: "string",
        name: "Collection Name",
        totalContent: 12,
        lastUpdated: "23m ago",
    },
};

export default CollectionItem;
