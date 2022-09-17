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
import Skeleton from "react-loading-skeleton";
import { useEffect } from "react";
import { deleteCollection } from "../../../api-call/CollectionApi";
import { toast } from "react-toastify";
import Moment from "react-moment";

export interface CollectionData {
    _id: string;
    user_id: string;
    team_id: string;
    title: string;
    contents: any[];
    shareWith: string;
    sharedUser: any[];
    publish: any;
    sharingDetails: any[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

function CollectionItem({
    data,
    refetch,
}: {
    data: CollectionData;
    refetch: () => any;
}) {
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
                return router.push(
                    editCollectionPath(data.shareWith) + data._id
                );

            default:
                break;
        }
    };

    const collectionDelete = async (_: any, setLoading: any) => {
        setLoading(true);
        try {
            await deleteCollection(data._id);
            toast.success("Collection deleted successfully");
            setLoading(false);
            handleDeleteModal();
            refetch();
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <>
            <div className="relative">
                <Link href={viewCollectionPath(data.shareWith) + data._id}>
                    <div className="w-full cursor-default h-[121px] bg-[#FFFFFF] relative rounded-[4px]  shadow-[0px_2px_25px_rgba(0,0,0,0.06)] hover:shadow-[0px_2px_20px_rgba(229,25,55,0.2)] border border-transparent  transition ease-in-out duration-200 hover:border hover:border-primary px-[20px] py-[20px]">
                        <h3 className="text-[16px] font-semibold text-[#222222] w-[269px] truncate ">
                            {data.title}
                        </h3>
                        <p className="text-[14px] font-normal text-[#222222] mt-[10px] mb-[10px]">
                            Total content{" "}
                            <span className="font-semibold ">
                                ({data.contents.length || 0})
                            </span>{" "}
                        </p>
                        <p className="text-[#676767] text-[13px]">
                            Last updated:{" "}
                            <Moment date={data.updatedAt} fromNow />
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
                            data={data}
                        />
                    )}
                </OutSider>
            </div>
            <YesNoModal
                isOpen={deleteModal}
                handleModal={handleDeleteModal}
                onYesClick={collectionDelete}
                header={`Remove ${data.title}`} // TODO: 'my collection' -> collection name
                description={`Are you sure you want to remove ${data.title}? This action cannot be undone`}
            />
        </>
    );
}

function editCollectionPath(shareWith: string) {
    if (shareWith == "no") {
        return "/dashboard/collections/edit/";
    } else {
        return "/dashboard/shared-collections/edit/";
    }
}
function viewCollectionPath(shareWith: string) {
    if (shareWith == "no") {
        return "/dashboard/collections/view-contents/";
    } else {
        return "/dashboard/shared-collections/view-contents/";
    }
}

type DropdownItemType = {
    id: number;
    title: string;
    img: (stroke: string) => ReactElement;
};

const EditColDropdown = ({
    onDropdownClick,
    data,
}: {
    data: CollectionData;
    onDropdownClick?: (v: DropdownItemType) => void;
}) => {
    let listArr = [
        {
            id: 1,
            title: "Edit",
            img: (stroke = "#222222") => (
                <NewEditIcon stroke={stroke} width="16px" height="16px" />
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

    listArr = data.publish
        ? insert(listArr, 1, {
              id: 1,
              title: "Copy",
              img: (stroke = "#222222") => (
                  <CopyIcon stroke={stroke} width="16px" height="16px" />
              ),
          })
        : listArr;

    const [dropdownList, setDropdownList] = useState<any[]>(listArr);
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

const insert = (arr: any[], index: number, newItem: any) => [
    ...arr.slice(0, index),
    newItem,
    ...arr.slice(index),
];

export default CollectionItem;
