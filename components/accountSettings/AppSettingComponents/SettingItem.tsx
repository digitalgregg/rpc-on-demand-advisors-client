import React from "react";
import {
    deleteAppSetting,
    SettingsItem,
} from "../../../api-call/AppSettingsApi";
import { DeleteIcon, EditIcon } from "../../CustomIcons";
import TagBadges from "../../CustomIcons/TagBadges";
import { useState } from "react";
import YesNoModal from "../../modal/YesNoModal";
import { GetSettingsContext } from "../../Context/SettingsDataProvider";
import EditSettingItem from "./EditSettingItem";

export type SItemType = {
    type: string;
    data: SettingsItem & { order?: number };
};

function SettingItem({ data, type }: SItemType) {
    const { refetch } = GetSettingsContext();
    const [deleteModal, setDeleteModal] = useState(false);
    const handleDeleteModal = () => {
        setDeleteModal(!deleteModal);
    };

    const [isExpand, setExpand] = useState(false);
    const handleExpand = () => {
        setExpand(!isExpand);
    };

    const handleSettingDelete = async (_: any, setLoading: any) => {
        setLoading(true);
        await deleteAppSetting(data._id);
        setLoading(false);
        handleDeleteModal();
        refetch();
    };

    return (
        <>
            <div className=" rounded h-[50px] p-[10px] border border-solid border-[#9E9E9E] flex flex-row justify-between">
                <div className=" flex items-center flex-row gap-[16px]">
                    {data.order && (type === "funnel" || type === "content") && (
                        <div className=" w-[30px] h-[30px] flex justify-center items-center bg-[#E519371A] rounded">
                            <span className=" text-base leading-[22px] font-bold text-primary">
                                {data.order}
                            </span>
                        </div>
                    )}
                    {type === "tags" &&
                        (data.color ? (
                            <div className="pl-3">
                                <TagBadges color={data.color} />
                            </div>
                        ) : (
                            <div className="pl-3">
                                <TagBadges color={"black"} />
                            </div>
                        ))}

                    <span className=" text-sm leading-[19px] font-normal text-black">
                        {data.title}
                    </span>
                </div>
                <div className=" flex items-center flex-row gap-5">
                    <div onClick={handleExpand} className=" cursor-pointer">
                        <EditIcon width="18px" height="18px" stroke="#E51937" />
                    </div>
                    <div
                        onClick={handleDeleteModal}
                        className=" cursor-pointer"
                    >
                        <DeleteIcon
                            width="18px"
                            height="18px"
                            stroke="#E51937"
                        />
                    </div>
                </div>
            </div>
            <YesNoModal
                header="Delete Application Settings"
                description={`Are you sure you want to remove "${data.title}"? Removing this option won't remove this for existing items`}
                isOpen={deleteModal}
                handleModal={handleDeleteModal}
                onYesClick={handleSettingDelete}
            />
            <EditSettingItem
                isExpand={isExpand}
                handleExpand={handleExpand}
                data={data}
                type={type}
            />
        </>
    );
}

export default SettingItem;
