/* eslint-disable @next/next/no-img-element */
import React from "react";
import { DeleteIcon } from "../../CustomIcons";
import { useState } from "react";
import Link from "next/link";
import OutSider from "../../Shared/OutSider/index";
import { motion } from "framer-motion";
import YesNoModal from "../../modal/YesNoModal";

type ItemDataType = {
    id: string;
    name: string;
    totalContent: number;
    lastUpdated: string;
};

function CollectionItem({ data }: { data: ItemDataType }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const handleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const [deleteModal, setDeleteModal] = useState(false);

    const handleDeleteModal = () => {
        setDeleteModal(!deleteModal);
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
                        <div className="absolute top-[44px]  right-[31px] w-[111px] h-[70px] z-50 shadow-[4px_4px_8px_rgba(0,0,0,0.25)] bg-white rounded flex items-center justify-center px-[10px]">
                            <ul className="w-full  ">
                                <Link
                                    href={`/dashboard/collections/edit/${data.id}`}
                                >
                                    <li className="flex group rounded-[2px] gap-[18px] items-center mb-[12px] text-[14px] px-2 py-[2px]  transition ease-in-out duration-200 hover:bg-[rgba(229,25,55,0.1)] cursor-pointer ">
                                        <img
                                            src="/img/editIcon.svg"
                                            alt="edit"
                                        />
                                        <span className="group-hover:text-primary text-[#222222] ">
                                            Edit
                                        </span>
                                    </li>
                                </Link>
                                <li
                                    className="flex gap-[18px] rounded-[2px] items-center  transition ease-in-out duration-200 text-[14px] hover:bg-[rgba(229,25,55,0.1)] px-2 group py-[2px] cursor-pointer"
                                    onClick={handleDeleteModal}
                                >
                                    <DeleteIcon
                                        stroke="#E51937"
                                        width="12px"
                                        height="12px"
                                    />
                                    <span className="group-hover:text-primary text-[#222222]">
                                        Delete
                                    </span>
                                </li>
                            </ul>
                        </div>
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

CollectionItem.defaultProps = {
    data: {
        id: "string",
        name: "Collection Name",
        totalContent: 12,
        lastUpdated: "23m ago",
    },
};

export default CollectionItem;
