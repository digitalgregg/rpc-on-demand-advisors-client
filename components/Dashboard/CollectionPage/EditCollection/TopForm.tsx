import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import InputField from "../../../Shared/InputField";
import MultiSelect from "../../../Shared/MultiSelect";
import {
    GetCollectionContext,
    initialCollection,
} from "../../../Context/CollectionDataProvider";
import { useAtom } from "jotai";
import { signupState, team_state } from "../../../../state";
import { fetchTeamUsers } from "../../../../api-call/UserManageApi";
import {
    getShareWithArr,
    getShareWithData,
} from "../../../../api-call/ReuseableApi";
import { useQuery } from "react-query";
import { removeEmpty } from "../../../../utils/removeEmpty";
import api from "../../../../api";
import LodingAnimation from "../../../Shared/LodingAnimation";
import { toast } from "react-toastify";
import useCopyToClipboard from "../../../Library/useCopyToClipboard";
import {
    updateCollection,
    publishCollection,
    unPublishCollection,
} from "../../../../api-call/CollectionApi";

const initialValues = {
    collection_title: "",
    share_with: "",
};

const validationSchema = Yup.object({
    collection_title: Yup.string(),
    share_with: Yup.mixed(),
});

function TopForm() {
    const context = GetCollectionContext();
    const data = context.collectionData || initialCollection;

    const [isSave, setSave] = useState(false);

    const [copyValue, setCopyValue] = useCopyToClipboard();

    const [userData] = useAtom(signupState);
    const [teamData] = useAtom(team_state);

    const [buttonLoading, setButtonLoading] = useState(false);

    const [colTitleValue, setColTitleValue] = useState(data.title);
    const [shareWithValue, setShareWithValue] = useState<
        SelectResultType | SelectResultType[]
    >();

    const { data: shareWith, isSuccess } = useQuery("get-team-users", () =>
        fetchTeamUsers(teamData.id)
    );

    useEffect(() => {
        setColTitleValue(data.title);
        context.collectionData &&
            setShareWithValue(getDataToSelectObj(context.collectionData));
    }, [data]);

    useEffect(() => {
        const leftShareWith = getShareWithData(shareWithValue);
        const rightShareWith = {
            shareWith: data.shareWith,
            sharedUser: data.sharedUser.map((v) => v._id),
        };
        if (
            colTitleValue === data.title &&
            JSON.stringify(leftShareWith) === JSON.stringify(rightShareWith)
        ) {
            setSave(false);
        } else if (
            colTitleValue !== data.title ||
            JSON.stringify(leftShareWith) !== JSON.stringify(rightShareWith)
        ) {
            setSave(true);
        }
    }, [colTitleValue, shareWithValue]);

    const options = [
        { value: "all-team-members", label: "All Team Members" },
        { value: "no-team-members", label: "No Team Members" },
    ].concat(isSuccess ? getShareWithArr(shareWith?.data, userData._id) : []);

    const handleCollectionUpdate = async (v: any) => {
        setButtonLoading(true);
        if (isSave) {
            console.log("Update collection");
            const shareWithApiObj = getShareWithData(shareWithValue);

            const collectionUpdateObj = {
                title: colTitleValue,
                ...shareWithApiObj,
            };
            await updateCollection(data._id, collectionUpdateObj);
            context.refetch();
            setButtonLoading(false);
        } else {
            if (data.publish) {
                await unPublishCollection(data._id);
                context.refetch();
                setButtonLoading(false);
            } else {
                const publishApiObj = {
                    site_title: data.title,
                    profile_info: data.user_id,
                    collection_id: data._id,
                };
                try {
                    const res = await publishCollection(publishApiObj);
                    const link = res.data.link;
                    setButtonLoading(false);
                    setCopyValue(`${window.location.origin}/c/${link}`);
                    toast.success("Published and link copied");

                    context.refetch();
                } catch (error) {
                    setButtonLoading(false);
                    console.log(error);
                }
            }
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(v) => handleCollectionUpdate(removeEmpty(v))}
        >
            {({ setFieldValue }) => (
                <Form>
                    <div className="flex flex-col sm:flex-row   w-full">
                        <InputField
                            name="collection_title"
                            label="Collection title"
                            inputClass="!border-[#676767] [background-color:transparent_!important]"
                            placeholder="Type here...."
                            className="basis-[40%]"
                            value={colTitleValue}
                            onChange={(e: any) => {
                                setColTitleValue(e.target.value);
                            }}
                        />
                        <div className="pt-[15px] sm:pt-0 sm:pl-[15px] lg:pl-[20px]"></div>
                        <CollectionsSelect
                            options={options}
                            setValue={setShareWithValue}
                            value={shareWithValue}
                        />
                        <div className=" pt-[20px] sm:pt-0 sm:pl-[15px] lg:pl-[20px]"></div>

                        <button
                            type="submit"
                            className="h-[55px] sm:mt-[31.78px] sm:w-[130px] rounded-[4px] w-full md:text-sm leading-[54px] hover:bg-[#890F21] transition-all duration-200 text-xs text-[#fff] basis-[28%] font-semibold text-center bg-[#E51937]"
                        >
                            {buttonLoading ? (
                                <span className="flex items-center gap-[10px] justify-center">
                                    <div>
                                        <LodingAnimation color="white" />
                                    </div>
                                    <div>Loading...</div>
                                </span>
                            ) : isSave ? (
                                "Save Collection"
                            ) : data.publish ? (
                                "Unpublish Collection"
                            ) : (
                                "Publish collection"
                            )}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
const CollectionsSelect = ({
    options,
    value,
    setValue,
}: {
    options: object[];
    value?: SelectResultType | SelectResultType[];
    setValue: any;
}) => {
    useEffect(() => {
        const checkValue = value && checkSelectValue(value);
        if (checkValue) {
            if (typeof checkValue == "object") {
                setValue(checkValue);
            }
        }
    }, [value]);
    return (
        <MultiSelect
            options={options}
            name="share_with"
            className="basis-[40%]"
            type={
                value
                    ? checkSelectValue(value)
                        ? "single"
                        : "multi"
                    : "single"
            }
            label="Share with"
            value={value}
            isDual={true}
            valueChange={(v) => {
                setValue(v);
            }}
        />
    );
};

type SelectResultType = {
    label: string;
    value: string;
};

const checkSelectValue = (value: SelectResultType[] | SelectResultType) => {
    if (Array.isArray(value)) {
        return value.find(
            (v) => v.value == "all-team-members" || v.value == "no-team-members"
        );
    } else {
        return (
            value.value.includes("all-team-members") ||
            value.value.includes("no-team-members")
        );
    }
};

export default TopForm;

function getDataToSelectObj(collectionData: {
    _id: string;
    user_id: string;
    team_id: string;
    title: string;
    contents: any[];
    shareWith: string;
    sharedUser: any[];
    sharingDetails: any[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}): any {
    switch (collectionData.shareWith) {
        case "all":
            return {
                value: "all-team-members",
                label: "All Team Members",
            };
        case "no":
            return {
                value: "no-team-members",
                label: "No Team Members",
            };
        case "user":
            return collectionData.sharedUser.map((v) => ({
                value: v._id,
                label: v.name,
            }));
        default:
            return "";
    }
}
