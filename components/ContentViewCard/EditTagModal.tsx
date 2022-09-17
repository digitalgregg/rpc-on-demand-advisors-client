import React, { useState } from "react";
import OverflowModal from "../Shared/CustomUtils/OverflowModal";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    contentData: ContentDataType;
    refetch: any;
};

function EditTagModal({ isOpen, onClose, contentData, refetch }: ModalProps) {
    const [teamData] = useAtom(team_state);

    const [buttonLoading, setButtonLoading] = useState(false);

    const [tags, setTags] = useState<any>();

    const { data, isLoading, isSuccess, isError } = useQuery(
        "application-settings-query",
        () => fetchAppSettings(teamData.id),
        {
            select: (response) => response.data,
            retry(failureCount, error: any) {
                if (
                    error?.response?.data?.message ===
                    "Application Settings not found"
                ) {
                    return false;
                } else {
                    return true;
                }
            },
        }
    );

    const handleTagsUpdate = async () => {
        if (!tags) return;
        console.log(tags);
        setButtonLoading(true);
        await updateContentDetails(contentData._id, { tags });
        setButtonLoading(false);
        onClose();
        refetch();
    };

    return (
        <div className="">
            <OverflowModal
                className="bg-white w-[calc(100vw-40px)] max-w-[510px] h-[250px] px-[30px]  py-[40px]"
                isOpen={isOpen}
                onRequestClose={onClose}
            >
                <div className="">
                    <h3 className="text-[16px] font-semibold text-[#000]	mb-[10px]">
                        Update tag
                    </h3>
                    <div className="w-full mb-[40px]">
                        <EditTagField
                            options={getTagOptionsData(data, "tags")}
                            defaultValue={getTagsDefaultValue(
                                contentData,
                                "tags"
                            )}
                            handleOnChange={(v) => {
                                setTags(
                                    Array.isArray(v)
                                        ? v.map((val) => val.value)
                                        : []
                                );
                            }}
                            placeholder="Select tags"
                        />
                    </div>
                    {/* buttons section  */}
                    <div className="flex justify-between gap-[10px] w-full mx-auto">
                        <button
                            onClick={onClose}
                            className="w-full h-[45px] rounded-[4px] text-[16px] text-primary border border-primary hover:bg-primary hover:text-[#FFFFFF] transition-all duration-150"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleTagsUpdate}
                            className="w-full h-[45px] rounded-[4px] text-[16px]  border border-primary bg-primary hover:bg-[#890F21] text-[#FFFFFF] transition-all duration-150"
                        >
                            {buttonLoading ? (
                                <span className="flex items-center gap-[10px] justify-center">
                                    <div>
                                        <LodingAnimation color="white" />
                                    </div>
                                    <div>Loading...</div>
                                </span>
                            ) : (
                                "Update"
                            )}
                        </button>
                    </div>
                </div>
            </OverflowModal>
        </div>
    );
}

import Select, { StylesConfig } from "react-select";
import TagBadges from "../CustomIcons/TagBadges";
import EditTagField from "../Shared/EditTagField";
import {
    ContentDataType,
    updateContentDetails,
} from "../../api-call/ContentApi";
import { getTagOptionsData, getTagsDefaultValue } from "../FilterFields";
import { useQuery } from "react-query";
import { fetchAppSettings } from "../../api-call/AppSettingsApi";
import { useAtom } from "jotai";
import { team_state } from "../../state";
import LodingAnimation from "../Shared/LodingAnimation";
import { toast } from "react-toastify";

export default EditTagModal;
